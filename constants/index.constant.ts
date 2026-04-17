import { Clock2, MessageSquareMore, Target } from "lucide-react";

const abilities = [
	{
		icon: Target,
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
		iconColor: "text-blue-500",
		bgColor: "bg-blue-500/10",
	},
	{
		icon: MessageSquareMore,
		title: "Reliable Communication",
		desc: "Keeping you updated at every step to ensure transparency and clarity.",
		iconColor: "text-emerald-500",
		bgColor: "bg-emerald-500/10",
	},
	{
		icon: Clock2,
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
		iconColor: "text-amber-500",
		bgColor: "bg-amber-500/10",
	},
];

const Projects = [
	{
		title: "Attendance Management System",
		desc: "A collaborative multi-role tracking system developed with IV-BE-IT members to manage institutional records for Students.",
		img: "/adms.png",
		technologies: ["NextJS", "PostgreSql", "Shadcn UI", "Prisma"],
		github: "https://github.com/beit-g4-attendance-mgmt-2025-2026/attendance-management-system",
		link: "https://adms-demo.vercel.app",
	},
	{
		title: "SaaS Project Framework",
		desc: "A scalable multi-tenant architecture with secure authentication, built as a foundation for future modules.",
		img: "/saas.png",
		technologies: ["NextJS", "Supabase", "Tailwind CSS"],
		github: "https://github.com/ThureinNaing/saas-app",
		link: "https://saas-demo.vercel.app",
	},
	{
		title: "Collaborative Library System",
		desc: "A community platform with global CRUD access and owner-exclusive update rights for secure data management.",
		img: "/library.png",
		technologies: ["React", "Firebase", "Tailwind CSS"],
		github: "https://github.com/ThureinNaing/BookStoreViteReact-Firebase",
		link: "https://library-demo.vercel.app",
	},
];

export { abilities, Projects };
