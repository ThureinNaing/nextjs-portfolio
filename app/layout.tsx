import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/Toaster";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://thurein-naing.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	verification: {
		google: "BVRrWSjZnI8RLdtMcTyb-VMNq_8xlLSQFqfHpix32dc",
	},

	title: {
		default: "Thurein Naing - Full Stack Developer Portfolio",
		template: "%s | Thurein Naing",
	},
	description:
		"Portfolio of Thurein Naing, a full stack developer building scalable web applications with Next.js, React, Node.js, and modern backend systems.",
	icons: {
		icon: "/TRN.png",
		shortcut: "/TRN.png",
		apple: "/TRN.png", // Apple devices use this icon for the home screen
	},
	keywords: [
		"Thurein Naing",
		"Full Stack Developer",
		"Next.js Portfolio",
		"React Developer",
		"Node.js Developer",
		"Web Developer Portfolio",
	],
	authors: [{ name: "Thurein Naing" }],
	creator: "Thurein Naing",
	publisher: "Thurein Naing",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Thurein Naing - Full Stack Developer Portfolio",
		description:
			"Explore projects, experience, and technical skills by Thurein Naing.",
		url: "/",
		siteName: "Thurein Naing Portfolio",
		type: "website",
		locale: "en_US",
		images: [
			{
				url: "/profile.png",
				width: 1200,
				height: 630,
				alt: "Thurein Naing Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Thurein Naing - Full Stack Developer Portfolio",
		description:
			"Explore projects, experience, and technical skills by Thurein Naing.",
		images: ["/profile.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export const viewport: Viewport = {
	themeColor: "#000000",
	colorScheme: "dark",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark h-full bg-background antialiased">
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
				/>
			</head>
			<body className="min-h-full bg-background text-foreground flex flex-col md:mx-4 p-4">
				<Toaster />
				<Navbar />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
