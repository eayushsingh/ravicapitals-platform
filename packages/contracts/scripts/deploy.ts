import hre from "hardhat";

async function main() {
  console.log("Deploying FractionalPropertyToken for Ravi Capitals...");

  // SPV Alpha: Prestige Tech Park — Block C
  const tokenName = "RaviCap SPV Alpha Bengaluru";
  const tokenSymbol = "RC-PTP";
  const spvId = "SPV-IN-KA-2026-001";
  const initialSupply = 24000n; // Total fractional shares

  const token = await hre.viem.deployContract("FractionalPropertyToken", [
    tokenName,
    tokenSymbol,
    spvId,
    initialSupply,
  ]);

  console.log(`FractionalPropertyToken deployed successfully!`);
  console.log(`Contract Address: ${token.address}`);
  console.log(`SPV ID: ${spvId}`);
  console.log(`Total Tokenized Shares: ${initialSupply.toString()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
