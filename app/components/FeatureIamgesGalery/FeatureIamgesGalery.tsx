import { urlFor } from '@/libs/urlFor';
import { Image as ImageType } from '@/models/room';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { FC } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const FeaturedImageGallery: FC<{ photos: ImageType[] }> = ({
  photos,
}) => {
  const [active, setActive] = React.useState(photos[0]);

  return (
    <section className=''>
      <div className='relative flex items-center justify-center'>
        <div className='relative m-4 aspect-video w-full'>
          <Image
            className='rounded-lg object-cover object-center '
            src={urlFor(active).url()}
            alt=''
            fill
            sizes='(max-width: 300px) 100vw, 50vw'
          />
        </div>
      </div>
      <div className='mx-auto my-3 w-full max-w-screen-xl px-14'>
        <Carousel
          className='mx-auto w-full max-w-sm'
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent className='-ml-1'>
            {photos.map((photo, index) => (
              <CarouselItem key={index} className='basis-1/2 pl-5 md:basis-1/3'>
                <div className='p-0'>
                  <Card>
                    <CardContent className='flex aspect-video items-center justify-center p-0'>
                      <motion.div
                        whileTap={{ opacity: 0.1 }}
                        className='relative h-full w-full '
                      >
                        <Image
                          key={photo._key}
                          src={urlFor(photo).url()}
                          alt={photo._key}
                          fill
                          sizes='(max-width: 50px) 100vw, 50vw'
                          onClick={() => {
                            setActive(photo);
                          }}
                          className='overflow-hidden rounded-lg object-cover object-center'
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='backdrop-blur-sm' />
          <CarouselNext className='backdrop-blur-sm' />
        </Carousel>
      </div>
    </section>
  );
};
