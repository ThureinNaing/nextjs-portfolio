"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
	const highlightClass =
		"text-indigo-400 font-bold mx-1 hover:text-indigo-300 transition-colors cursor-default";
	return (
		<section className="bg-background">
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
								alt="Founding Partner"
								fill
								priority
								className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
							/>
							{/* Overlay Gradient */}
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

						{/* Decorative background blurs */}
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
								Technical Leadership
							</button>
						</motion.div>
						<h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-none">
							Visionary{" "}
							<span className="text-primary">Leadership.</span>{" "}
							<br />
							Proven{" "}
							<span className="text-muted-foreground italic">
								Results.
							</span>
						</h2>

						<div className="space-y-8 mb-12">
							<p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
								My name is{" "}
								<span className={highlightClass}>
									Thurein Naing
								</span>
								. I&apos;m a{" "}
								<span className={highlightClass}>
									{/* Software Engineer & CEIT student */}
									Computering Engineering and Information
									Technology student
								</span>
								focused on building high-performance
								applications. As{" "}
								<span className="font-semibold underline decoration-purple-500/300 underline-offset-4">
									Project Tech Lead
								</span>
								, I successfully delivered a university-level
								Attendance Management System using
								<span className={highlightClass}>Next.js</span>,
								<span className={highlightClass}>React</span>,
								and
								<span className={highlightClass}>
									Tailwind CSS
								</span>
								.
							</p>

							<p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
								On the back-end, I build secure systems with
								<span className={highlightClass}>
									Node.js
								</span>{" "}
								and
								<span className={highlightClass}>Express</span>,
								leveraging
								<span className={highlightClass}>
									PostgreSQL
								</span>
								,<span className={highlightClass}>MongoDB</span>
								, and
								<span className={highlightClass}>Prisma</span>.
								I thrive on bridging complex engineering with
								clean, maintainable code for impactful digital
								experiences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
