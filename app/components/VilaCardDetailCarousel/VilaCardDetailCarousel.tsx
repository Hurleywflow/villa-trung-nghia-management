'use client';

import Image from 'next/image';
import { FC } from 'react';

import { Image as ImageType } from '@/models/room';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { urlFor } from '@/libs/urlFor';
import Autoplay from 'embla-carousel-autoplay';

export const HotelPhotoGallery: FC<{ photos: ImageType[] }> = ({ photos }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-full max-w-sm'
    >
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <div className='relative h-full w-full '>
                  <CardContent className='flex aspect-square items-center justify-center p-6'></CardContent>
                  <Image
                    key={photo._key}
                    src={urlFor(photo).url()}
                    alt={photo._key}
                    fill
                    objectFit='cover'
                  />
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full max-w-xs'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
