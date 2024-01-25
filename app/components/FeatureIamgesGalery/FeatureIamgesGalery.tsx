import { motion } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';
import { type FC } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { urlFor } from '@/libs/urlFor';
import { type Image as ImageType } from '@/models/room';

export const FeaturedImageGallery: FC<{ photos: ImageType[] }> = ({
	photos,
}) => {
	const [active, setActive] = React.useState(photos[0])

	return (
		<section className=" flex flex-col items-center justify-center w-full">
			<div className="flex items-center justify-center aspect-video w-[96%]">
				<div className="relative m-4 aspect-video w-full">
					<Image
						className="rounded-lg object-cover object-center "
						src={urlFor(active).url()}
						alt=""
						fill
						sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 80vw"
					/>
				</div>
			</div>
			<div className="mx-auto my-3 w-full max-w-screen-lg px-16 ">
				<Carousel
					className="mx-auto w-full max-w-md"
					opts={{
						align: 'start',
						loop: true,
					}}
				>
					<CarouselContent className="-ml-1">
						{photos.map((photo, index) => (
							<CarouselItem key={index} className="basis-1/2 pl-5 md:basis-1/3">
								<div className="p-0">
									<Card>
										<CardContent className="flex aspect-video items-center justify-center p-0">
											<motion.div
												whileTap={{ opacity: 0.1 }}
												className="relative h-full w-full "
											>
												<Image
													key={photo._key}
													src={urlFor(photo).url()}
													alt={photo._key}
													fill
													sizes="(max-width: 50px) 100vw, 50vw"
													onClick={() => {
														setActive(photo)
													}}
													className="overflow-hidden rounded-lg object-cover object-center"
												/>
											</motion.div>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="backdrop-blur-sm" />
					<CarouselNext className="backdrop-blur-sm" />
				</Carousel>
			</div>
		</section>
	)
}
