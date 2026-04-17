"use client";

import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";

export function Toaster() {
	const { toasts, dismiss } = useToast();

	const icons = {
		success: <CheckCircle2 className="text-green-400 w-5 h-5" />,
		destructive: <XCircle className="text-red-400 w-5 h-5" />,
		warning: <AlertTriangle className="text-yellow-400 w-5 h-5" />,
		info: <Info className="text-blue-400 w-5 h-5" />,
		default: <Info className="text-indigo-400 w-5 h-5" />,
	};

	return (
		<div className="fixed bottom-4 right-4 z-100 flex flex-col gap-3 w-full max-w-95">
			<AnimatePresence>
				{toasts.map(
					({ id, title, description, variant, open, action }) =>
						open && (
							<motion.div
								key={id}
								initial={{
									opacity: 0,
									y: 20,
									scale: 0.9,
									x: 20,
								}}
								animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
								exit={{ opacity: 0, scale: 0.9, x: 20 }}
								className="relative group overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 shadow-2xl flex gap-3 items-start"
							>
								{/* Icon Section */}
								<div className="mt-0.5">
									{icons[variant || "default"]}
								</div>

								{/* Text Section */}
								<div className="flex-1">
									{title && (
										<h3 className="text-white font-bold text-sm tracking-tight">
											{title}
										</h3>
									)}
									{description && (
										<p className="text-white/60 text-xs mt-1 font-mono leading-relaxed">
											{description}
										</p>
									)}
									{action && (
										<div className="mt-3">{action}</div>
									)}
								</div>

								{/* Close Button */}
								<button
									onClick={() => dismiss(id)}
									className="text-white/20 hover:text-white transition-colors"
								>
									<X size={16} />
								</button>

								{/* Bottom Progress Bar Decor (Optional) */}
								<div className="absolute bottom-0 left-0 h-0.5 bg-primary/30 w-full" />
							</motion.div>
						),
				)}
			</AnimatePresence>
		</div>
	);
}
