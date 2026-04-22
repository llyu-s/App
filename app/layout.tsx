import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "llyus",
  description: "Personal website for llyus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
