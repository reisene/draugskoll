import pkg from '@/package.json';
import type { MetadataRoute } from 'next';

const siteUrl = pkg.homepage || 'http://localhost:3000';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/admin'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
