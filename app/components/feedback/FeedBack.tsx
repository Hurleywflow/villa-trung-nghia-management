"use client";
import { Card } from "@/components/ui/card";
import MarqueeDemo from "../magicui/marquee/MarqueeDemo";
import SectionHeading from '../TextSectionHeading/SectionHeading';

function FeedBack() {
	return (
		<div className="mt-[5dvh]">
		<SectionHeading>khách hàng đánh giá</SectionHeading>
		<Card className='flex w-full flex-col items-center justify-center gap-10 py-2 bg-inherit'>
			{/* <ShineBorderBasicDemo /> */}
			<MarqueeDemo />
		</Card>
			</div>
	);
}

export default FeedBack;
