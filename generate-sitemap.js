import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://teakwoodcamping.com' });

// ✅ Add your routes manually (important for React apps)
const routes = [
  '/',
  '/packages',
  '/stay',
  '/contact',
  '/events',
  '/activities'
];
// Generate and save sitemap
for (const route of routes) {
  sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
}
sitemap.end();

const data = await streamToPromise(sitemap);
const writeStream = createWriteStream('./public/sitemap.xml');
writeStream.write(data.toString());
writeStream.end();

console.log('✅ Sitemap generated successfully!');