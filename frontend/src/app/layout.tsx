import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast"; 
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Arni Fitness",
  description: "Arni Fitness App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NextUIProvider>
          <Toaster position="top-right" />
          {children}
        </NextUIProvider>
        </body>
    </html>
  );
}
