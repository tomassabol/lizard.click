import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "~/providers/convex-provider";
import { ClickCounter } from "~/components/click-counter";
import { EnableAudio } from "~/components/enable-audio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lizard",
  description: "Lizard, Lizard, Lizard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <ClickCounter />
          {children}
          <EnableAudio />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
