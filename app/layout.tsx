import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/Toaster";

const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL ?? "https://thurein-naing.vercel.app";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	verification: {
		google: process.env.google_site_verification!,
	},

	title: {
		default: "Thurein Naing - Full Stack Developer Portfolio",
		template: "%s | Thurein Naing",
	},
	description:
		"Portfolio of Thurein Naing, a full stack developer building scalable web applications with Next.js, React, Node.js, and modern backend systems.",
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={` h-full antialiased`}>
			<head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
				/>
			</head>
			<body className="min-h-full flex flex-col md:mx-4 p-4 ">
				<Toaster />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
