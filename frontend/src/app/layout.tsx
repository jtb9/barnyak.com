import type { Metadata } from "next";
import { AptabaseProvider } from '@aptabase/react';

export const metadata: Metadata = {
  title: "Barnyak",
  description: "Video Games and Space News.  A collection of interesting things, reviews and my take on techish news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body><AptabaseProvider appKey="A-SH-0454767800">{children}</AptabaseProvider></body>
    </html>
  );
}
