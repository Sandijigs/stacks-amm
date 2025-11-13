import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stacks AMM",
  description: "Trade any token on Stacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col gap-8 w-full">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
