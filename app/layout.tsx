import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
import "./globals.css"; // Corrected the import path
import { Analytics } from "@vercel/analytics/react";
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
