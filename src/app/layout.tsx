import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreamingSite",
  description: "Site de développement avec Next.js pour le streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Header/>
    {children}
    </body>
    </html>
  );
}
