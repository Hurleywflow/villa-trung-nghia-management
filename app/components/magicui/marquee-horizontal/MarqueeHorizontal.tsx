import { useId } from 'react'
import { cn } from '@/lib/utils'

type MarqueeProps = {
	className?: string
	reverse?: boolean
	pauseOnHover?: boolean
	children?: React.ReactNode
	horizontal?: boolean
	repeat?: number
	[key: string]: any
}

export default function MarqueeHorizontal({
	className,
	reverse,
	pauseOnHover = false,
	children,
	horizontal = false,
	repeat = 4,
	...props
}: MarqueeProps): JSX.Element {
	const keyID = useId()
	return (
		<div
			{...props}
			className={cn(
				'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
				{
					'flex-col': !horizontal,
					'flex-row': horizontal,
				},
				className,
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, _i) => (
					<div
						key={keyID}
						className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
							'animate-marqueehori flex-col': !horizontal,
							'animate-marqueehori-horizontal flex-row': horizontal,
							'group-hover:[animation-play-state:paused]': pauseOnHover,
							'[animation-direction:reverse]': reverse,
						})}
					>
						{children}
					</div>
				))}
		</div>
	)
}
