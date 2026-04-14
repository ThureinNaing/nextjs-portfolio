"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const codeLines = [
	{
		number: 1,
		content: "import { FullStackDeveloper } from '@/portfolio';",
		color: "text-purple-400",
	},
	{ number: 2, content: "", color: "" },
	{
		number: 3,
		content: "// Building scalable web products",
		color: "text-slate-500",
	},
	{
		number: 4,
		content: 'developer.build("Responsive frontend with Next.js");',
		color: "text-blue-400",
	},
	{
		number: 5,
		content: 'developer.create("Robust APIs and backend systems");',
		color: "text-emerald-400",
	},
	{
		number: 6,
		content: 'developer.deploy("Secure, production-ready applications");',
		color: "text-cyan-400",
	},
];

const EMPTY_LINES = codeLines.map(() => "");
const FULL_LINES = codeLines.map((line) => line.content);
const TYPING_START_DELAY = 350;
const CHARACTER_DELAY = 45;
const LINE_DELAY = 180;
const LOOP_DELAY = 3000;

export default function TerminalBox() {
	const prefersReducedMotion = useReducedMotion();
	const [animationState, setAnimationState] = useState(() => ({
		activeLine: 0,
		typedLines: EMPTY_LINES,
	}));
	const displayedLines = prefersReducedMotion
		? FULL_LINES
		: animationState.typedLines;
	const activeCursorLine = prefersReducedMotion
		? codeLines.length - 1
		: animationState.activeLine;

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timerIds: number[] = [];
		const schedule = (callback: () => void, delay: number) => {
			timerIds.push(window.setTimeout(callback, delay));
		};

		const startTypingCycle = () => {
			let currentLine = 0;
			let currentCharacter = 0;

			setAnimationState({
				activeLine: 0,
				typedLines: EMPTY_LINES,
			});

			const typeNextCharacter = () => {
				const line = codeLines[currentLine];

				if (!line) {
					schedule(startTypingCycle, LOOP_DELAY);
					return;
				}

				if (line.content.length === 0) {
					const lineIndex = currentLine;

					setAnimationState((previousState) => ({
						...previousState,
						activeLine: lineIndex,
					}));
					currentLine += 1;
					currentCharacter = 0;
					schedule(typeNextCharacter, LINE_DELAY);
					return;
				}

				const lineIndex = currentLine;
				const nextCharacterCount = currentCharacter + 1;

				setAnimationState((previousState) => {
					const nextLines = [...previousState.typedLines];
					nextLines[lineIndex] = line.content.slice(
						0,
						nextCharacterCount,
					);

					return {
						activeLine: lineIndex,
						typedLines: nextLines,
					};
				});

				if (nextCharacterCount < line.content.length) {
					currentCharacter += 1;
					schedule(typeNextCharacter, CHARACTER_DELAY);
					return;
				}

				currentLine += 1;
				currentCharacter = 0;

				if (currentLine < codeLines.length) {
					schedule(typeNextCharacter, LINE_DELAY);
					return;
				}

				schedule(startTypingCycle, LOOP_DELAY);
			};

			schedule(typeNextCharacter, TYPING_START_DELAY);
		};

		schedule(startTypingCycle, 0);

		return () => {
			timerIds.forEach((timerId) => window.clearTimeout(timerId));
		};
	}, [prefersReducedMotion]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="relative group max-w-2xl w-full"
		>
			{/* Background Glow Effect */}
			<div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

			<div className="relative bg-[#0d1117] rounded-lg border border-slate-800 overflow-hidden shadow-2xl">
				{/* Header / Tab Bar */}
				<div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-800">
					<div className="flex gap-2">
						<div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
						<div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
						<div className="w-3 h-3 rounded-full bg-[#27c93f]" />
					</div>

					<div className="flex items-center gap-2 px-3 py-1 bg-[#0d1117] rounded-md border border-slate-800">
						<span className="text-[10px] text-blue-400 font-mono">
							..
						</span>
						<span className="text-[11px] text-slate-300 font-mono">
							career_path.ts
						</span>
					</div>

					<div className="p-1 rounded bg-blue-500/10 border border-blue-500/20">
						<Plus className="w-3 h-3 text-blue-400" />
					</div>
				</div>

				{/* Code Editor Area */}
				<div className="p-6 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
					{codeLines.map((line, index) => (
						<div key={line.number} className="flex gap-4">
							<span className="text-slate-600 w-5 text-right select-none">
								{line.number}
							</span>
							<span
								className={`${line.color} inline-flex items-center`}
							>
								<span>{displayedLines[index]}</span>
								{activeCursorLine === index ? (
									<motion.span
										animate={
											prefersReducedMotion
												? { opacity: 1 }
												: { opacity: [1, 0] }
										}
										transition={
											prefersReducedMotion
												? undefined
												: {
														repeat: Infinity,
														duration: 0.8,
													}
										}
										className="inline-block w-2 h-5 bg-blue-400 ml-0.5 align-middle"
									/>
								) : null}
							</span>
						</div>
					))}
				</div>

				{/* Bottom Status Bar / Terminal Output */}
				<div className="border-t border-slate-800">
					<div className="flex gap-6 px-4 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800/50">
						<span className="text-slate-300 border-b-2 border-blue-500 pb-1">
							Terminal
						</span>
						<span>Output</span>
						<span>Problems</span>
					</div>

					<div className="p-4 bg-black/20">
						<div className="flex items-center gap-2 text-xs text-emerald-400 mb-2">
							<span className="text-slate-500">→</span>
							<span className="text-cyan-400">
								~/my-portfolio
							</span>
							<span className="text-slate-500">git:(</span>
							<span className="text-pink-500">main</span>
							<span className="text-slate-500">) ✗</span>
						</div>
						<p className="text-xs text-amber-200">
							<span className="font-bold">STATUS:</span>{" "}
							Full-stack systems online.
							<br />
							<span className="text-slate-400">
								Next.js, TypeScript, APIs, databases, and
								deployment workflows.
							</span>
						</p>
					</div>
				</div>

				{/* Bottom Metadata */}
				<div className="flex justify-between items-center px-4 py-1 bg-[#161b22] text-[10px] text-slate-500">
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 rounded-full bg-emerald-500" />
						<span>AI ASSISTANT ONLINE</span>
					</div>
					<div className="flex gap-3">
						<span>TypeScript</span>
						<span>Prettier</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
