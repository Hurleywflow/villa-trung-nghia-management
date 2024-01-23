import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '../TextSectionHeading/SectionHeading';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['1%', '-100%']);
  const x2 = useTransform(scrollYProgress, [1, 0], ['1%', '-100%']);

  return (
    <>
      <SectionHeading> HÌNH ẢNH KHÁCH THam quan </SectionHeading>
      <section ref={targetRef} className='relative h-[200dvh] bg-slate-100'>
        <div className='sticky top-0 flex h-[24dvh] items-center overflow-hidden'>
          <motion.div style={{ x: x1 }} className='flex gap-4'>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
        <div className='sticky top-[25dvh] flex h-[24dvh] items-center overflow-hidden'>
          <motion.div style={{ x: x2 }} className='flex gap-4'>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
        <div className='sticky top-[50dvh] flex h-[24dvh] items-center overflow-hidden'>
          <motion.div style={{ x: x1 }} className='flex gap-4'>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
        <div className='sticky top-[75dvh] flex h-[24dvh] items-center overflow-hidden'>
          <motion.div style={{ x: x2 }} className='flex gap-4'>
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className='group relative aspect-video w-[80dvw] overflow-hidden rounded-3xl bg-slate-100'
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='absolute inset-0 z-0 w-[90vw] rounded-3xl transition-transform duration-300 group-hover:scale-110'
      ></div>
      {/* <div className='absolute inset-0 z-10 grid place-content-center'>
        <p className='bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg'>
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default HorizontalScrollCarousel;

type CardType = {
  url: string;
  title?: string;
  id: number;
};

const cards: CardType[] = [
  // {
  //   url: '/images/guests/1.jpeg',
  //   title: 'Title 1',
  //   id: 1,
  // },
  // {
  //   url: '/images/guests/2.jpeg',
  //   title: 'Title 2',
  //   id: 2,
  // },
  {
    url: '/images/guests/3.jpeg',
    title: 'Title 3',
    id: 3,
  },
  {
    url: '/images/guests/4.jpeg',
    title: 'Title 4',
    id: 4,
  },
  {
    url: '/images/guests/5.jpeg',
    title: 'Title 5',
    id: 5,
  },
  {
    url: '/images/guests/6.jpeg',
    title: 'Title 6',
    id: 6,
  },
  {
    url: '/images/guests/7.jpeg',
    title: 'Title 7',
    id: 7,
  },
  {
    url: '/images/guests/8.jpeg',
    title: 'Title 8',
    id: 8,
  },
  {
    url: '/images/guests/9.jpeg',
    title: 'Title 9',
    id: 9,
  },
  {
    url: '/images/guests/10.jpeg',
    title: 'Title 10',
    id: 10,
  },
  {
    url: '/images/guests/11.jpeg',
    title: 'Title 11',
    id: 11,
  },
  {
    url: '/images/guests/12.jpeg',
    title: 'Title 12',
    id: 12,
  },
  // {
  //   url: '/images/guests/13.jpeg',
  //   title: 'Title 13',
  //   id: 13,
  // },
];
