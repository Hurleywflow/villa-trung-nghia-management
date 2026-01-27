// import type { MetadataRoute } from 'next';

// export default function robots(): MetadataRoute.Robots {
// 	return {
// 		rules: [
// 			{
// 				userAgent: '*',
// 				allow: '/',
// 			},
// 			{
// 				userAgent: '*',
// 				allow: 'https://www.villadalat.org/rooms',
// 			},
// 			{
// 				userAgent: '*',
// 				allow: 'https://www.villadalat.org/rooms/*',
// 			},
// 			{
// 				userAgent: '*',
// 				disallow: '/studio',
// 			},
// 		],
// 		sitemap: 'https://www.villadalat.org/sitemap.xml',
// 	};
// }

//ap/robots.txt
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	const baseURL = 'https://www.villadalat.org'

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: [
				// '/studio',
				'/admin/', // Prevents crawling your dashboard or login areas
				'/api/', // Prevents crawling your internal API routes
				'/private/', // Any other folders not meant for the public
			],
		},
		sitemap: `${baseURL}/sitemap.xml`,
	}
}
