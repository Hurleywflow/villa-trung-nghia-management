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
      className='sticky top-0 flex h-screen items-center justify-center odd:rotate-1 even:-rotate-1'
    >
      <motion.div
        style={{
          backgroundColor: color,
          // scale,
          imageScale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className='-top-1/4; relative flex h-[70%] w-[80%] origin-top flex-col rounded-xl shadow-2xl'
      >
        <motion.div
          className='h-full  items-center justify-center gap-5'
          initial={{
            opacity: 0.3,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: 0.1 + i * 0.1,
            },
          }}
        >
          <div className='relative h-full w-full overflow-hidden rounded-xl shadow-2xl'>
            <Image
              src={src}
              alt={title}
              fill
              sizes='(max-width: 400px) 100vw, 50vw'
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
