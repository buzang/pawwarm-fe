import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-charcoal)] antialiased">
        {children}
      </body>
    </html>
  );
}
