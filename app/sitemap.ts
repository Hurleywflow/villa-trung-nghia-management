/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRooms } from '@/libs/apis'

export default async function sitemap() {
	const baseURL = 'https://www.villadalat.online';
	// get all rooms
	const rooms = await getRooms()
	console.log(rooms)
	const routesURL =
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		rooms.map((room: { slug: any }) => {
			return {
				url: `${baseURL}/rooms/${room.slug}`,
				lastModified: new Date(),
				changeFrequency: 'yearly',
				priority: 1,
			}
		}) ?? []

	return [
		{
			url: baseURL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		...routesURL,
	]
}
