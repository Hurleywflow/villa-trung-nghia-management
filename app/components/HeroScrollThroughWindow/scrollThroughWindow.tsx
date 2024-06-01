'use client';
// import './index.css';
import Rooms from '@/app/(web)/rooms/page';
import HorizontalScrollCarousel from '@/app/components/HorizontalScrollImage/HorizontalScrollImage';
import Bghills from '@/app/components/ParallaxHills/bghills';
import {
	type MotionValue,
	motion,
	useMotionTemplate,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import Image from 'next/image';
import { type FC, Suspense, useRef } from 'react';
import CountUpNumber from '../CountUpNumber/CountUpNumber';
import ImageParallax from '../GuestImageScrollUpDown/imageParallax';
import SkewScroll from '../SkewScroll/SkewScroll';
import Tittle from '../Tittle/Tittle';
import CardStackScroll from '../cardStackScroll/cardStackScroll';
import Contact from '../contact/contact';
import { Container } from '../container';
import Loading from '../loading/Loading';
import Testimonials from '../testimonials/testimonials';
import TextScroll from '../textScroll/textScroll';

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
		<section
			ref={ScrollRef}
			id='Home'
			className='m-0 mx-auto box-border w-full overflow-x-clip p-0'
		>
			<div ref={ref} className='relative z-10 h-[200svh] overflow-clip'>
				<motion.div
					style={{ scale }}
					className='hero-background sticky left-0 top-0 grid h-[100svh] origin-[50%_70%] gap-2 p-6 pt-12 [grid-template-rows:4fr_1fr] md:origin-[90%_40%] md:pt-20'
				>
					<div
						className='window-mask flex flex-col rounded-3xl
          bg-gradient-to-tl from-purple-300 to-stone-400
            px-2 py-12 md:flex-row md:p-14'
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
					<div className='mt-2 flex justify-evenly rounded-3xl bg-teal-500'>
						<div className='flex flex-col items-center justify-center gap-3'>
							<p className='text-center text-xl text-tertiary-primary shadow-slate-500 text-shadow-lg md:text-4xl '>
								Rooms
							</p>
							<CountUpNumber duration={5000} endValue={890} />
						</div>
						<div className='flex flex-col items-center justify-center gap-3'>
							<p className='text-center text-xl text-tertiary-primary shadow-slate-500 text-shadow-lg md:text-4xl '>
								Villa
							</p>
							<CountUpNumber duration={5000} endValue={99} />
						</div>
						<div className='flex flex-col items-center justify-center gap-3'>
							<p className='text-center text-xl text-tertiary-primary shadow-slate-500 text-shadow-lg md:text-4xl '>
								Mini Villa
							</p>
							<CountUpNumber duration={5000} endValue={10} />
						</div>
					</div>
				</motion.div>
			</div>
			<div className='mt-[-200svh] h-[200svh] overflow-clip '>
				<div className='h-[200svh] overflow-clip bg-gradient-to-t from-slate-100 to-sky-950'>
					{/* add some animation here or component want to see through window */}

					<motion.span
						style={{ x: imageXCalc }}
						className='sticky top-1/2 mx-auto block aspect-square md:aspect-video w-[1600px] max-w-[96%] overflow-hidden rounded-[60px] bg-gradient-to-t from-[#505064] to-[#111132]  shadow-2xl md:top-1/4'
					>
						<div className='absolute left-0 top-0 z-[1] h-full w-full'>
							<Image
								src='/images/parallax/stars.png'
								alt='stars'
								fill
								sizes='83vw'
							/>
						</div>
						<motion.div
							className='absolute -top-28 left-0 z-[1] h-full w-full'
							initial={{ opacity: 0, y: '10%', x: '20%' }}
							whileInView={{ opacity: 1, y: '-20%', x: '-70%' }}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeatType: 'loop',
								// biome-ignore lint/style/useNumberNamespace: <explanation>
								repeat: Infinity,
							}}
						>
							<Image
								src='/images/parallax/planets.png'
								alt='stars'
								fill
								sizes=' 70vw'
							/>
						</motion.div>
						<motion.span
							className='absolute bottom-0 right-0 z-40 h-full w-full'
							initial={{ opacity: 0, y: '-50%', x: '-100%' }}
							whileInView={{ opacity: 1, y: 0, x: '100%' }}
							transition={{
								duration: 10,
								ease: 'easeInOut',
								repeatType: 'loop',
								// biome-ignore lint/style/useNumberNamespace: <explanation>
								repeat: Infinity,
							}}
						>
							<Image
								src='/airplane.webp'
								alt='airplane'
								fill
								sizes='300px'
								className=' scale-[30%] md:scale-[40%]'
							/>
						</motion.span>
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
						{/* <video
            src={require('@/public/video.mp4')}
            muted
            autoPlay
            loop
            className='absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gray-300 object-cover shadow-2xl'
          /> */}
						<Bghills />
					</motion.span>
				</div>
			</div>
			{/* add more content page on scroll bellow */}
			<Container>
				<Suspense fallback={<Loading className='' />}>
					<Tittle />
				</Suspense>
				<Suspense fallback={<Loading className='' />}>
					<SkewScroll />
				</Suspense>
				<Suspense fallback={<Loading className='' />}>
					{/* Intro section */}
					<TextScroll />
				</Suspense>
				<Suspense fallback={<Loading className='' />}>
					<Rooms />
				</Suspense>
				<Suspense fallback={<Loading className='' />}>
					{/* BBQ Images */}
					<CardStackScroll />
				</Suspense>
				<Suspense fallback={<Loading className='' />}>
					{/* our customer  */}
					<Testimonials />
				</Suspense>
				<Suspense fallback={<Loading className='' />}>
					<ImageParallax />
				</Suspense>
				<div className='md:hidden'>
					<Suspense fallback={<Loading className='' />}>
						<HorizontalScrollCarousel />
					</Suspense>
				</div>
				<Suspense fallback={<Loading className='' />}>
					<Contact />
				</Suspense>
			</Container>
		</section>
	);
};

export default ScrollThroughWindow;
