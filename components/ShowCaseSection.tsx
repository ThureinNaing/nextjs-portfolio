"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
	ArrowUpRight,
	ExternalLink,
	Sparkles,
	Monitor,
	Smartphone,
} from "lucide-react";
import Image from "next/image";

const projects = [
	{
		id: 1,
		title: "EcoSphere Dashboard",
		category: "Web App",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
		desc: "A sustainability tracking platform for modern enterprises.",
	},
	{
		id: 2,
		title: "Nova Mobile Pay",
		category: "Fintech",
		image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2370",
		desc: "Next-generation digital wallet with biometric security.",
	},
	{
		id: 3,
		title: "Aura Creative Agency",
		category: "Branding",
		image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2371",
		desc: "Reimagining the visual identity of a global design firm.",
	},
	{
		id: 4,
		title: "Zenith E-Commerce",
		category: "Shopping",
		image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2370",
		desc: "Immersive shopping experience for luxury fashion brands.",
	},
];

const ShowCaseSection = () => {
	return (
		<section className="w-full relative overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<h4 className="px-4 py-2 rounded-full border-primary/20 bg-primary/5 text-primary font-black uppercase tracking-widest text-[10px]">
					<Sparkles className="w-3 h-3 mr-2 inline" />
					Projects
				</h4>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<AnimatePresence mode="popLayout">
						{projects.map((project, i) => (
							<motion.div
								key={project.id}
								layout
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="group relative cursor-pointer"
							>
								<div className="relative aspect-16/10 rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/10">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-1000 group-hover:scale-110"
										unoptimized
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-10">
										<div className="flex justify-between items-start">
											<div className="flex gap-2">
												<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
													<Monitor className="w-5 h-5" />
												</div>
												<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
													<Smartphone className="w-5 h-5" />
												</div>
											</div>
											<div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center transform -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
												<ArrowUpRight className="w-7 h-7" />
											</div>
										</div>

										<div className="transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
											<p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mb-2">
												{project.category}
											</p>
											<h3 className="text-3xl font-black text-white mb-4 italic">
												{project.title}
											</h3>
											<div className="h-1 w-20 bg-primary rounded-full" />
										</div>
									</div>
								</div>

								<div className="mt-8 flex justify-between items-end">
									<div className="space-y-1">
										<h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-widest group-hover:text-primary transition-colors">
											{project.title}
										</h4>
										<p className="text-slate-500 font-medium italic">
											{project.desc}
										</p>
									</div>
									<button className="hidden sm:flex group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
										<ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-primary" />
									</button>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default ShowCaseSection;
