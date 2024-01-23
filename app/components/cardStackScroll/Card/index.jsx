/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Card = ({ i, src, title, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='sticky top-0 flex h-screen items-center justify-center  odd:rotate-1  even:-rotate-1 '
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          imageScale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className='-top-1/4; relative flex aspect-[9/16] w-[80%] origin-top flex-col rounded-xl shadow-2xl  md:aspect-video '
      >
        <div
          className='h-full  items-center justify-center gap-5 rounded-lg ring-2  ring-pink-200 ring-offset-2 ring-offset-tertiary-primary'
          // initial={{
          //   opacity: 0.3,
          // }}
          // whileInView={{
          //   opacity: 1,
          //   transition: {
          //     duration: 0.3,
          //     delay: 0.1 + i * 0.1,
          //   },
          // }}
        >
          <div className='relative h-full w-full overflow-hidden rounded-xl shadow-2xl '>
            <Image
              src={src}
              alt={title}
              fill
              sizes='80vw'
              className='object-cover object-center'
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
