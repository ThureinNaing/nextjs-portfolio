import type { MetadataRoute } from "next";

const defaultSiteUrl = "https://thurein-naing.vercel.app";

function getSiteUrl(): string {
	const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
	const candidate = raw && raw.length > 0 ? raw : defaultSiteUrl;

	try {
		const normalized = new URL(candidate);
		return normalized.origin;
	} catch {
		return defaultSiteUrl;
	}
}

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = getSiteUrl();

	return [
		{
			url: `${siteUrl}/`,
			lastModified: new Date(),
		},
	];
}
