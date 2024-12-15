import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Search",
  description: "Search functionality similar to google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-arial`}>{children}</body>
    </html>
  );
}
