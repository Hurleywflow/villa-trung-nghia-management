import { NextAuthProvider } from '@/app/components/AuthProvider/AuthProvider';
import Navbar from '@/app/components/HeaderRooms/Navbar';
import Sidebar from '@/app/components/HeaderRooms/nav/sideBar/sidebar';
import ThemeProvider from '@/app/components/ThemeProvider/ThemeProvider';
import Toast from '@/app/components/Toast/Toast';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=' bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400'>
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
    </section>
  );
}
