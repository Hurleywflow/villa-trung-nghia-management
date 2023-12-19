import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Header/Navbar';
import Header from './components/header';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Villa Trung Nghia | Dalat',
  description: 'Create by Hurley Nguyen'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
