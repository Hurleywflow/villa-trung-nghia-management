import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import LoadingImage from "../../loading-image/LoadingImage";
import Marquee from "./Marquee";

type CardType = {
	src: string;
	id: string;
};
const testimonials: CardType[] = [
	{ id: "rv1", src: "/Images/review/1.png" },
	{ id: "rv2", src: "/Images/review/2.png" },
	{ id: "rv3", src: "/Images/review/3.png" },
	{ id: "rv4", src: "/Images/review/4.png" },
	{ id: "rv5", src: "/Images/review/5.png" },
	{ id: "rv6", src: "/Images/review/6.png" },
	{ id: "rv7", src: "/Images/review/7.png" },
	{ id: "rv8", src: "/Images/review/8.png" },
	{ id: "rv9", src: "/Images/review/9.png" },
];

// const firstRow = testimonials.slice(0, testimonials.length / 2);
// const secondRow = testimonials.slice(testimonials.length / 2);
const firstRow = testimonials;

// Refactored solution
const reversedTestimonials = [...testimonials];
const secondRow = reversedTestimonials;

const ReviewCard = ({
	src,
}: {
	src: CardType["src"];
}): JSX.Element => {
	return (
		<Card className='relative h-52 w-[350px] max-w-full cursor-pointer overflow-hidden bg-[#252326] md:w-[450px]'>
			<CardContent className=''>
				<Suspense
					fallback={
						<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
							<Skeleton className='aspect-video w-4/5 rounded-xl' />
							<div className='flex w-full flex-col items-center justify-center space-y-2'>
								<Skeleton className='h-4 w-3/5 ' />
								<Skeleton className='h-4 w-3/5 ' />
							</div>
						</div>
					}
				>
					<LoadingImage
						src={src}
						className='size-full object-fill object-center'
						alt='Carousel image'
						sizes='380px'
					/>
				</Suspense>
			</CardContent>
		</Card>
	);
};

const MarqueeDemo = (): JSX.Element => {
	return (
		<div className='relative flex size-full flex-col items-center justify-center gap-2 overflow-hidden border-border p-2'>
			<Marquee pauseOnHover className='[--duration:140s]'>
				{firstRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className=' w-full border-t-4 border-dashed border-border' />
			<Marquee reverse pauseOnHover className='[--duration:140s]'>
				{secondRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card md:w-20' />
			<div className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card md:w-20' />
		</div>
	);
};

export default MarqueeDemo;
