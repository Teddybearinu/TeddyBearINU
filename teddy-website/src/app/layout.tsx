import { Montserrat } from "next/font/google";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEDDY BEAR INU",
  description: "TEDDY BEAR INU",
};

const montserrat = Montserrat({ subsets: ["latin"] });

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
        <Toaster toastOptions={{ position: "top-right" }} />
      </body>
    </html>
  );
}
