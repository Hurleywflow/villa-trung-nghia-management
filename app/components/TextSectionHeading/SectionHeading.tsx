'use client'
import { useEffect } from 'react'

const SectionHeading = ({ children }: { children: string }) => {
	useEffect(() => {
		const spans = document.querySelectorAll(
			'.hover-text span',
		) as NodeListOf<HTMLSpanElement>

		spans.forEach(span => {
			span.addEventListener('mouseenter', function (this: typeof span) {
				this.style.fontWeight = '900'
				this.style.color = '#f5f5f4'

				const leftNeighbor = this.previousElementSibling as HTMLSpanElement
				const rightNeighbor = this.nextElementSibling as HTMLSpanElement

				if (leftNeighbor) {
					leftNeighbor.style.fontWeight = '500'
					leftNeighbor.style.color = '#d6d3d1'
				}
				if (rightNeighbor) {
					rightNeighbor.style.fontWeight = '500'
					rightNeighbor.style.color = '#d6d3d1'
				}
			})

			span.addEventListener('mouseleave', function (this: typeof span) {
				this.style.fontWeight = '400'
				// this.style.fontWeight = '100';
				this.style.color = '#BEB8AE'

				const leftNeighbor = this.previousElementSibling as HTMLSpanElement
				const rightNeighbor = this.nextElementSibling as HTMLSpanElement

				if (leftNeighbor) {
					leftNeighbor.style.fontWeight = '400'
					// leftNeighbor.style.fontWeight = '100';
					leftNeighbor.style.color = '#BEB8AE'
				}

				if (rightNeighbor) {
					rightNeighbor.style.fontWeight = '400'
					// rightNeighbor.style.fontWeight = '100';
					rightNeighbor.style.color = '#BEB8AE'
				}
			})
		})
	}, [])

	return (
		<h2 className="hover-text bg-gradient-to-tr from-red-950  to-tertiary-primary bg-clip-text p-10 text-center text-3xl font-medium uppercase  text-transparent shadow-tertiary-primary text-shadow-lg md:text-5xl">
			<Text>{children}</Text>
		</h2>
	)
}

const Text = ({ children }: { children: string }) => {
	return (
		<>
			{children.split('').map((child, idx) => (
				<span
					style={{
						transition: '0.35s font-weight, 0.35s color',
					}}
					key={idx}
				>
					{child}
				</span>
			))}
		</>
	)
}

export default SectionHeading

// // import { useInView } from 'framer-motion';
// import React from 'react';
// // import EnjoyIssueTracking from './lightBar/enjoy-issue-tracking'
// // const variants = {
// //   initial: {
// //     x: -500,
// //     y: 100,
// //     opacity: 0,
// //   },
// //   animate: {
// //     x: 0,
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 1,
// //       // animation delay between each children
// //       staggerChildren: 0.1,
// //     },
// //   },
// // };

// type SectionHeadingProps = {
//   children: React.ReactNode;
// };

// const SectionHeading = ({ children }: SectionHeadingProps) => {
//   // const ref = useRef<HTMLHeadingElement>(null);
//   // const isInView = useInView(ref, { margin: '-100px' });
//   return (
//     <h2 className='bg-gradient-to-tr from-red-950  to-tertiary-primary bg-clip-text p-10 text-center text-3xl font-medium uppercase  text-transparent shadow-tertiary-primary text-shadow-lg md:text-5xl'>
//       {/* <EnjoyIssueTracking /> */}
//       {children}
//     </h2>

//     // <motion.h2
//     //   className='mb-8 text-center text-3xl font-medium capitalize text-[#BEB8AE]'
//     //   variants={variants}
//     //   initial='initial'
//     //   // animate='animate'
//     //   // whileInView='animate'
//     //   ref={ref}
//     //   animate={isInView && 'animate'}
//     // >
//     //   {children}
//     // </motion.h2>
//   );
// };

// export default SectionHeading;
