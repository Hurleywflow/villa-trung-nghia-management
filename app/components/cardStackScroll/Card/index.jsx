'use client';
import { motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Card = ({ i, title, color, progress, range, targetScale }) => {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start end', 'start start'],
  // });

  // const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='sticky top-0 flex h-screen items-center justify-center odd:rotate-2 even:-rotate-2'
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className='-top-1/4; relative flex h-[50%] w-[70%] origin-top flex-col rounded-xl p-[50px] '
      >
        <div className='h-full flex-row  items-center justify-center gap-5 md:flex'>
          <div className='relative h-2/3 w-full overflow-hidden rounded-lg md:h-full md:w-2/3'>
            <Image
              src='/images/1.jpg'
              alt={title}
              fill
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div className='h-1/3 w-full md:h-full md:w-1/3'>
            Something Something
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
