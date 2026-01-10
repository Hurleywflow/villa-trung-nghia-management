import { type Metadata } from 'next'
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

		if (!product) {
			throw new Error('Room not found')
		}

		return {
			title: product.name,
			description: product.description,
			alternates: {
				canonical: `/rooms/${product.slug}`,
				// languages: {
				// 	en: `/en/rooms/${product.slug}`,
				// 	vi: `/vi/rooms/${product.slug}`,
				// },
			},
			twitter: {
				card: 'summary_large_image',
				site: '@villa_dalat',
				creator: '@villa_dalat',
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
