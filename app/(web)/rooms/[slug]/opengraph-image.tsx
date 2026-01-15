/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/promise-function-async */
import { ImageResponse } from 'next/og'
import { getRoom } from '@/libs/apis'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'opengraph-image'
export const size = {
	width: 1200,
	height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
	// slug or id
	const { slug } = params
	try {
		const product = await getRoom(slug)

		if (!product) {
			throw new Error('Room not found')
		}

		return new ImageResponse(
			<div tw="relative flex w-full h-full items-center justify-center">
				{/* Background */}
				<div tw="absolute flex inset-0">
					<img
						tw="flex flex-1"
						src={product?.coverImage + '&w=1200&h=630&auto=format&q=75'}
						alt={product?.name}
					/>
					{/* Overlay */}
					<div tw="absolute flex inset-0 bg-black bg-opacity-50 z-10" />
				</div>
				<div tw="flex flex-col text-neutral-50">
					{/* Title */}
					<div tw="text-7xl font-bold">{product?.name}</div>
					{/* Tags */}
					<div tw="flex mt-6 flex-wrap space-x-10 items-center text-4xl text-neutral-50"></div>
				</div>
			</div>,
			// ImageResponse options
			{
				// For convenience, we can re-use the exported opengraph-image
				// size config to also set the ImageResponse's width and height.
				...size,
				fonts: [
					{
						name: 'Inter',
						data: Buffer.from([]), // Change Uint8Array to Buffer
						// data: new Uint8Array(),
						style: 'normal',
						weight: 400,
					},
				],
			},
		)
	} catch (error) {
		console.error(error)
		return {
			title: 'Not Found',
			description: 'No room found',
		}
	}
}
