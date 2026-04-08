"use client";

import React, { useEffect, useState } from "react";
import { Copy, Terminal, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { AuroraTextEffect } from "./aurora-text-effect";

type TerminalCardProps = {
	command: string;
	className?: string;
};

const TerminalCard: React.FC<TerminalCardProps> = ({ command, className }) => {
	const [copied, setCopied] = useState(false);
	const [displayedText, setDisplayedText] = useState("");
	const [index, setIndex] = useState(0);

	// Typing animation logic
	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (index < command.length) {
			timeout = setTimeout(() => {
				setDisplayedText((prev) => prev + command.charAt(index));
				setIndex((prev) => prev + 1);
			}, 40); // typing speed
		} else {
			// အဆုံးထိရောက်ရင် ၃ စက္ကန့်နားပြီးမှ ပြန်စမယ်
			timeout = setTimeout(() => {
				setDisplayedText("");
				setIndex(0);
			}, 3000);
		}

		return () => clearTimeout(timeout);
	}, [index, command]);

	const handleCopy = () => {
		navigator.clipboard.writeText(command);
		setCopied(true);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div
			className={cn(
				"border rounded-xl backdrop-blur-md min-w-[300px] max-w-full overflow-hidden shadow-2xl",
				"bg-zinc-900/90 border-zinc-800",
				className,
			)}
		>
			{/* Terminal Header */}
			<div className="flex items-center justify-between px-4 py-3 bg-zinc-800/40 border-b border-zinc-700/30">
				<div className="flex items-center gap-3">
					<div className="flex gap-1.5">
						<div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
						<div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
						<div className="w-3 h-3 rounded-full bg-[#27c93f]" />
					</div>
					<div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
						<Terminal className="w-3.5 h-3.5" />
						Terminal — Aurora
					</div>
				</div>
				<button
					className="p-1.5 hover:bg-zinc-700/50 rounded-md transition-all text-zinc-400 hover:text-white"
					onClick={handleCopy}
				>
					{copied ? (
						<Check className="w-3.5 h-3.5 text-green-500" />
					) : (
						<Copy className="w-3.5 h-3.5" />
					)}
				</button>
			</div>

			{/* Terminal Content Area */}
			<div className="relative p-6 bg-black min-h-[160px] max-h-[400px] overflow-auto select-none">
				<div className="inline-block">
					{/* ✨ Aurora Text Effect - Typing စာသားကို တိုက်ရိုက်ပြမည် */}
					<div className="inline-block align-middle">
						<AuroraTextEffect
							text={displayedText}
							className="text-lg md:text-xl font-bold font-mono tracking-tight"
							colors={{
								first: "bg-cyan-400",
								second: "bg-purple-500",
								third: "bg-blue-400",
								fourth: "bg-emerald-400",
							}}
						/>
					</div>

					{/* ⚡ Animated Cursor - Aurora စာသားရဲ့ အဆုံးမှာ အမြဲကပ်နေမည် */}
					<motion.span
						animate={{ opacity: [1, 1, 0, 0] }}
						transition={{
							duration: 0.8,
							repeat: Infinity,
							ease: "linear",
							times: [0, 0.5, 0.5, 1],
						}}
						className="inline-block w-[10px] h-[22px] bg-white ml-2 align-middle shadow-[0_0_15px_rgba(255,255,255,0.8)]"
					/>
				</div>
			</div>
		</div>
	);
};

export default TerminalCard;
