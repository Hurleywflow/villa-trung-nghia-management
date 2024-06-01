import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

type Props = {
	className?: string;
};

const Loading = (className: Props): JSX.Element => (
	<div
		className={cn(
			'flex aspect-square md:aspect-video w-screen md:w-full items-center justify-center bg-background bg-grid-black/[0.2] dark:bg-grid-white/[0.2]',
			className,
		)}
	>
		{/* Radial gradient for the container to give a faded look */}
		<div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
		<div className='grid w-full max-w-screen-2xl grid-cols-1 items-center justify-center gap-10 bg-background p-10 md:grid-cols-2'>
			<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
				<Skeleton className='aspect-video w-4/5 rounded-xl' />
				<div className='flex w-full flex-col items-center justify-center space-y-2'>
					<Skeleton className='h-4 w-3/5' />
					<Skeleton className='h-4 w-3/5' />
				</div>
			</div>
			<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
				<Skeleton className='aspect-video w-4/5 rounded-xl' />
				<div className='flex w-full flex-col items-center justify-center space-y-2'>
					<Skeleton className='h-4 w-3/5' />
					<Skeleton className='h-4 w-3/5' />
				</div>
			</div>
			<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
				<Skeleton className='aspect-video w-4/5 rounded-xl' />
				<div className='flex w-full flex-col items-center justify-center space-y-2'>
					<Skeleton className='h-4 w-3/5' />
					<Skeleton className='h-4 w-3/5' />
				</div>
			</div>
			<div className='flex size-full flex-col items-center justify-center space-y-3 bg-background'>
				<Skeleton className='aspect-video w-4/5 rounded-xl' />
				<div className='flex w-full flex-col items-center justify-center space-y-2'>
					<Skeleton className='h-4 w-3/5' />
					<Skeleton className='h-4 w-3/5' />
				</div>
			</div>
		</div>
		{/* <i>
			<LoaderCircle className='animate-spin' size={36} color='#818CF8' />
		</i> */}
	</div>
);

export default Loading;
