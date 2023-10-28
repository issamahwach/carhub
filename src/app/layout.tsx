import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainFooter, MainHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cars Shop",
  description: "The Best Car Shop In Town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} dir="ltr">
        <div className="overflow-hidden relative">
          <MainHeader />
          {children}
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
