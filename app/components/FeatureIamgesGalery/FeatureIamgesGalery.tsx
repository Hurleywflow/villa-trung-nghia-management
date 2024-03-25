// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import * as React from 'react';
import { urlFor } from '@/libs/urlFor';
import type { Image as ImageType } from '@/models/room';
import type { FC } from 'react';

// import { Card, CardContent } from '@/components/ui/card';
// import {
// 	Carousel,
// 	CarouselContent,
// 	CarouselItem,
// 	CarouselNext,
// 	CarouselPrevious,
// } from '@/components/ui/carousel';
// import { urlFor } from '@/libs/urlFor';
// import type { Image as ImageType } from '@/models/room';

// export const FeaturedImageGallery: FC<{ photos: ImageType[] }> = ({
// 	photos,
// }) => {
// 	const [active, setActive] = React.useState(photos[0]);

// 	return (
// 		<section className=' flex flex-col items-center justify-center w-full'>
// 			<div className='flex items-center justify-center aspect-video w-[96%]'>
// 				<div className='relative m-4 aspect-video w-full'>
// 					<Image
// 						className='rounded-lg object-cover object-center '
// 						src={urlFor(active).url()}
// 						alt=''
// 						fill
// 						sizes='(max-width: 768px) 300px, (max-width: 1024px) 800px, 900px'
// 					/>
// 				</div>
// 			</div>
// 			<div className='mx-auto my-3 w-full max-w-screen-lg px-16 '>
// 				<Carousel
// 					className='mx-auto w-full max-w-md'
// 					opts={{
// 						align: 'start',
// 						loop: true,
// 					}}
// 				>
// 					<CarouselContent className='-ml-1'>
// 						{photos.map((photo, index) => (
// 							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
// 							<CarouselItem key={index} className='basis-1/2 pl-5 md:basis-1/3'>
// 								<div className='p-0'>
// 									<Card>
// 										<CardContent className='flex aspect-video items-center justify-center p-0'>
// 											<motion.div
// 												whileTap={{ opacity: 0.1 }}
// 												className='relative h-full w-full '
// 											>
// 												<Image
// 													key={photo._key}
// 													src={urlFor(photo).url()}
// 													alt={photo._key}
// 													fill
// 													sizes='(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px'
// 													onClick={() => {
// 														setActive(photo);
// 													}}
// 													className='overflow-hidden rounded-lg object-cover object-center'
// 												/>
// 											</motion.div>
// 										</CardContent>
// 									</Card>
// 								</div>
// 							</CarouselItem>
// 						))}
// 					</CarouselContent>
// 					<CarouselPrevious className='backdrop-blur-sm' />
// 					<CarouselNext className='backdrop-blur-sm' />
// 				</Carousel>
// 			</div>
// 		</section>
// 	);
// };

/* eslint-disable import/no-extraneous-dependencies */
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';

import LoadingSpinner from '@/app/(web)/rooms/[slug]/loading';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from '@/components/ui/carousel';
import Image from 'next/image';

const FeaturedImageGallery: FC<{ photos: ImageType[]; isLoading: boolean }> = ({
	photos,
	isLoading,
}) => {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			// console.log('current');
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);
	const plugin = React.useRef(
		Autoplay({ delay: 5000, stopOnInteraction: true }),
	);

	return (
		<div>
			<Carousel
				className='w-screen max-w-screen-2xl overflow-hidden md:w-[90vw] lg:overflow-visible'
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
				opts={{
					align: 'start',
					loop: true,
				}}
				plugins={[plugin.current]}
				setApi={setApi}
			>
				<CarouselContent>
					{photos.map((photo, index) => (
						<CarouselItem key={photo._key}>
							<div className='p-1'>
								<Card>
									{isLoading ? (
										<LoadingSpinner />
									) : (
										<CardContent className=' relative flex aspect-video w-full  items-center justify-center p-6 rounded-lg overflow-hidden'>
											{/* <span className='text-4xl font-semibold'>{index + 1}</span> */}
											<Image
												key={photo._key}
												src={urlFor(photo).url()}
												alt={`Can not be found ${photo._key}`}
												className='object-cover object-center hover:scale-125 transition-all duration-300 ease-in-out '
												fill
												sizes='(max-width: 768px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 80vw, (max-width: 1536px) 80vw, 60vw'
												// Static images
												// placeholder='blur'
											/>
										</CardContent>
									)}
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className='py-2 text-center text-sm text-muted-foreground'>
				Image {current} of {count}
			</div>
		</div>
	);
};

export default FeaturedImageGallery;
