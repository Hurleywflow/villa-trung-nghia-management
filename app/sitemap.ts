// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { getRooms } from '@/libs/apis'

// export default async function sitemap() {
// 	const baseURL = 'https://www.villadalat.org';
// 	// get all rooms
// 	const rooms = await getRooms()
// 	console.log(rooms)
// 	const routesURL =
// 		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
// 		rooms.map((room: { slug: any }) => {
// 			return {
// 				url: `${baseURL}/rooms/${room.slug}`,
// 				lastModified: new Date(),
// 				changeFrequency: 'daily',
// 				priority: 1,
// 			}
// 		}) ?? []

// 	return [
// 		{
// 			url: baseURL,
// 			lastModified: new Date(),
// 			changeFrequency: 'daily',
// 			priority: 2,
// 		},
// 		...routesURL,
// 	]
// }

import type { MetadataRoute } from 'next'
// app/sitemap.ts
import { getRooms } from '@/libs/apis'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseURL = 'https://www.villadalat.org'

	// 1. Fetch rooms and handle potential null/undefined
	const rooms = (await getRooms()) || []

	// 2. Map dynamic room URLs
	const roomUrls = rooms.map((room: { slug: any }) => ({
		// Ensure this matches your folder structure: '/room/' or '/rooms/'
		url: `${baseURL}/rooms/${room.slug}`,
		lastModified: new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.8, // Room pages are important, but usually secondary to the homepage
	}))

	// 3. Return combined routes
	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: 'yearly' as const,
			priority: 1.0, // Highest priority for the homepage
		},
		...roomUrls,
	]
}
