import RootLayout from "./RootLayout";

import "./globals.css";

export default function AppLayout({ children }: React.PropsWithChildren<{}>) {
  return <RootLayout>{children}</RootLayout>;
}
