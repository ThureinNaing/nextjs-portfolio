import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */ images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d27v83ov1up738.cloudfront.net",
				port: "",
			},
		],
	},
};

export default nextConfig;
