/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Navbar from '@/app/components/HeaderRooms/Navbar';
import Sidebar from '@/app/components/HeaderRooms/nav/sideBar/sidebar';
import Toast from '@/app/components/Toast/Toast';
import { Toaster } from '@/components/ui/toaster';

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=' bg-slate-100 text-slate-600'>
      {/* <NextAuthProvider>
        <ThemeProvider> */}
      <Navbar />
      <Sidebar />
      {/* <Header /> */}
      {children}
      <Toast />
      {/* </ThemeProvider>
      </NextAuthProvider> */}
      <Toaster />
    </section>
  );
}
