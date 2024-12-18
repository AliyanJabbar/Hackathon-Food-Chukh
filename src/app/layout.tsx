import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/topHeader";
import Footer from "@/components/footer";
import { Suspense } from "react";
import Loading from "./loading";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foodtuck",
  description: "Created by Aliyan Jabbar",
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full bg-white`}>
        <Suspense fallback={<Loading />}>
          <CartProvider>
            <TopHeader />
            {children}
            <Footer />
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
