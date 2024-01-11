'use client';
import {
  MotionValue,
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
// import './index.css';
import PageSearch from '@/app/components/PageSearch/PageSearch';
import SkewScroll from '@/app/components/SkewScroll/SkewScroll';
import Tittle from '@/app/components/Tittle/Tittle';
import CardStackScroll from '@/app/components/cardStackScroll/cardStackScroll';
import Contact from '@/app/components/contact/contact';
import { Container } from '@/app/components/container';
import ImageParallax from '@/app/components/imageParallax/imageParallax';
import Testimonials from '@/app/components/testimonials/testimonials';
import TextScroll from '@/app/components/textScroll/textScroll';
import Image from 'next/image';
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
  const textVariants = {
    initial: {
      x: '-100%',
      y: '-100%',
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 5,
        // animation delay between each children
        staggerChildren: 0.1,
      },
    },
  };
  const ScrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section ref={ScrollRef} id='Home'>
      <div ref={ref} className='relative z-10 h-[200vh] overflow-clip'>
        <motion.div
          style={{ scale }}
          className='hero-background sticky left-0 top-0 grid h-screen origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%] md:pt-20'
        >
          <div
            className='window-mask flex flex-col rounded-3xl
          bg-gradient-to-tl from-stone-200 to-purple-300
            p-12 md:flex-row md:p-14'
          >
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
              <p className='text-center text-xs lg:text-xl'>Room</p>
              <CountUpNumber duration={5000} endValue={50} />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <p className='text-center text-xs lg:text-xl'>Vila</p>
              <CountUpNumber duration={5000} endValue={120} />
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
              <p className='text-center text-xs lg:text-xl'>Mini</p>
              <CountUpNumber duration={5000} endValue={60} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className='mt-[-200vh] h-[200vh] overflow-clip  pb-20'>
        {/* <div className='mt-[-200vh] h-[200vh] overflow-clip bg-gradient-to-tl from-purple-200 to-indigo-300 pb-20'> */}
        {/* add some animation here or component want to see through window */}

        <motion.span
          style={{ x: imageXCalc }}
          className='sticky top-1/2 mx-auto block aspect-video w-[1600px] max-w-[90%] rounded-[60px] bg-gray-300 shadow-2xl md:top-1/4'
        >
          <motion.div
            className='absolute bottom-0 right-0 z-10 h-full w-full'
            initial={{ opacity: 0, y: '-50%', x: '-100%' }}
            whileInView={{ opacity: 1, y: 0, x: '100%' }}
            transition={{
              duration: 15,
              ease: 'easeInOut',
              repeatType: 'loop',
              repeat: Infinity,
            }}
          >
            <Image
              src='/airplane.png'
              alt='airplane'
              layout='fill'
              sizes='(max-width: 80px) 100vw, 50vw'
              className=' scale-[20%] md:scale-[30%]'
            />
          </motion.div>
          {/* <motion.h1
            className='absolute bottom-10 right-0 z-10 text-3xl font-semibold uppercase leading-[0.85] md:text-4xl xl:text-5xl'
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
              repeatType: 'loop',
              repeat: Infinity,
            }}
          >
            WelCome To DatLat City
          </motion.h1> */}
          <video
            src={require('@/public/video.mp4')}
            muted
            autoPlay
            loop
            className='absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gray-300 object-cover shadow-2xl'
          />
        </motion.span>
        <span></span>
      </div>
      {/* add more content page on scroll bellow */}
      <Container>
        {/* add more content page on scroll bellow */}
        <Tittle />
        <SkewScroll />
        <TextScroll />
        {/* feature room, fetching data */}
        {/* <VillaRoom {...{ featuredRoom }} /> */}
        <CardStackScroll />
        {/* <InfiniteX/> */}
        <PageSearch />
        <ImageParallax />
        <Testimonials />
        <Contact />
      </Container>
    </section>
  );
};

export default ScrollThroughWindow;
