import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoolu",
  description: "Zoolu - A simple e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${mulish.className} antialiased`}>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
