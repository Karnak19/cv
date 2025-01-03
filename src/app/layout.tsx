import React from "react";
import PlausibleProvider from "next-plausible";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <PlausibleProvider
          domain="cv.basile.vernouillet.dev"
          customDomain="https://plausible.rover.vernouillet.dev"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
