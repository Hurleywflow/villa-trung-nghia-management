import Image from 'next/image';
import { FC } from 'react';

import { urlFor } from '@/libs/urlFor';
import { Room } from '@/models/room';
import Link from 'next/link';
import * as React from 'react';
import ProfileForm from '../Form/Form';

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
    room: { coverImage, name, code, price, type, description, slug, isBooked },
  } = props;
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <section className='body-font w-80 text-gray-600'>
        {!isBooked ? (
          <div className='w-ful relative m-5 h-full rounded-lg border-2 border-gray-200 border-opacity-60'>
            {/* <!-- Top Right --> */}
            {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

            <div className='absolute -right-2 -top-2 z-50 aspect-square w-20 overflow-hidden rounded-sm'>
              <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
              <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <div className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 cursor-pointer bg-amber-300 py-1.5  text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300'>
                    {isBooked ? 'Booked' : 'Book Now'}
                  </div>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Booking</DialogTitle>
                    <DialogDescription>
                      When you are ready to book this Vila, please fill the form
                      below.
                    </DialogDescription>
                  </DialogHeader>
                  <ProfileForm />
                </DialogContent>
              </Dialog>
            </div>

            <div className='relative mx-auto aspect-video w-full overflow-hidden'>
              <Image
                alt='villa'
                src={urlFor(coverImage).url()}
                // width={500}
                // height={500}
                layout='fill'
                sizes='(max-width: 400px) 100vw, 50vw'
                objectFit='cover'
                objectPosition='center'
                className='img scale-animation'
              />
            </div>
            <div className='p-6'>
              <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
                {name}
              </h1>
              <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
                Ma So: {code}
              </h2>
              <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
                Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
              </h2>
              <p className='pb-6 pt-3'>{description.slice(1, 100)}...</p>
              <div className='flex flex-wrap items-center '>
                <Link
                  className='scale-animation-small inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'
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
          </div>
        ) : (
          <div className='w-ful relative m-5 h-full rounded-lg border-2 border-gray-200 border-opacity-60'>
            <div className='absolute bottom-0 left-0 right-0 top-0 z-50 backdrop-blur-sm'></div>
            {/* <!-- Top Right --> */}
            {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

            <div className='absolute -right-2 -top-2 z-50 aspect-square w-20 overflow-hidden rounded-sm'>
              <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
              <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>
              <Link
                href='#'
                className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300'
              >
                {isBooked ? 'Booked' : 'Book Now'}
              </Link>
            </div>

            <div className='relative mx-auto aspect-video w-full overflow-hidden'>
              <Image
                alt='villa'
                src={urlFor(coverImage).url()}
                // width={500}
                // height={500}
                layout='fill'
                sizes='(max-width: 400px) 100vw, 50vw'
                objectFit='cover'
                objectPosition='center'
                className='img scale-animation'
              />
            </div>
            <div className='p-6'>
              <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
                {name}
              </h1>
              <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
                Ma So: {code}
              </h2>
              <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
                Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
              </h2>
              <p className='pb-6 pt-3'>{description.slice(1, 100)}...</p>
              <div className='flex flex-wrap items-center '>
                <Link
                  className='scale-animation-small inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'
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
          </div>
        )}
      </section>
    );
  }
  return (
    <section className='body-font w-80 text-gray-600'>
      {!isBooked ? (
        <div className='w-ful relative m-5 h-full rounded-lg border-2 border-gray-200 border-opacity-60'>
          {/* <!-- Top Right --> */}
          {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

          <div className='absolute -right-2 -top-2 z-50 aspect-square w-20 overflow-hidden rounded-sm'>
            <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
            <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>

            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <div className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 cursor-pointer bg-amber-300 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300'>
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

          <div className='relative mx-auto aspect-video w-full overflow-hidden'>
            <Image
              alt='villa'
              src={urlFor(coverImage).url()}
              // width={500}
              // height={500}
              layout='fill'
              sizes='(max-width: 400px) 100vw, 50vw'
              objectFit='cover'
              objectPosition='center'
              className='img scale-animation'
            />
          </div>
          <div className='p-6'>
            <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
              {name}
            </h1>
            <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
              Ma So: {code}
            </h2>
            <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
              Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
            </h2>
            <p className='pb-6 pt-3'>{description.slice(1, 100)}...</p>
            <div className='flex flex-wrap items-center '>
              <Link
                className='scale-animation-small inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'
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
        </div>
      ) : (
        <div className='w-ful relative m-5 h-full rounded-lg border-2 border-gray-200 border-opacity-60'>
          <div className='absolute bottom-0 left-0 right-0 top-0 z-50 backdrop-blur-sm'></div>
          {/* <!-- Top Right --> */}
          {/* <!-- if want to move ribbon to center or move to edge, just change  w-36 --> */}

          <div className='absolute -right-2 -top-2 z-50 aspect-square w-20 overflow-hidden rounded-sm'>
            <div className='absolute left-0 top-0 h-2 w-2 bg-amber-500'></div>
            <div className='absolute bottom-0 right-0 h-2 w-2 bg-amber-500'></div>
            <Link
              href='#'
              className='absolute bottom-0 right-0 block w-square-diagonal origin-bottom-right rotate-45 bg-amber-300 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-amber-800 shadow-sm hover:bg-yellow-300'
            >
              {isBooked ? 'Booked' : 'Book Now'}
            </Link>
          </div>

          <div className='relative mx-auto aspect-video w-full overflow-hidden'>
            <Image
              alt='villa'
              src={urlFor(coverImage).url()}
              // width={500}
              // height={500}
              layout='fill'
              sizes='(max-width: 400px) 100vw, 50vw'
              objectFit='cover'
              objectPosition='center'
              className='img scale-animation'
            />
          </div>
          <div className='p-6'>
            <h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
              {name}
            </h1>
            <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
              Ma So: {code}
            </h2>
            <h2 className='title-font mb-1 text-xs font-medium tracking-widest text-gray-400'>
              Vila: {type === 'mini' ? 'Mini' : `${type} Room`}
            </h2>
            <p className='pb-6 pt-3'>{description.slice(1, 100)}...</p>
            <div className='flex flex-wrap items-center '>
              <Link
                className='scale-animation-small inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0'
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
        </div>
      )}
    </section>
  );
};

export default RoomCard;
