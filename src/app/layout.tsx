import type { Metadata } from "next";
import localFont from "next/font/local";
import { CartProviderShell } from "@/components/cart/cart-provider-shell";
import "./globals.css";

const dingTalkJinBuTi = localFont({
  src: "./fonts/DingTalk-JinBuTi.ttf",
  variable: "--font-dingtalk-jinbuti",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PawWarm | Premium Pet Knitwear",
  description:
    "A premium homepage prototype for PawWarm, a warm and editorial pet knitwear brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dingTalkJinBuTi.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-charcoal)] antialiased">
        <CartProviderShell>{children}</CartProviderShell>
      </body>
    </html>
  );
}
