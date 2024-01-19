import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.5', 'start 0'],
  });

  const words = paragraph.split(' ');
  return (
    <p
      ref={container}
      className='flex max-w-screen-xl w-full flex-wrap p-4 text-lg leading-none shadow-tertiary-primary text-shadow-lg md:text-xl text-justify'
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className='relative mr-3 mt-3'>
      <span className='absolute opacity-[20%]'>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
