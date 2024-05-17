import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ParrotWeb",
  description: "Web Devloper ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
