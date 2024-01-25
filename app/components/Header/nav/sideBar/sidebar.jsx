'use client'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Links from './Links'
import ToggleButton from './toggleButton'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const variants = {
	open: {
		clipPath: 'circle(2000px at 50px 50px)',
		transition: {
			type: 'spring',
			stiffness: 20,
		},
	},
	closed: {
		clipPath: 'circle(30px at 50px 50px)',
		//todo right hand side
		// clipPath: 'circle(30px at 350px 50px)',
		transition: {
			delay: 0.1,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
}
const Sidebar = () => {
	const [open, setOpen] = useState(false)
	return (
		<motion.div
			className="flex flex-col items-center justify-center md:hidden"
			animate={open ? 'open' : 'closed'}
		>
			<motion.div
				className="fixed bottom-0 left-0 top-0 z-50 flex w-[min(100%,270px)] flex-col items-center justify-center bg-[#03001417] backdrop-blur-md "
				variants={variants}
			>
				<Links />
				<ToggleButton setOpen={setOpen} />
				<Link
					href="/studio"
					target="_blank"
					className="flex h-40 items-center justify-center"
				>
					<Button size="sm" variant="link" className="rounded-full">
						Admin
					</Button>{' '}
				</Link>
			</motion.div>
			{/* right hand side */}
			{/* <motion.div
    		className='fixed w-[min(100%,270px)] backdrop-blur-md bottom-0 z-50 top-0 right-0 flex items-center justify-center '
    		variants={variants}
    	>
       <Links />
    		<ToggleButton setOpen={setOpen} />
    	</motion.div> */}
		</motion.div>
	)
}
export default Sidebar
