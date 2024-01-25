import Image from 'next/image'

//todo npm i plaiceholder @plaiceholder/next
import { getPlaiceholder } from 'plaiceholder'

const DynamicBlur: React.FC<{ src: string; sizes: string }> = async ({
	src,
	sizes,
}) => {
	const buffer = await fetch(src)
		.then(async res => {
			if (res.ok) {
				return Buffer.from(await res.arrayBuffer())
			}
		})
		.catch(error => {
			// Handle the error here
			console.error('Error fetching or processing the buffer:', error)
		})

	if (!buffer) {
		return null
	}

	const { base64 } = await getPlaiceholder(buffer)

	return (
		<div className="relative mx-auto aspect-video w-full overflow-hidden">
			<Image
				src={src}
				alt="image"
				fill
				placeholder="blur"
				sizes={sizes}
				blurDataURL={base64}
			/>
		</div>
	)
}

export default DynamicBlur
