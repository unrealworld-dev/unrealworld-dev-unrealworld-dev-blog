import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/blog/header/site-header";
import { ThemeProvider } from "@/components/blog/themes/providers";

export const metadata: Metadata = {
  title: "Unreal World Blog",
  description: "Unreal 개발을 위한 블로그 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
