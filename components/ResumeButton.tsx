"use client";

import { FileDown } from "lucide-react";
import { motion } from "framer-motion";

interface ResumeButtonProps {
	className?: string;
}

const ResumeButton = ({ className = "" }: ResumeButtonProps) => {
	return (
		<motion.a
			href="/resume.pdf"
			download="Thurein_Naing_Resume.pdf"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={`
        flex items-center gap-2 
        bg-[#161b22] border border-slate-800 
        hover:border-blue-500/50 text-white 
        font-semibold px-4 md:px-8 py-1 md:py-4 rounded-full 
        transition-all duration-300 group shadow-2xl
        ${className}
      `}
		>
			<FileDown
				size={20}
				className="text-blue-400 group-hover:animate-bounce transition-colors"
			/>
			<span className="tracking-tight">Download Resume</span>
		</motion.a>
	);
};

export default ResumeButton;
