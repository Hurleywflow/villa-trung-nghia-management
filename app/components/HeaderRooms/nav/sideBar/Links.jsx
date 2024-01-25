import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
const variants = {
	open: {
		transition: {
			// slower when opening
			staggerChildren: 0.1,
		},
	},
	closed: {
		transition: {
			// faster when closing
			staggerChildren: 0.05,
			// the opposite when closing
			staggerDirection: -1,
		},
	},
}
const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 50,
		opacity: 0,
	},
}

const Links = () => {
	const items = ['Home', 'Villa', 'Services', 'Contact']
	const router = useRouter()

	return (
		<motion.div
			className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-8 text-2xl"
			variants={variants}
		>
			{items.map(item => (
				<motion.a
					// href={`#${item}`}
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => {
						router.push('/')
					}}
					className="cursor-pointer decoration-2 transition-all duration-100 hover:scale-105 hover:underline hover:decoration-violet-600 hover:underline-offset-4"
				>
					{item}
				</motion.a>
			))}
		</motion.div>
	)
}

export default Links
