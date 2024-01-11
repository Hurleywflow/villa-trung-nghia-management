/* eslint-disable no-undef */
'use client';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Card from './Card';
import { projects } from './data';

function BBQp() {
  return (
    <motion.p
      className='mx-auto flex max-w-screen-xl flex-wrap p-10 text-lg leading-normal tracking-wider md:text-xl '
      initial={{
        opacity: 0,
        TranslateX: -500,
      }}
      whileInView={{
        opacity: 1,
        TranslateX: 0,
      }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
      }}
    >
      - Được trang bị đầy đủ phù hợp cho nhóm gia đình, bạn bè, trẻ em vui chơi,
      tổ chức team Building, tổ chức tiệc BBQ ngoài trời, đám cưới, đám hỏi, lễ
      kỷ niệm, hội nghị,... <br /> - Ngoài ra còn có dịch vụ setup tiệc sinh
      nhật, lễ kỷ niệm, tiệc BBQ đốt lửa trại ngoài trời với menu tiệc nướng hấp
      dẫn lên đến hơn 30 món ăn lạ miệng, <br /> -Dịch vụ cho thuê loa kéo, phục
      vụ ca hát.
    </motion.p>
  );
}

export default function CardStackScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <section id='Services'>
      <BBQp />
      <div ref={container} className='relative '>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
