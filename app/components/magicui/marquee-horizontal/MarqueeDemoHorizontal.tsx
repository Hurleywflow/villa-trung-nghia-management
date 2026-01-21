import { Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingImage from '../../loading-image/LoadingImage'
import MarqueeHorizontal from './MarqueeHorizontal'

type CardType = {
	src: string
	id: string
}
const testimonials: CardType[] = [
	{ id: 'rv1', src: '/images/guests/1.jpeg' },
	{ id: 'rv2', src: '/images/guests/2.jpeg' },
	{ id: 'rv3', src: '/images/guests/3.jpeg' },
	{ id: 'rv4', src: '/images/guests/4.jpeg' },
	{ id: 'rv5', src: '/images/guests/5.jpeg' },
	{ id: 'rv6', src: '/images/guests/6.jpeg' },
	{ id: 'rv7', src: '/images/guests/7.jpeg' },
	{ id: 'rv8', src: '/images/guests/8.jpeg' },
	{ id: 'rv9', src: '/images/guests/9.jpeg' },
	{ id: 'rv10', src: '/images/guests/10.jpeg' },
	{ id: 'rv11', src: '/images/guests/11.jpeg' },
	{ id: 'rv12', src: '/images/guests/12.jpeg' },
]

// const firstRow = testimonials.slice(0, testimonials.length / 2);
// const secondRow = testimonials.slice(testimonials.length / 2);
const firstRow = testimonials

// Refactored solution
const reversedTestimonials = [...testimonials]
const secondRow = reversedTestimonials

const ReviewCard = ({ src }: { src: CardType['src'] }): JSX.Element => {
	return (
			<Card className="relative aspect-square w-full cursor-pointer overflow-hidden bg-background ">
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
						className="size-full object-cover object-center"
						alt="Carousel image"
						sizes="380px"
					/>
				</Suspense>
			</CardContent>
		</Card>
	)
}

const MarqueeDemoHorizontal = (): JSX.Element => {
	return (
		<Card className="relative flex aspect-square w-full flex-row gap-0 overflow-hidden bg-slate-600">
			<MarqueeHorizontal pauseOnHover className="[--duration:80s] w-full">
				{firstRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</MarqueeHorizontal>
			{/* <div className=" h-full border-r-4 border-dashed border-border border-stone-300" /> */}
			<MarqueeHorizontal
				reverse
				pauseOnHover
				className="[--duration:120s] w-full"
			>
				{secondRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</MarqueeHorizontal>
			{/* <div className=" h-full border-r-4 border-dashed border-border border-stone-300" /> */}
			<MarqueeHorizontal pauseOnHover className="[--duration:90s] w-full">
				{firstRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</MarqueeHorizontal>
			{/* <div className=" h-full border-r-4 border-dashed border-border border-stone-300" /> */}
			<MarqueeHorizontal
				reverse
				pauseOnHover
				className="[--duration:100s] w-full"
			>
				{secondRow.map((review) => (
					<ReviewCard key={review.id} {...review} />
				))}
			</MarqueeHorizontal>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-card md:h-20" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card md:h-20" />
		</Card>
	)
}

export default MarqueeDemoHorizontal
