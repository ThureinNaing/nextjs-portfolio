"use client";

import { motion } from "framer-motion";
import { Card } from "./lightswind/card";
import ScrollReveal from "./lightswind/scroll-reveal";
import { Terminal } from "lucide-react";

const TechStack = () => {
	const TechStacks = [
		{
			name: "Next.js",
			icon: <i className="devicon-nextjs-plain  text-5xl mb-4"></i>,
		},
		{
			name: "React",
			icon: (
				<i className="devicon-react-original colored text-5xl mb-4"></i>
			),
		},
		{
			name: "Node.js",
			icon: (
				<i className="devicon-nodejs-plain-wordmark colored text-5xl mb-4"></i>
			),
		},
		{
			name: "Express.js",
			icon: <i className="devicon-express-original text-5xl mb-4"></i>,
		},
		{
			name: "MongoDB",
			icon: (
				<i className="devicon-mongodb-plain colored text-5xl mb-4"></i>
			),
		},
		{
			name: "Firebase",
			icon: (
				<i className="devicon-firebase-plain colored text-5xl mb-4"></i>
			),
		},
		{
			name: "PostgreSQL",
			icon: (
				<i className="devicon-postgresql-plain colored text-5xl mb-4"></i>
			),
		},
		{
			name: "Prisma",
			icon: <i className="devicon-prisma-original text-5xl mb-4"></i>,
		},
	];
	return (
		<section id="skills" className="space-y-10  scroll-mt-20">
			{/* title */}
			<div className="text-center mt-20 space-y-5">
				<h5 className="w-fit mx-auto my-6 px-6 py-3 rounded-[3rem] flex items-center gap-2 bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-xl border-none text-sm font-medium">
					<Terminal />
					My Tech Stack
				</h5>
				<ScrollReveal
					size="md"
					textClassName="tracking-tight text-center"
				>
					In-depth Learning Tech Stack & Tools
				</ScrollReveal>
			</div>
			{/* tech stack card */}
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
				{TechStacks.map((tech) => (
					<motion.div
						key={tech.name}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						className="group cursor-pointer md:h-70"
					>
						<Card className="w-full h-full rounded-[3rem] bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/10 backdrop-blur-xl p-8 flex flex-col items-center text-center justify-center overflow-hidden relative shadow-lg transition-all group-hover:border-emerald-500/30 border-none">
							<div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 dark:opacity-100" />
							{tech.icon}

							<h3 className=" text-slate-900 dark:text-white uppercase text-xs tracking-widest">
								{tech.name}
							</h3>
						</Card>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default TechStack;
