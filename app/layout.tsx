import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import "./globals.css"; // Corrected the import path

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
