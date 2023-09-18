import { FormDataProvider } from "@/contexts/formDataContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Tast",
  description: "Minimalistic form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>Header</header>
        <FormDataProvider>{children}</FormDataProvider>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
