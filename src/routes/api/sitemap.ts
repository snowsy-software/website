import { createAPIFileRoute } from "@tanstack/react-router/server";

const DOMAIN = "https://snowsy.dev";
const ROUTES = ["", "/pricing", "/features"];

function generateSitemap(): string {
  const urls = ROUTES.map((route) => {
    const loc = `${DOMAIN}${route || "/"}`;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const APIRoute = createAPIFileRoute("/api/sitemap")({
  GET: () => {
    return new Response(generateSitemap(), {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400",
      },
    });
  },
});
