import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // not allow to show in google
      disallow: '/studio',
    },
    sitemap: 'https://yourdomainname/sitemap.xml',
  }
}
