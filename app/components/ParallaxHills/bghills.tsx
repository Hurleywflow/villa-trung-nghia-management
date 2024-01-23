'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Bghills(): JSX.Element {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const x4 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const x5 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y5 = useTransform(scrollYProgress, [0, 1], [1600, -400]);
  const xtree = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xleaf = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const xplant = useTransform(scrollYProgress, [0, 1], [0, 0]);
  return (
    <div
      className='flex h-full w-full items-center justify-center'
      ref={container}
    >
      <motion.div
        style={{ y: y1 }}
        className='absolute left-0 top-0 z-[1] h-full w-full'
      >
        <Image src='/images/parallax/hill1.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        className='absolute left-0 top-0 z-[2] h-full w-full'
      >
        <Image src='/images/parallax/hill2.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.div
        style={{ x: x3 }}
        className='absolute left-0 top-0 z-[3] h-full w-full'
      >
        <Image src='/images/parallax/hill3.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.div
        style={{ x: x4 }}
        className='absolute left-0 top-0 z-[4] h-full w-full'
      >
        <Image src='/images/parallax/hill4.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.div
        style={{ x: x5 }}
        className='absolute left-0 top-0 z-[5] h-full w-full'
      >
        <Image src='/images/parallax/hill5.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.h1
        style={{ y: y5 }}
        className='top-42 absolute bottom-0 z-[7] h-full w-full text-center text-4xl text-tertiary-primary shadow-tertiary-primary drop-shadow-2xl md:text-8xl'
      >
        Đà Lạt
      </motion.h1>

      <motion.div
        style={{ x: xtree }}
        className='absolute left-0 top-0 z-[6] h-full w-full'
      >
        <Image src='/images/parallax/tree.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.div
        style={{ x: xleaf }}
        className='absolute left-0 top-0 z-[7] h-full w-full'
      >
        <Image src='/images/parallax/leaf.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
      <motion.div
        style={{ x: xplant }}
        className='absolute left-0 top-0 z-[8] h-full w-full'
      >
        <Image src='/images/parallax/plant.png' alt='hill1' fill sizes='50vw' />
      </motion.div>
    </div>
  );
}
