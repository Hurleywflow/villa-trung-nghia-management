import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { NextAuthProvider } from '../components/AuthProvider/AuthProvider';
import Navbar from '../components/Header/Navbar';
import Sidebar from '../components/Header/nav/sideBar/sidebar';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';
import Toast from '../components/Toast/Toast';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Villa Dalat | Trung Nghia | Villa Đà Lạt',
  description: 'Cho thuê Villa Đà Lạt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400'
    >
      <body className='!scroll-smooth  bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400'>
        <NextAuthProvider>
          <ThemeProvider>
            <Navbar />
            <Sidebar />
            {/* <Header /> */}
            {children}
            <Toast />
          </ThemeProvider>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
