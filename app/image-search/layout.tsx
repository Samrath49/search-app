import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lens",
  description: "Search functionality similar to google lens.",
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
