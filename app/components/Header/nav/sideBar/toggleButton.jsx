import { motion } from 'framer-motion'

const ToggleButton = ({ setOpen }) => {
	return (
		<button
			onClick={() => setOpen((prev) => !prev)}
			className="fixed left-[25px] top-[25px] z-50 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent outline-none transition-all duration-0 ease-linear hover:scale-110 focus:scale-110 active:scale-105"
			type="button"
		>
			<svg
				width="23"
				height="23"
				viewBox="0 0 23 23"
				className=""
				aria-hidden="true"
			>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					d="M 2 9.423 L 20 9.423"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
				/>
				<motion.path
					strokeWidth="3"
					stroke="black"
					strokeLinecap="round"
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</button>
		//todo: right hand side
		// <button
		// 	onClick={() => setOpen((prev) => !prev)}
		// 	className='fixed z-50 top-[25px] right-[25px] w-[50px] h-[50px] rounded-full flex justify-center items-center bg-transparent border-none cursor-pointer outline-none transition-all duration-0 ease-linear hover:scale-110 focus:scale-110 active:scale-105'
		// >
		// 	<svg width='23' height='23' viewBox='0 0 23 23' className=''>
		// 		<motion.path
		// 			strokeWidth='3'
		// 			stroke='black'
		// 			strokeLinecap='round'
		// 			variants={{
		// 				closed: { d: 'M 2 2.5 L 20 2.5' },
		// 				open: { d: 'M 3 16.5 L 17 2.5' }
		// 			}}
		// 		/>
		// 		<motion.path
		// 			strokeWidth='3'
		// 			stroke='black'
		// 			strokeLinecap='round'
		// 			d='M 2 9.423 L 20 9.423'
		// 			variants={{
		// 				closed: { opacity: 1 },
		// 				open: { opacity: 0 }
		// 			}}
		// 		/>
		// 		<motion.path
		// 			strokeWidth='3'
		// 			stroke='black'
		// 			strokeLinecap='round'
		// 			variants={{
		// 				closed: { d: 'M 2 16.346 L 20 16.346' },
		// 				open: { d: 'M 3 2.5 L 17 16.346' }
		// 			}}
		// 		/>
		// 	</svg>
		// </button>
	)
}

export default ToggleButton
