import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const sitemap = new SitemapStream({ hostname: "https://teakwoodcamping.com" });

const routes = [
  "/",
  "/packages",
  "/stay",
  "/contact",
  "/events",
  "/gallery",
  "/activities",
  "/faq",
  "/terms",
  "/mawla-ghaati-run",
  "/day-outing",
  "/overnight-stay",
  "/ladies-outing",
  "/corporate-retreat",
];

for (const route of routes) {
  sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
}

sitemap.end();

const data = await streamToPromise(sitemap);
const writeStream = createWriteStream("./public/sitemap.xml");
writeStream.write(data.toString());
writeStream.end();

console.log("Sitemap generated successfully.");
