import PasswordProtection from "@/components/PasswordProtection/PasswordProtection";
import { checkAuth } from "@/lib/auth";
import type { Metadata } from "next";
import { headers } from "next/headers";
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
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  // Skip password protection for Sanity Studio (/admin route)
  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthenticated = isAdminRoute || await checkAuth();

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
