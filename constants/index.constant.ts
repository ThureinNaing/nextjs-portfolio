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
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam, voluptates vitae labore.",
		img: "/adms.png",
		technologies: ["NextJS", "PostgreSql", "Shadcn UI", "Prisma"],
	},
	{
		title: "SaaS Project",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam, voluptates vitae labore.",
		img: "/saas.png",
		technologies: ["NextJS", "Supabase", "Tailwind CSS"],
	},
	{
		title: "Library Management System",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam, voluptates vitae labore.",
		img: "/library.png",
		technologies: ["React", "Firebase", "Tailwind CSS"],
	},
];

export { abilities, Projects };
