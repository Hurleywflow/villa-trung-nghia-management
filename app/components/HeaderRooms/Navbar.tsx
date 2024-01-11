'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Socials } from './constants';

import ThemeContext from '@/context/themeContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className='fixed top-0 z-50 hidden h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-sm md:block'>
      <div className='m-auto flex h-full w-full flex-row items-center justify-between px-[10px]'>
        <button
          onClick={() => {
            router.push('/');
          }}
          // href='/'
          className='flex h-auto w-auto flex-row items-center text-tertiary-dark '
        >
          <Image
            src='/NavLogo.png'
            alt='logo'
            width={70}
            height={70}
            className='cursor-pointer decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-cyan-600 hover:underline-offset-4'
          />

          <span className='ml-[10px] hidden cursor-pointer font-bold transition-all duration-100 hover:scale-105 md:block '>
            TrungNghia
          </span>
        </button>

        <div className='flex h-full w-[400px] flex-row items-center justify-between md:mr-20'>
          <div className='mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200'>
            <button
              onClick={() => {
                router.push('/');
              }}
              className='cursor-pointer decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-cyan-600 hover:underline-offset-4'
            >
              Home
            </button>
            <button
              onClick={() => {
                router.push('/');
              }}
              className='cursor-pointer decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-cyan-600 hover:underline-offset-4'
              // onClick={() => {
              //   const el = document.getElementById('Villa');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Villa
            </button>
            <button
              onClick={() => {
                router.push('/');
              }}
              className='cursor-pointer decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-cyan-600 hover:underline-offset-4'
              // onClick={() => {
              //   const el = document.getElementById('Services');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Services
            </button>
            <button
              onClick={() => {
                router.push('/');
              }}
              className='cursor-pointer decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-cyan-600 hover:underline-offset-4'
              // onClick={() => {
              //   const el = document.getElementById('Contact');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Contact
            </button>
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          {Socials.map((social) => (
            <Avatar key={social.name}>
              <AvatarImage src={social.src} />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>

            // <Image
            //   src={social.src}
            //   alt={social.name}
            //   key={social.name}
            //   width={24}
            //   height={24}
            // />
          ))}
          {/* auth */}
          <li className='flex items-center'>
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className='h-10 w-10 overflow-hidden rounded-full'>
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='cursor-pointer' />
                )}
              </Link>
            ) : (
              <Link href='/auth'>
                <FaUserCircle className='cursor-pointer' />
              </Link>
            )}
          </li>
          {/* Items theme */}
          <div className='flex h-8 w-8 items-center justify-center rounded-full bg-zinc-500'>
            {darkTheme ? (
              <MdOutlineLightMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(false);
                  localStorage.removeItem('hotel-theme');
                }}
              />
            ) : (
              <MdDarkMode
                className='cursor-pointer'
                onClick={() => {
                  setDarkTheme(true);
                  localStorage.setItem('hotel-theme', 'true');
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
