"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
	const highlightClass =
		"text-indigo-400 font-bold mx-1 hover:text-indigo-300 transition-colors cursor-default";

	return (
		<section id="about" className="bg-background mt-20 scroll-mt-37.5">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row items-center gap-20">
					{/* Visual Section */}
					<div className="lg:w-1/2 relative group">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							className="relative z-10 w-full min-w-87.5 aspect-square rounded-[3rem] overflow-hidden bg-muted"
						>
							<Image
								src="/profile.png"
								alt="Thurein Naing"
								fill
								priority
								className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />

							<div className="absolute bottom-8 left-8">
								<p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">
									Full Stack Developer
								</p>
								<h3 className="text-white text-2xl font-black tracking-tight">
									Thurein Naing
								</h3>
							</div>
						</motion.div>

						<div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
						<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
					</div>

					{/* Content Section */}
					<div className="lg:w-1/2">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
						>
							<button className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-6 border-transparent bg-primary/5 px-4 py-1.5">
								Full Stack Development
							</button>
						</motion.div>

						<h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none">
							Modern <span className="text-primary">Stack.</span>{" "}
							<br />
							Effective{" "}
							<span className="text-muted-foreground italic">
								Solutions.
							</span>
						</h2>

						<div className="space-y-8 mb-12">
							<p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
								My name is{" "}
								<span className={highlightClass}>
									Thurein Naing
								</span>
								. I am a{" "}
								<span className={highlightClass}>
									Computing Engineering and Information
									Technology student
								</span>
								dedicated to building clean, functional
								applications. I recently developed a
								university-level Attendance Management System,
								focusing on reliability and performance by
								utilizing
								<span className={highlightClass}>Next.js</span>,
								<span className={highlightClass}>Prisma</span>,
								and
								<span className={highlightClass}>
									Neon PostgreSQL
								</span>
								.
							</p>

							<p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
								I enjoy the process of writing maintainable code
								and styling with
								<span className={highlightClass}>
									Tailwind CSS
								</span>{" "}
								to create polished user interfaces. By combining
								modern databases like
								<span className={highlightClass}>
									MongoDB
								</span>{" "}
								and
								<span className={highlightClass}>
									PostgreSQL
								</span>{" "}
								with secure server logic in{" "}
								<span className={highlightClass}>Node.js</span>,
								I build tools that simplify complex tasks and
								provide a smooth digital experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
