import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";

const events = [
	{
		year: "2025-2026",
		title: "Project Tech Lead",
		subtitle:
			"Attendance Management System (Fourth Year University Project)",
		description:
			"Leading the development of a secure and scalable Attendance Management System. Responsible for software architecture, database design with Prisma & MongoDB, and overseeing the integration of Next.js 15 App Router to ensure optimal performance and security.",
	},
	{
		year: "2024 - 2025",
		title: "Full-stack Developer",
		subtitle: "Academic & Personal Projects",
		description:
			"Focused on mastering modern backend technologies including NestJS and Docker. Developed a Myanmar Unicode typing tutor and successfully implemented Role-Based Access Control (RBAC) systems for university-level resource platforms.",
	},
	{
		year: "2023",
		title: "Web Developer",
		subtitle: "E-commerce Website Project",
		description:
			"Designed and deployed a fully functional E-commerce platform. Gained foundational experience in responsive UI/UX design, state management in React, and integrating third-party payment/communication services.",
	},
];

export function ExperienceSection() {
	return (
		<ScrollTimeline
			events={events}
			title="My Journey"
			subtitle=""
			progressIndicator={true}
			cardAlignment="alternating"
			revealAnimation="fade"
			dateFormat="badge"
			perspective={true}
			darkMode={true}
			smoothScroll={true}
		/>
	);
}
