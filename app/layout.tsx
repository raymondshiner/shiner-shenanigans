import PasswordProtection from "@/components/PasswordProtection";
import { checkAuth } from "@/lib/auth";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiner Shenanigans",
  description: "A simple Next.js application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthenticated = await checkAuth();

  return (
    <html lang="en">
      <body>
        <PasswordProtection isAuthenticated={isAuthenticated}>
          {children}
        </PasswordProtection>
      </body>
    </html>
  );
}
