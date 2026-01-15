'use client'
import { expand, opacity } from '@/app/components/Stairs/anim'
import '@/app/components/Stairs/styles.scss'
import { motion } from 'framer-motion'

export default function Template({
	children,
	backgroundColor,
}: {
	readonly children: React.ReactNode
	readonly backgroundColor: string
}) {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const anim = (variants: any, custom: number | null = null) => {
		return {
			initial: 'initial',
			animate: 'enter',
			exit: 'exit',
			custom,
			variants,
		}
	}

	const nbOfColumns = 5
	return (
		<div className="page stairs" style={{ backgroundColor }}>
			<motion.div {...anim(opacity)} className="transition-background" />
			<div className="transition-container">
				{[...Array(nbOfColumns)].map((_, i) => {
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					return <motion.div key={i} {...anim(expand, nbOfColumns - i)} />
				})}
			</div>
			{children}
		</div>
	)
}
