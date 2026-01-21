'use client'
import MarqueeDemo from '../magicui/marquee/MarqueeDemo'
import SectionHeading from '../TextSectionHeading/SectionHeading'

function FeedBack() {
	return (
		<section className="mt-[5dvh]">
			<SectionHeading>đánh giá</SectionHeading>
			<MarqueeDemo />
			{/* <Card className="flex w-full flex-col items-center justify-center gap-10 py-2 bg-inherit overflow-hidden">
				<ShineBorderBasicDemo />
				<MarqueeDemo />
			</Card> */}
		</section>
	)
}

export default FeedBack
