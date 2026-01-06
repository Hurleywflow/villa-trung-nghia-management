"use client";
import { Card } from "@/components/ui/card";
import MarqueeDemo from "../magicui/marquee/MarqueeDemo";

function FeedBack() {
	return (
		<Card className='flex w-full flex-col items-center justify-center gap-10 py-2'>
			{/* <ShineBorderBasicDemo /> */}
			<MarqueeDemo />
		</Card>
	);
}

export default FeedBack;
