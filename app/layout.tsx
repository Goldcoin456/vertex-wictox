import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vertex",
  description: "An AI-powered learning platform with intelligent content search.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
