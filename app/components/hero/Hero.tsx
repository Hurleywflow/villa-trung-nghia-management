"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { H1, H6 } from "@/components/cc/text-utils/TextUtils";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/lib/framer";
import AvatarCirclesDemo from "../avatar-circles/AvatarCirclesDemo";
import { BorderBeam } from "../magicui/boderBeam/BorderBeam";
import { ImagesSlider } from "./ImagesSlider";

function Hero(): JSX.Element {
	const _pathname = usePathname();
	const images = ["/images/hotel/hero-1.jpeg", "/images/hotel/hero-2.jpeg"];
	return (
		<div className=" relative flex h-screen max-h-[1280px] w-full flex-col items-center justify-center">
			<ImagesSlider className="relative z-20 h-screen w-full" images={images}>
				<MotionDiv
					// initial={{ opacity: 0.3, y: 50 }}
					// whileInView={{ opacity: 1, y: 0 }}
					// transition={{
					// 	delay: 0.3,
					// 	duration: 0.5,
					// 	ease: "easeInOut",
					// }}
					className="absolute bottom-0 z-10 flex size-fit flex-col items-center justify-center gap-2 p-2 md:gap-5"
				>
					<MotionDiv
						initial={{ opacity: 0.7, y: 40, scale: 0.9 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 0.7,
							ease: "easeInOut",
						}}
					>
						{/* <h1 className='text-balance p-2 text-center font-dancing_script text-7xl font-light text-white dark:text-white md:p-4 md:text-9xl  lg:p-6 lg:text-[10rem]'>
							G'day mate!
						</h1> */}
						<h1
							className=' max-w-[12ch] animate-slowpan bg-[url("/phenix.webp")] bg-clip-text
    pb-5 text-6xl
     leading-[0.85] text-transparent
     md:my-auto md:text-8xl lg:text-8xl xl:text-[9rem] 2xl:text-[11rem] 4xl:text-[17rem]'
						>
							Xin chào!
						</h1>
					</MotionDiv>
					<div className="relative flex w-fit flex-col items-center justify-center gap-2 rounded-[0.4rem] bg-background/50 p-2 md:p-5 md:gap-10 md:mb-5 lg:mb-10">
						<BorderBeam size={250} duration={12} delay={9} />
						<p className="text-lg text-slate-900 shadow-slate-500 text-shadow-lg md:text-3xl">
							Tận hưởng không gian thoải mái thư giãn, nghỉ ngơi cùng người
							thân, bạn bè và đồng nghiệp tại hệ thống cho thuê biệt thự sang
							trọng tại Đà Lạt.
						</p>
						<Link href="https://www.google.com/maps/place/Villa+TN+1/@11.9374824,108.4595964,17z/data=!4m18!1m9!3m8!1s0x3171130065c3b52d:0x3f7ac0b02dc3a62a!2sVilla+TN+1!8m2!3d11.9374824!4d108.4595964!9m1!1b1!16s%2Fg%2F11x6q0jk9g!3m7!1s0x3171130065c3b52d:0x3f7ac0b02dc3a62a!8m2!3d11.9374824!4d108.4595964!9m1!1b1!16s%2Fg%2F11x6q0jk9g!18m1!1e1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
							<Button className="flex items-center gap-5" variant="ghost">
								<AvatarCirclesDemo /> <span>⭐⭐⭐⭐⭐</span>
							</Button>
						</Link>
					</div>
					{/* <Link href='tel:+12565462553'>
						<ShimmerButton className='text-center text-2xl font-bold md:text-6xl'>
							<AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 text-foreground '>
								<span>✨ Book Now</span>

							</AnimatedShinyText>
						</ShimmerButton>
					</Link> */}
				</MotionDiv>
			</ImagesSlider>
		</div>
	);
}
export default Hero;
