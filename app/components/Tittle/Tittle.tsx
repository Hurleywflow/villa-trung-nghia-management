/* eslint-disable @typescript-eslint/ban-types */
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { type FC, useRef } from 'react'

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type Props = {}

const Tittle: FC<Props> = () => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
	})

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 100])
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -100])
	return (
		<section
			ref={container}
			// className="mt-[5dvh] flex max-w-full flex-col items-center justify-center overflow-hidden pb-[5dvh]"
			className=" flex w-full flex-col items-center justify-center overflow-hidden pb-[5dvh] lg:hidden"
		>
			<motion.div
				style={{ x: x1 }}
				className=" max-w-fit h-fit mt-[5dvh] text-center text-6xl font-medium text-tertiary-primary shadow-tertiary-primary drop-shadow-2xl text-shadow-lg lg:text-[180px]"
			>
				Villa
			</motion.div>
			<motion.div
				style={{ x: x2 }}
				className=" max-w-fit h-fit text-center text-6xl font-medium text-tertiary-primary shadow-tertiary-primary drop-shadow-2xl text-shadow-lg lg:text-[180px]"
			>
				Trung Nghĩa
			</motion.div>
		</section>
	)
}
export default Tittle
