import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Header/Navbar";
import ThemeProvider from "../components/ThemeProvider/ThemeProvider";
import Header from "../components/header";
import "./globals.css";
import { NextAuthProvider } from '../components/AuthProvider/AuthProvider';
import Toast from '../components/Toast/Toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Villa Trung Nghia | Dalat",
  description: "Create by Hurley Nguyen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Navbar />
            <Header />
            <Toast />
            {children}
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
