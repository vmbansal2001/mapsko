import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const avenir = localFont({
  src: [
    {
      path: "../assets/fonts/avenir/Avenir Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Heavy.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/avenir/Avenir Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mapsko",
  description: "Inspiring ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} antialiased`}>{children}</body>
    </html>
  );
}
