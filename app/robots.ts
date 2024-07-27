import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: '*',
				allow: 'https://www.villadalat.online/rooms',
			},
			{
				userAgent: '*',
				allow: 'https://www.villadalat.online/rooms/*',
			},
			{
				userAgent: '*',
				disallow: '/studio',
			},
		],
		sitemap: 'https://www.villadalat.online/sitemap.xml',
	};
}
