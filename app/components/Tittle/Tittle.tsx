/* eslint-disable @typescript-eslint/ban-types */
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useRef } from 'react';

type Props = {};

const Tittle: FC<Props> = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  return (
    <section ref={container} className='mt-[10dvh]'>
      <motion.div
        style={{ x: x1 }}
        className='block text-center text-8xl font-semibold text-tertiary-primary shadow-tertiary-primary drop-shadow-2xl text-shadow-lg md:text-[180px]'
      >
        Villa <br />
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className=' block text-center text-8xl text-tertiary-primary shadow-tertiary-primary drop-shadow-2xl text-shadow-lg md:text-[180px]'
      >
        TrungNghia
      </motion.div>
    </section>
  );
};
export default Tittle;
