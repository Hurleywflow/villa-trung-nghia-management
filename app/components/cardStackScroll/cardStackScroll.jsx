/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */
'use client'
import Lenis from '@studio-freight/lenis'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import SectionHeading from '../TextSectionHeading/SectionHeading'
import Card from './Card'
import { projects } from './data'

export default function CardStackScroll() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	})

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	})

	return (
		<section id="Services" className="mx-auto mt-[5dvh]">
			<SectionHeading> dịch vụ BBQ </SectionHeading>
			<div ref={container} className="group relative ">
				{projects.map((project, i) => {
					const targetScale = 1 - (projects.length - i) * 0.05
					return (
						<Card
							key={`p_${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								i
							}`}
							i={i}
							{...project}
							progress={scrollYProgress}
							range={[i * 0.25, 1]}
							targetScale={targetScale}
						/>
					)
				})}
			</div>
		</section>
	)
}
