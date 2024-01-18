import Image from 'next/image';
import { FC } from 'react';

import { urlFor } from '@/libs/urlFor';
import { Room } from '@/models/room';
import Link from 'next/link';
import * as React from 'react';
import ProfileForm from '../FormBooking/Form';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  room: Room;
};

const RoomCard: FC<Props> = (props) => {
  const {
    room: { coverImage, name, code, type, description, slug, isBooked },
  } = props;
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <section className='body-font w-50 max-w-[80rem]  transition-all duration-100 hover:scale-[1.01]'>
        {!isBooked ? (
          <div className='group mx-5 my-10 gap-5 rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px] shadow-2xl hover:from-pink-300 hover:to-blue-300 hover:ring hover:ring-orange-400 hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 '>
            <div className='w-ful relative h-full rounded-lg bg-gray-50'>
              {/* <!-- Top Right --> */}
              {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}
              <div className='absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-sm'>
                <div className='absolute left-0 top-0 h-2 w-2 bg-pink-500'></div>
                <div className='absolute bottom-0 right-0 h-2 w-2 bg-pink-500'></div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <div className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 cursor-pointer bg-pink-300 py-1.5  text-center text-sm font-semibold uppercase tracking-wider text-black shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-tertiary-primary hover:text-white'>
                      {isBooked ? 'Booked' : 'Book Now'}
                    </div>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                      <DialogTitle>Booking</DialogTitle>
                      <DialogDescription>
                        When you are ready to book this Vila, please fill the
                        form below.
                      </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                  </DialogContent>
                </Dialog>
              </div>

              <Link href={`/rooms/${slug.current}`}>
                <div className='relative mx-auto aspect-video w-full overflow-hidden'>
                  <Image
                    alt='villa'
                    src={urlFor(coverImage).url()}
                    // width={500}
                    // height={500}
                    fill
                    sizes='(max-width: 400px) 100vw, 50vw'
                    className='img scale-animation rounded-lg'
                  />
                </div>
                <div className='p-1'>
                  <h1 className='title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg'>
                    {name.slice(0, 16)}
                  </h1>
                  <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                    Ma So: {code}
                  </h2>
                  <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                    Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
                  </h2>
                  <p className='line-clamp-3 pb-2 pt-2 text-[0.8rem]'>
                    {description}
                  </p>
                  {/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
                  <div className='flex flex-wrap items-center '>
                    <Link
                      className='scale-animation-small inline-flex items-center text-xs text-sky-500 shadow-tertiary-primary text-shadow-lg md:mb-2 lg:mb-0'
                      href={`/rooms/${slug.current}`}
                    >
                      Xem chi tiết
                      <svg
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className='mx-5 my-10 gap-5 rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px] shadow-2xl hover:from-pink-300 hover:to-blue-300 hover:ring hover:ring-orange-400 hover:ring-offset-2 group-hover:blur-sm dark:from-blue-800 dark:to-purple-800 '>
            <div className='w-ful relative h-full rounded-lg bg-gray-50'>
              <div className='absolute bottom-0 left-0 right-0 top-0 z-50 rounded-lg backdrop-blur-sm'></div>
              {/* <!-- Top Right --> */}
              {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}
              <div className='absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-lg'>
                <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
                <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>
                <Link
                  href='#'
                  className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-sm font-semibold uppercase tracking-wider text-amber-800 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-yellow-300'
                >
                  {isBooked ? 'Booked' : 'Book Now'}
                </Link>
              </div>
              <Link href={`/rooms/${slug.current}`}>
                <div className='relative mx-auto aspect-video w-full overflow-hidden rounded-lg'>
                  <Image
                    alt='villa'
                    src={urlFor(coverImage).url()}
                    // width={500}
                    // height={500}
                    fill
                    sizes='(max-width: 400px) 100vw, 50vw'
                    className='img scale-animation rounded-lg'
                  />
                </div>
                <div className='p-1'>
                  <h1 className='title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg'>
                    {name.slice(0, 16)}
                  </h1>
                  <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                    Ma So: {code}
                  </h2>
                  <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                    Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
                  </h2>
                  <p className='line-clamp-3 pb-2 pt-2 text-[0.8rem]'>
                    {description}
                  </p>
                  {/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
                  <div className='flex flex-wrap items-center '>
                    <Link
                      className='scale-animation-small inline-flex items-center text-xs text-sky-500 shadow-tertiary-primary text-shadow-lg md:mb-2 lg:mb-0'
                      href={`/rooms/${slug.current}`}
                    >
                      Xem chi tiet
                      <svg
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        fill='none'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <path d='M5 12h14'></path>
                        <path d='M12 5l7 7-7 7'></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </section>
    );
  }
  return (
    <section className='body-font w-50 max-w-[80rem] text-gray-600 transition-all duration-100 hover:scale-[1.01]'>
      {!isBooked ? (
        <div className=' mx-5 my-10 gap-5 rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px] shadow-2xl hover:from-pink-300 hover:to-blue-300 hover:ring hover:ring-teal-400 hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 '>
          <div className='w-ful relative h-full rounded-lg bg-gray-50'>
            {/* <!-- Top Right --> */}
            {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

            <div className='absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-sm'>
              <div className='absolute left-0 top-0 h-2 w-2 bg-pink-500'></div>
              <div className='absolute bottom-0 right-0 h-2 w-2 bg-pink-500'></div>

              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <div className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 cursor-pointer bg-pink-300 py-1.5 text-center text-sm font-semibold uppercase tracking-wider text-pink-800 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-sky-300'>
                    {isBooked ? 'Booked' : 'Book Now'}
                  </div>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className='text-left'>
                    <DrawerTitle>Booking</DrawerTitle>
                    <DrawerDescription>
                      When you are ready to book this Vila, please fill the form
                      below.
                    </DrawerDescription>
                  </DrawerHeader>
                  <ProfileForm className='px-4' />
                  <DrawerFooter className='pt-2'>
                    <DrawerClose asChild>
                      <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>

            <Link href={`/rooms/${slug.current}`}>
              <div className='relative mx-auto aspect-video w-full overflow-hidden'>
                <Image
                  alt='villa'
                  src={urlFor(coverImage).url()}
                  // width={500}
                  // height={500}
                  fill
                  sizes='(max-width: 300px) 100vw, 50vw'
                  // placeholder='blur'
                  className='img scale-animation rounded-lg'
                />
                {/* <DynamicBlur src={urlFor(coverImage).url()} /> */}
              </div>
              <div className='p-1'>
                <h1 className='title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg'>
                  {name.slice(0, 16)}
                </h1>
                <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                  Ma So: {code}
                </h2>
                <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                  Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
                </h2>
                <p className='line-clamp-3 pb-2 pt-2 text-[0.8rem]'>
                  {description}
                </p>
                {/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
                <div className='flex flex-wrap items-center '>
                  <Link
                    className='scale-animation-small inline-flex items-center text-sm text-sky-500 md:mb-2 lg:mb-0'
                    href={`/rooms/${slug.current}`}
                  >
                    Xem chi tiet
                    <svg
                      className='ml-2 h-4 w-4'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className=' mx-5 my-10 gap-5 rounded-[calc(1rem-1px)] bg-gradient-to-b from-blue-300 to-pink-300 p-[2px]  shadow-2xl hover:from-pink-300 hover:to-blue-300  hover:ring hover:ring-teal-400 hover:ring-offset-2 dark:from-blue-800 dark:to-purple-800 '>
          <div className='w-ful relative h-full rounded-lg bg-gray-50'>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-50 rounded-lg backdrop-blur-sm'></div>
            {/* <!-- Top Right --> */}
            {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

            <div className='absolute -right-2 -top-2 z-40 aspect-square w-24 overflow-hidden rounded-sm'>
              <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
              <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>
              <Link
                href='#'
                className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-sm font-semibold uppercase tracking-wider text-amber-800 shadow-sm shadow-tertiary-primary text-shadow-lg hover:bg-yellow-300'
              >
                {isBooked ? 'Booked' : 'Book Now'}
              </Link>
            </div>

            <Link href={`/rooms/${slug.current}`}>
              <div className='relative mx-auto aspect-video w-full overflow-hidden'>
                <Image
                  alt='villa'
                  src={urlFor(coverImage).url()}
                  // width={500}
                  // height={500}
                  fill
                  sizes='(max-width: 400px) 100vw, 50vw'
                  className='img scale-animation rounded-lg'
                />
              </div>
              <div className='p-1'>
                <h1 className='title-font text-md mb-1 font-medium text-gray-900 shadow-tertiary-primary text-shadow-lg'>
                  {name.slice(0, 16)}
                </h1>
                <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                  Ma So: {code}
                </h2>
                <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400 shadow-tertiary-primary text-shadow-sm'>
                  Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
                </h2>
                <p className='line-clamp-3 pb-2 pt-2 text-[0.8rem]'>
                  {description}
                </p>
                {/* <p className='pb-2 pt-2 line-clamp-3 text-[0.8rem]'>{description.slice(1, 100)}...</p> */}
                <div className='flex flex-wrap items-center '>
                  <Link
                    className='scale-animation-small inline-flex items-center text-sky-500 md:mb-2 lg:mb-0'
                    href={`/rooms/${slug.current}`}
                  >
                    Xem chi tiet
                    <svg
                      className='ml-2 h-4 w-4'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default RoomCard;
