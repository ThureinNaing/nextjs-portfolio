import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "Thurein Naing - Portfolio",
	description:
		"A portfolio website showcasing the projects and skills of Thurein Naing.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={` h-full antialiased`}>
			<body className="min-h-full flex flex-col mx-4 p-4">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
