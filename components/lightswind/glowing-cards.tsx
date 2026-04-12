"use client";

import React, { useState } from "react";
import { cn } from "../../lib/utils";

export interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
	glowColor?: string;
	mousePos?: { x: number; y: number };
	isHovered?: boolean;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
	children,
	className,
	glowColor = "#3b82f6",
	mousePos = { x: 0, y: 0 },
	isHovered = false,
	...props
}) => {
	return (
		<div
			className={cn(
				"relative flex flex-col rounded-xl overflow-hidden p-px",
				className,
			)}
			{...props}
		>
			<div
				className={cn(
					"absolute inset-0 pointer-events-none transition-opacity duration-500 bg-slate-800",
					isHovered ? "opacity-100" : "opacity-100",
				)}
				style={{
					background: isHovered
						? `radial-gradient(circle 12rem at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 100%), #1e293b`
						: "#1e293b",
				}}
			/>

			<div className="relative flex flex-col h-full w-full bg-[#0d1117] rounded-[inherit] p-8 z-10">
				<div
					className={cn(
						"absolute inset-0 pointer-events-none transition-opacity duration-500",
						isHovered ? "opacity-100" : "opacity-0",
					)}
					style={{
						background: `radial-gradient(circle 15rem at ${mousePos.x}px ${mousePos.y}px, ${glowColor}10, transparent 80%)`,
					}}
				/>

				<div className="relative z-20 h-full flex flex-col">
					{children}
				</div>
			</div>
		</div>
	);
};

export const GlowingCards: React.FC<{
	children: React.ReactNode;
	className?: string;
}> = ({ children, className }) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	const handleMouseMove = (e: React.MouseEvent, index: number) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePos({
			x: e.clientX - rect.left,
			y: e.clientY - rect.top,
		});
		setHoveredIndex(index);
	};

	return (
		<div className={cn("grid w-full", className)}>
			{React.Children.map(children, (child, index) => {
				if (React.isValidElement<GlowingCardProps>(child)) {
					return React.cloneElement(child, {
						onMouseMove: (e: React.MouseEvent) =>
							handleMouseMove(e, index),
						onMouseLeave: () => setHoveredIndex(null),
						isHovered: hoveredIndex === index,
						mousePos: mousePos,
					});
				}
				return child;
			})}
		</div>
	);
};
