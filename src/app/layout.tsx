import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/topHeader";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "foodtuck",
  description: "Created by Aliyan Jabbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full bg-white`}>
        <TopHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
