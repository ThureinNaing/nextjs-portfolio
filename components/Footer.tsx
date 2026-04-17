"use client";

import { useToast } from "@/hooks/use-toast";
import { Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const username = "ThureinNaing";
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
		<footer className="relative mt-20 border-t border-slate-800/50 bg-background pt-12 pb-8">
			<div className="mx-auto max-w-7xl px-6">
				<div className="flex flex-col items-center justify-between gap-8 md:flex-row">
					{/* Brand/Name Section */}
					<div className="text-center md:text-left">
						<h2 className="text-xl font-bold text-white tracking-tighter italic">
							Thurein<span className="text-blue-500">Naing</span>
						</h2>
						<p className="mt-2 text-sm text-slate-500 max-w-xs leading-relaxed font-mono">
							Computer Engineering and Information Technology
							Student. Building digital solutions with precision.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex gap-3 z-20">
						{socials.map((social, idx) => {
							const Component = social.action ? "button" : "a";

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
													onClick: social.action,
												}
											: {
													href: social.link,
													target: "_blank",
													rel: "noopener noreferrer",
												})}
										className={`p-3 rounded-2xl cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary transition-colors flex items-center justify-center ${social.color}`}
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

				{/* Divider & Copyright */}
				<div className="mt-12 border-t border-slate-800/30 pt-8 text-center">
					<p className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-600 uppercase tracking-widest">
						© {currentYear} • Handcrafted with
						<Heart
							size={12}
							className="text-red-500 fill-red-500 animate-pulse"
						/>
						by {username}
					</p>

					{/* Build Info */}
					<p className="mt-2 text-[10px] text-slate-700 font-mono">
						Built with Next.js, Tailwind CSS & Framer Motion.
					</p>
				</div>
			</div>

			{/* Subtle Bottom Glow */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
		</footer>
	);
};

export default Footer;
