"use client";

import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
	const highlightClass =
		"text-indigo-400 font-bold mx-1 hover:text-indigo-300 transition-colors cursor-default";
	const emailAddress = "thuureinnnaingg412@gmail.com";
	const { toast } = useToast();

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(emailAddress);

		toast.success({
			title: "Copied Successfully!",
			description: emailAddress,
			duration: 3000,
		});
	};

	const socials = [
		{
			name: "Email",
			icon: <Mail size={20} />,
			action: handleCopyEmail,
			color: "hover:text-red-400",
		},
		{
			name: "GitHub",
			// Devicon GitHub class
			icon: <i className="devicon-github-original text-[20px]"></i>,
			link: "https://github.com/ThureinNaing",
			color: "hover:text-gray-400",
		},
		{
			name: "LinkedIn",
			// Devicon LinkedIn class
			icon: <i className="devicon-linkedin-plain text-[20px]"></i>,
			link: "https://linkedin.com/in/thurein-naing-0b5188318",
			color: "hover:text-blue-400",
		},
	];

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

							<div className="absolute bottom-8 left-8 right-8  flex justify-between items-end gap-3">
								<div>
									{" "}
									<p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">
										Full Stack Developer
									</p>
									<h3 className="text-white text-2xl font-black tracking-tight">
										Thurein Naing
									</h3>
								</div>
								<div className=" flex gap-3 z-20">
									{socials.map((social, idx) => {
										const Component = social.action
											? "button"
											: "a";

										return (
											<motion.div
												key={idx}
												whileHover={{
													scale: 1.1,
													y: -5,
												}}
												whileTap={{ scale: 0.9 }}
											>
												<Component
													{...(social.action
														? {
																onClick:
																	social.action,
															}
														: {
																href: social.link,
																target: "_blank",
																rel: "noopener noreferrer",
															})}
													className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors flex items-center justify-center ${social.color}`}
													title={
														social.name === "Email"
															? "Copy Email"
															: `Go to ${social.name}`
													}
												>
													{social.icon}
												</Component>
											</motion.div>
										);
									})}
								</div>
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
									Computer Engineering and Information
									Technology student
								</span>{" "}
								passionate about full-stack web development.
							</p>

							<p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
								I work with{" "}
								<span className={highlightClass}>React</span>,{" "}
								<span className={highlightClass}>Next.js</span>,
								and{" "}
								<span className={highlightClass}>
									Tailwind CSS
								</span>{" "}
								on the frontend, and{" "}
								<span className={highlightClass}>Node.js</span>{" "}
								and{" "}
								<span className={highlightClass}>Express</span>{" "}
								on the backend, using{" "}
								<span className={highlightClass}>
									PostgreSQL
								</span>
								,{" "}
								<span className={highlightClass}>MongoDB</span>,
								and{" "}
								<span className={highlightClass}>Prisma</span>{" "}
								to build modern, scalable applications.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
