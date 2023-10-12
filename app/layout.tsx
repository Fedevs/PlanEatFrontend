import { ReduxProvider } from "@/app/redux/provider";
import "./globals.scss";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plan Eat",
  description: "A meal planner app",
  themeColor: "#f7f7f7",
  icons: { apple: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
