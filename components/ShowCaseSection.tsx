"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Code2Icon, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./lightswind/card";
import { Projects } from "@/constants/index.constant";

// Animation Configurations
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const cardVariants: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const ShowCaseSection = () => {
	return (
		<section id="projects" className="py-20 scroll-mt-25">
			{/* Section Header */}
			<motion.h2
				initial={{ opacity: 0, y: -10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="text-center font-black text-4xl md:text-5xl mb-16 tracking-tighter text-white"
			>
				Featured <span className="text-blue-500">Projects</span>
			</motion.h2>

			{/* Projects Grid */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
			>
				{Projects.map((project, index) => (
					<motion.div
						key={index}
						variants={cardVariants}
						whileHover={{ y: -8 }}
						className="h-full"
					>
						<Card className="h-full bg-[#0d1117] border-slate-800 hover:border-blue-500/40 transition-all duration-500 group overflow-hidden">
							<CardContent className="p-5 space-y-6">
								{/* Image Container with Hover Zoom */}
								<div className="relative w-full aspect-video overflow-hidden rounded-xl border border-slate-800/50">
									<Image
										src={project.img}
										alt={project.title}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										className="object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									{/* Subtle Overlay */}
									<div className="absolute inset-0 bg-linear-to-t from-[#0d1117]/80 via-transparent to-transparent opacity-60" />
								</div>

								{/* Content */}
								<div className="space-y-3">
									<h3 className="font-extrabold text-xl text-white tracking-tight group-hover:text-blue-400 transition-colors">
										{project.title}
									</h3>
									<p className="text-slate-400 text-sm leading-relaxed">
										{project.desc}
									</p>
								</div>

								{/* Tech Stack Section */}
								<div className="space-y-3 pt-2">
									<div className="flex gap-2 items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
										<Code2Icon
											size={14}
											className="text-blue-500"
										/>
										Tech Stack
									</div>
									<div className="flex items-center gap-2 flex-wrap">
										{project.technologies.map(
											(tech, idx) => (
												<span
													key={idx}
													className="rounded-lg border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-[10px] text-blue-400 font-bold transition-colors hover:bg-blue-500/10"
												>
													{tech}
												</span>
											),
										)}
									</div>
								</div>

								{/* Footer Buttons */}
								<div className="flex justify-between items-center gap-4 pt-4">
									<a
										href={project.link || "#"}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex gap-2 items-center justify-center w-full rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
											project.link
												? "bg-[#161b22] border border-slate-800 text-white hover:border-blue-500/50 hover:bg-[#1c2128]"
												: "bg-[#161b22]/50 border border-slate-900 text-slate-600 cursor-not-allowed"
										}`}
									>
										<ExternalLink size={14} />
										<span>Demo</span>
									</a>

									<motion.a
										whileTap={{ scale: 0.95 }}
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 w-full rounded-xl bg-white text-black px-4 py-2.5 hover:bg-slate-200 transition-all font-black text-xs shadow-[0_0_20px_rgba(255,255,255,0.1)]"
									>
										<i className="devicon-github-original text-[16px]"></i>
										<span>GitHub</span>
									</motion.a>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default ShowCaseSection;
