import { Metadata } from "next";
import ClientLayout from './ClientLayout'; 

export const metadata: Metadata = {
  title: "Foodtuck",
  description: "Created by Aliyan Jabbar",
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
