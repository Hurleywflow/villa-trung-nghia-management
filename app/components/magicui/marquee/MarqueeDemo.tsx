import { Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingImage from '../../loading-image/LoadingImage'
import Marquee from './Marquee'

type CardType = {
	src: string
	id: string
}
const testimonials: CardType[] = [
	{ id: 'rv1', src: '/images/feedback/1.jpeg' },
	{ id: 'rv2', src: '/images/feedback/2.jpeg' },
	{ id: 'rv3', src: '/images/feedback/3.jpeg' },
	{ id: 'rv4', src: '/images/feedback/4.jpeg' },
	{ id: 'rv5', src: '/images/feedback/5.jpeg' },
	{ id: 'rv6', src: '/images/feedback/6.jpeg' },
	{ id: 'rv7', src: '/images/feedback/7.jpeg' },
	{ id: 'rv8', src: '/images/feedback/8.jpeg' },
	{ id: 'rv9', src: '/images/feedback/9.jpeg' },
]

// const firstRow = testimonials.slice(0, testimonials.length / 2);
// const secondRow = testimonials.slice(testimonials.length / 2);
const firstRow = testimonials

// Refactored solution
const reversedTestimonials = [...testimonials]
const secondRow = reversedTestimonials

const ReviewCard = ({ src }: { src: CardType['src'] }): JSX.Element => {
	return (
		<Card className="relative aspect-video w-[350px] cursor-pointer overflow-hidden bg-background md:w-[450px]">
			{/* <Card className="relative h-52 w-[350px] max-w-full cursor-pointer overflow-hidden bg-background md:w-[450px]"> */}
			<CardContent className="">
				<Suspense
					fallback={
						<div className="flex size-full flex-col items-center justify-center space-y-3 bg-background">
							<Skeleton className="aspect-video w-4/5 rounded-xl" />
							<div className="flex w-full flex-col items-center justify-center space-y-2">
								<Skeleton className="h-4 w-3/5 " />
								<Skeleton className="h-4 w-3/5 " />
							</div>
						</div>
					}
				>
					<LoadingImage
						src={src}
						className="size-full object-fill object-center"
						alt="Carousel image"
						sizes="380px"
					/>
				</Suspense>
			</CardContent>
		</Card>
	)
}

const MarqueeDemo = (): JSX.Element => {
	return (
		<Card className="relative flex flex-col gap-2 overflow-hidden w-full bg-slate-600">
			<Marquee pauseOnHover className="[--duration:140s]">
				{firstRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className=" w-full border-t-4 border-dashed border-border border-stone-300" />
			<Marquee reverse pauseOnHover className="[--duration:140s]">
				{secondRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</Marquee>
			<div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card md:w-20" />
			<div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card md:w-20" />
		</Card>
	)
}

export default MarqueeDemo
