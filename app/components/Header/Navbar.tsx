'use client';
import Image from 'next/image';
import { useContext } from 'react';

import { Button } from '@/components/ui/button';
import ThemeContext from '@/context/themeContext';
import Link from 'next/link';

const Socials = [
  {
    href: 'https://www.facebook.com/villadalattrungnghia/',
    src: '/images/icon/f.svg',
    alt: 'Facebook',
  },
  {
    href: 'https://zalo.me/0937655411',
    src: '/images/icon/z.svg',
    alt: 'zalo',
  },
  {
    href: 'tel:0937655411',
    src: '/images/icon/p.svg',
    alt: 'Phone',
  },
];

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className='fixed top-0 z-[9999] hidden h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-sm md:block'>
      <div className='m-auto flex h-full w-full flex-row items-center justify-between px-[10px]'>
        <Link
          className='flex h-auto w-auto flex-row items-center text-xl font-bold text-tertiary-primary md:text-2xl'
          href='/'
          // onClick={() => {
          //   const el = document.getElementById('Home');
          //   el?.scrollIntoView({ behavior: 'smooth' });
          // }}
        >
          <Image
            src='/images/icon/l.png'
            alt='logo'
            width={70}
            height={70}
            sizes='100vw'
            className='aspect-square w-10 cursor-pointer rounded-full object-cover object-center text-lg font-bold text-tertiary-primary decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-violet-600 hover:underline-offset-4 md:text-xl'
          />

          <span className='ml-[10px] hidden cursor-pointer font-semibold shadow-tertiary-primary transition-all  duration-100 text-shadow-sm hover:scale-105 md:block '>
            TrungNghia
          </span>
        </Link>

        <div className=' mr-0 flex h-full w-[400px] flex-row items-center justify-between'>
          <div className='mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200'>
            <Link
              href='/'
              className='cursor-pointer text-lg text-tertiary-primary decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-orange-400 hover:underline-offset-4 md:text-xl'
              // onClick={() => {
              //   const el = document.getElementById('Home');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Home
            </Link>
            <Link
              href='#Villa'
              className='cursor-pointer text-lg text-tertiary-primary decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-orange-400 hover:underline-offset-4 md:text-xl'
              // onClick={() => {
              //   const el = document.getElementById('Villa');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Villa
            </Link>
            <Link
              href='#Services'
              className='cursor-pointer text-lg text-tertiary-primary decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-orange-400 hover:underline-offset-4 md:text-xl'
              // onClick={() => {
              //   const el = document.getElementById('Services');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Services
            </Link>
            <Link
              href='#Contact'
              className='cursor-pointer text-lg text-tertiary-primary decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-orange-400 hover:underline-offset-4 md:text-xl'
              // onClick={() => {
              //   const el = document.getElementById('Contact');
              //   el?.scrollIntoView({ behavior: 'smooth' });
              // }}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className='flex flex-row items-center justify-center gap-2'>
          {Socials.map((social) => (
            <Link href={social.href} target='_blank' key={social.src}>
              <div className='relative aspect-square w-8 cursor-pointer rounded-full transition-all duration-100 hover:scale-105'>
                <Image
                  src={social.src}
                  alt={social.alt}
                  fill
                  className='scale-animation img object-cover object-center'
                />
              </div>
            </Link>
          ))}
          <Link href='/studio' target='_blank'>
            <Button size='sm' variant='link' className='rounded-full'>
              Admin
            </Button>{' '}
          </Link>
          {/* auth */}

          {/* <li className='flex items-center'>
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
          </li> */}
          {/* Items theme */}
          {/* <div className='flex h-8 w-8 items-center justify-center rounded-full bg-zinc-500'>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
