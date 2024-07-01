import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-4/5 m-auto min-h-dvh h-full bg-white mt-4 font-sans">
        {children}
      </body>
    </html>
  );
}
