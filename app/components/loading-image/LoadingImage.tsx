import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
	alt: string;
	src: string;
	sizes?: string;
	className?: string;
}

const LoadingImage = async ({ alt, src, sizes, className }: Props) => {
	const random = Math.floor(Math.random() * 10);
	await new Promise((resolve) => setTimeout(resolve, random));
	return (
		// <div className='relative aspect-video size-full overflow-hidden'>
		<Image
			alt={alt}
			// width={500}
			// height={500}
			className={cn(
				'object-cover object-center transition-all duration-300 ease-in-out hover:scale-125',
				className,
			)}
			fill
			// sizes='(max-width:320px) 300px, (max-width:375px) 350px, (max-width:480px) 450px, (max-width:640px)600px, (max-width:768px) 720px, (max-width:1024px) 900px, (max-width:1280px) 1200px, 1280px'
			sizes={sizes}
			src={src}
		/>
		// </div>
	);
};

export default LoadingImage;
