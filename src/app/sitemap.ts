import pkg from '@/package.json';
import type { MetadataRoute } from 'next';

const siteUrl = pkg.homepage || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
  ];
}
