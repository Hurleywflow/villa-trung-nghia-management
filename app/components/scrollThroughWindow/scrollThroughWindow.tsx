'use client';
/* eslint-disable react/no-unescaped-entities */
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
// import './index.css';
import { FC, useRef } from 'react';
import CountUpNumber from '../CountUpNumber/CountUpNumber';

type Props = {
  heading1: React.ReactNode;
};
const ScrollThroughWindow: FC<Props> = (props) => {
  // render heading1 under server component is optional for SEO
  const { heading1 } = props;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  }) as MotionValue<number>;
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 12]);
  const imageX = useTransform(scrollYProgressSpring, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

  return (
    <section id='home'>
      <div ref={ref} className='relative z-10 h-[200vh] overflow-clip'>
        <motion.div
          style={{ scale }}
          className='hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%] md:pt-20'
        >
          <div className='window-mask flex flex-col rounded-3xl bg-white p-12 md:flex-row md:p-14'>
            {heading1}
            <div className='mx-auto -mb-7 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full border-[4px] border-gray-300 md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]' />
          </div>
          {/* <div className="grid grid-flow-row grid-cols-3 gap-2">
            <div className="col-span-2 rounded-3xl border border-white" />
            <a className="flex items-center justify-center rounded-3xl bg-orange-400 text-center text-lg font-bold text-slate-900 md:text-5xl">
              Early Access
            </a>
          </div> */}
          <div className='mt-12 flex justify-evenly'>
            <div className='flex flex-col items-center justify-center gap-3'>
              <p className='text-center text-xs lg:text-xl'>Basic Room</p>
              <CountUpNumber duration={5000} endValue={50} />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <p className='text-center text-xs lg:text-xl'>Luxury Room</p>
              <CountUpNumber duration={5000} endValue={120} />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <p className='text-center text-xs lg:text-xl'>Suite</p>
              <CountUpNumber duration={5000} endValue={60} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='mt-[-200vh] h-[200vh] overflow-clip bg-red-100 pb-20'>
        {/* add some animation here or component want to see through window */}
        <motion.span
          style={{ x: imageXCalc }}
          className='sticky top-1/2 mx-auto block aspect-video w-[1600px] max-w-[90%] rounded-[60px] bg-gray-300 shadow-2xl md:top-1/4'
        >
          <Image src='/images/1.jpg' alt='Villa room' layout='fill' />
        </motion.span>
        <span></span>
      </div>
    </section>
  );
};

export default ScrollThroughWindow;
