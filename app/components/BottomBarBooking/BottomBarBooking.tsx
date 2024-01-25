'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Socials = [
	{
		href: 'https://www.facebook.com/villadalattrungnghia/',
		src: '/images/icon/f.svg',
		alt: 'Facebook',
	},
	{
		href: 'https://zalo.me/0937655411',
		src: '/images/icon/z.svg',
		alt: 'zalo',
	},
	{
		href: 'tel:0937655411',
		src: '/images/icon/p.svg',
		alt: 'Phone',
	},
]
function BottomBarBooking() {
	return (
		<motion.div
			className="fixed bottom-0 z-[9999] mx-auto flex h-11 w-full
     flex-row items-center justify-center rounded-t-2xl bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-sm md:hidden"
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1, transition: { duration: 0.5 } }}
			// whileInView={{ opacity: 1 }}
		>
			{Socials.map((social, index) => (
				<Link
					href={social.href}
					key={index}
					className="w-1/3 flex-auto cursor-pointer"
					target="_blank"
				>
					<motion.div
						className="relative mx-auto aspect-square h-10 rounded-full "
						whileTap={{ scale: 1.5 }}
						animate={{ transition: { duration: 0.2 } }}
					>
						<Image
							src={social.src}
							alt="logo"
							fill
							sizes="100vw"
							className="object-cover object-center"
						/>
					</motion.div>
				</Link>
			))}
		</motion.div>
	)
}

export default BottomBarBooking
