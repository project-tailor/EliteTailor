import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Product List App",
  description:
    "A simple product listing application built with Next.js and Supabase",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold text-center">Product List</h1>
        </header>
        <main className="p-4">{children}</main>
        <footer className="bg-blue-600 text-white p-4 mt-8 text-center">
          <p>© {new Date().getFullYear()} Product List App</p>
        </footer>
      </body>
    </html>
  );
}
