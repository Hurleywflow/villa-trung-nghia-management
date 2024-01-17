import { Button } from '@/components/ui/button';
import { urlFor } from '@/libs/urlFor';
import { Room } from '@/models/room';
import Image from 'next/image';

import * as React from 'react';
import ProfileForm from '../FormBooking/Form';

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

interface SlugProps {
  room: Room;
}

function SlugDetail({ room }: SlugProps) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <section className='px-4 py-6 sm:p-6 md:px-8 md:py-10'>
        <div className='mx-auto grid max-w-6xl grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-20'>
          <div className='relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1'>
            <h1 className='mt-1 text-lg font-semibold text-white sm:text-slate-900  md:text-2xl'>
              {room.name.toUpperCase()}
            </h1>
            <p className='text-sm font-medium leading-4 text-white sm:text-slate-500 '>
              {room.type === 'mini' ? 'Mini Vila' : `${room.type} Rooms`}
            </p>
          </div>
          <div className='col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6'>
            <div className='relative h-60 w-full overflow-hidden rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full'>
              <Image
                alt={room.name}
                src={urlFor(room.coverImage).url()}
                // width={500}
                // height={500}
                fill
                sizes='(max-width: 200px) 100vw, 50vw'
                // Static images
                // placeholder='blur'
                className='img scale-animation rounded-lg '
              />
            </div>

            {room.images.map((image, index) => (
              <div
                className='relative hidden h-52 w-full overflow-hidden rounded-lg sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32'
                key={index}
              >
                <Image
                  key={index}
                  alt={room.name}
                  src={urlFor(image).url()}
                  // width={500}
                  // height={500}
                  fill
                  sizes='(max-width: 200px) 100vw, 50vw'
                  // Static images
                  // placeholder='blur'
                  className='img scale-animation rounded-lg '
                />
              </div>
            ))}
          </div>
          <div className='row-start-2 mt-4 flex items-center gap-5 text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2'>
            <div className='flex items-center'>
              <svg
                width={2}
                height={2}
                aria-hidden='true'
                fill='currentColor'
                className='mx-3 text-slate-300'
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <svg
                width={24}
                height={24}
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-1 text-slate-400 '
                aria-hidden='true'
              >
                <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
                <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
              </svg>
              Dalat City.
            </div>
            {/* bed font awesome */}
            <div className='grid grid-cols-2'>
              {room.offeredAmenities?.map((amenity) => (
                <div
                  key={amenity._key}
                  className='my-1 flex items-center md:my-0'
                >
                  <i className={`fa-solid ${amenity.icon}`}></i>
                  <p className='ml-2 text-xs md:text-base'>{amenity.amenity}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6 '>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button type='button' size='lg'>
                  Booking Now
                </Button>
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
            {/* <Link
            className='scale-animation-small inline-flex items-center md:mb-2 lg:mb-0'
            href={'/rooms'}
          >
            <Button type='button' className='ml-28' variant='outline' size='lg'>
              Go Back
            </Button>
          </Link> */}
          </div>
          <p className='col-start-1 mt-4 text-base leading-6  sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6'>
            {room.description}
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className='px-4 py-6 sm:p-6 md:px-8 md:py-10'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:gap-x-20'>
        <div className='relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1'>
          <h1 className='mt-1 text-lg font-semibold text-white sm:text-slate-900  md:text-2xl'>
            {room.name.toUpperCase()}
          </h1>
          <p className='text-sm font-medium leading-4 text-white sm:text-slate-500 '>
            {room.type === 'mini' ? 'Mini Vila' : `${room.type} Rooms`}
          </p>
        </div>
        <div className='col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6'>
          <div className='relative h-60 w-full overflow-hidden rounded-lg sm:col-span-2 sm:h-52 lg:col-span-full'>
            <Image
              alt={room.name}
              src={urlFor(room.coverImage).url()}
              // width={500}
              // height={500}
              fill
              sizes='(max-width: 200px) 100vw, 50vw'
              // Static images
              // placeholder='blur'
              className='img scale-animation rounded-lg '
            />
          </div>

          {room.images.map((image, index) => (
            <div
              className='relative hidden h-52 w-full overflow-hidden rounded-lg sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32'
              key={index}
            >
              <Image
                key={index}
                alt={room.name}
                src={urlFor(image).url()}
                // width={500}
                // height={500}
                fill
                sizes='(max-width: 200px) 100vw, 50vw'
                // Static images
                // placeholder='blur'
                className='img scale-animation rounded-lg '
              />
            </div>
          ))}
        </div>
        <div className='row-start-2 mt-4 flex items-center gap-5 text-xs font-medium sm:row-start-3 sm:mt-1 md:mt-2.5 lg:row-start-2'>
          <div className='flex items-center'>
            <svg
              width={2}
              height={2}
              aria-hidden='true'
              fill='currentColor'
              className='mx-3 text-slate-300'
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <svg
              width={24}
              height={24}
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-1 text-slate-400 '
              aria-hidden='true'
            >
              <path d='M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z' />
              <path d='M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
            Dalat City.
          </div>
          {/* bed font awesome */}
          <div className='grid grid-cols-2'>
            {room.offeredAmenities?.map((amenity) => (
              <div
                key={amenity._key}
                className='my-1 flex items-center md:my-0'
              >
                <i className={`fa-solid ${amenity.icon}`}></i>

                <p className='ml-2 text-xs md:text-base'>{amenity.amenity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6 '>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button type='button' size='lg'>
                Booking Now
              </Button>
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
          {/* <Link
            className='scale-animation-small inline-flex items-center md:mb-2 lg:mb-0'
            href={'/rooms'}
          >
            <Button type='button' className='ml-28' variant='outline' size='lg'>
              Go Back
            </Button>
          </Link> */}
        </div>
        <p className='col-start-1 mt-4 text-base leading-6  sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6'>
          {room.description}
        </p>
      </div>
    </section>
  );
}

export default SlugDetail;