import type { Metadata } from 'next'
import { getRoom } from '@/libs/apis'

export async function generateMetadata(slugName: string): Promise<Metadata> {
	if (!slugName) {
		return {
			title: 'Not Found',
			description: 'No room found',
		}
	}

	try {
		const product = await getRoom(slugName)
		console.log(product?.slug?.current)
		console.log(product.name)

		if (!product) {
			throw new Error('Room not found')
		}

		return {
			title: `Villa in Dalat - ${product.name.replaceAll('-', ' ')}`,
			description: product.description,
			alternates: {
				canonical: `/rooms/${product?.slug?.current}`,
			},
			twitter: {
				card: 'summary_large_image',
				site: '@villa_dalat',
				creator: '@villa_dalat',
				title: product.name,
				description: product.description,
			},
			openGraph: {
				title: product.name,
				description: product.description,
			},
		}
	} catch (error) {
		console.error(error)
		return {
			title: 'Not Found',
			description: 'No room found',
		}
	}
}
