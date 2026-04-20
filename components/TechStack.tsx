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
				<h5 className="mx-auto my-6 flex w-fit items-center gap-2 rounded-[3rem] border border-white/10 bg-white/3 px-6 py-3 text-sm font-medium text-slate-100 shadow-xl backdrop-blur-xl">
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
						<Card className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[3rem] border border-white/10 bg-white/3 p-8 text-center shadow-lg backdrop-blur-xl transition-all group-hover:border-emerald-500/30">
							<div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-100" />
							{tech.icon}

							<h3 className="text-xs uppercase tracking-widest text-white">
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
