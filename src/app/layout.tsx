import { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodChukh",
  description: "Fast Food Website",
};
export default function AppLayout({ children }: React.PropsWithChildren<{}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
