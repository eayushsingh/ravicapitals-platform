import type { Metadata } from "next";
import localFont from "next/font/local";
import { Web3Provider } from "@/components/Web3Provider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "RaviCapitals",
  description: "Real estate fractional investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
