import type { Metadata } from "next";
import "./globals.css";
import { GlobalPageLayout } from "@/app/components/layout/GlobalPageLayout";
import RecipifyQueryProvider from "@/app/query-provider.tsx";
import { showNextLogoInHeader } from "@/app/nextjs-demo-config.tsx";

export const metadata: Metadata = {
  title: "Recipify Next.js demo",
  description: "Recipes for hungry frontend devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/fonts/google-fonts.css" rel="stylesheet" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/regular.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
        <title>
          {showNextLogoInHeader ? "Recipify Next.js Demo" : "Recipify Demo"}
        </title>
      </head>
      <body suppressHydrationWarning>
        <RecipifyQueryProvider>
          <GlobalPageLayout>{children}</GlobalPageLayout>
        </RecipifyQueryProvider>
      </body>
    </html>
  );
}
