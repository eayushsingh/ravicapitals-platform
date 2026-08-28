"use client";

import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { FractionalPropertyTokenABI } from "@repo/contracts";

interface InvestModalProps {
  property: {
    id: string;
    title: string;
    tokenPrice: string | number;
    availableTokens: number;
    contractAddress?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function InvestModal({ property, isOpen, onClose }: InvestModalProps) {
  const [tokenCount, setTokenCount] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  // Read KYC status from on-chain contract
  const { data: isKycVerified } = useReadContract({
    address: (property.contractAddress || "0x0000000000000000000000000000000000000000") as `0x${string}`,
    abi: FractionalPropertyTokenABI,
    functionName: "isKycVerified",
    args: address ? [address] : undefined,
  });

  if (!isOpen) return null;

  const totalCost = Number(property.tokenPrice) * tokenCount;

  const handleInvest = async () => {
    if (!isConnected) {
      setStatusMsg("Please connect your wallet first");
      return;
    }

    setIsProcessing(true);
    setStatusMsg("Processing investment...");

    try {
      const token = localStorage.getItem("rc_token");
      
      // Step 1: Record atomic transaction in NestJS backend
      const res = await fetch("http://localhost:4000/investments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          propertyId: property.id,
          tokenCount,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to process investment");
      }

      setStatusMsg("Investment confirmed successfully!");
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err: any) {
      setStatusMsg(err.message || "Transaction failed");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm sm:p-4">
      <div className="bg-[#1e293b] border border-white/10 max-sm:border-b-0 max-sm:rounded-b-none rounded-t-3xl sm:rounded-2xl max-w-md w-full p-6 pb-10 sm:pb-6 text-white shadow-2xl animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/10">
          <h3 className="text-lg font-bold">Invest in {property.title}</h3>
          <button onClick={onClose} className="text-white/50 hover:text-white text-sm">✕</button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm text-white/70">
            <span>Price per Token</span>
            <span className="font-semibold text-white">₹{Number(property.tokenPrice).toLocaleString("en-IN")}</span>
          </div>

          <div className="flex justify-between text-sm text-white/70">
            <span>Available Tokens</span>
            <span className="font-semibold text-white">{property.availableTokens}</span>
          </div>

          <div className="pt-2">
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Number of Tokens</label>
            <input
              type="number"
              min={1}
              max={property.availableTokens}
              value={tokenCount}
              onChange={(e) => setTokenCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white font-medium focus:outline-none focus:border-brand-green"
            />
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between items-center">
            <span className="text-sm font-medium">Total Investment</span>
            <span className="text-xl font-extrabold text-brand-green">₹{totalCost.toLocaleString("en-IN")}</span>
          </div>

          {statusMsg && (
            <div className="text-xs p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/30 text-white/90">
              {statusMsg}
            </div>
          )}

          <button
            onClick={handleInvest}
            disabled={isProcessing}
            className="w-full py-3.5 rounded-lg bg-brand-green text-slate-950 font-bold hover:opacity-95 transition-all disabled:opacity-50 cursor-pointer"
          >
            {isProcessing ? "Processing..." : `Confirm Investment (₹${totalCost.toLocaleString("en-IN")})`}
          </button>
        </div>
      </div>
    </div>
  );
}
