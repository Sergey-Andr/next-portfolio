import type { Metadata } from "next";
import { dir } from "i18next";
import "./globals.css";
import { languages } from "@/app/i18n/settings";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)} className="scroll-smooth">
      <body className="w-4/5 m-auto min-h-dvh h-full bg-white font-sans ">
        {children}
      </body>
    </html>
  );
}
