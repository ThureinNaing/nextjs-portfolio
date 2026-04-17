import type { MetadataRoute } from "next";

const defaultSiteUrl = "https://thurein-naing.vercel.app";

function getSiteUrl(): string {
	const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
	if (!raw) return defaultSiteUrl;
	return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = getSiteUrl();

	return [
		{
			url: `${siteUrl}/`,
			lastModified: new Date().toISOString(),
		},
	];
}
