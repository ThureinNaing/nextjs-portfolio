import { abilities } from "@/constants/index.constant";
import { GlowingCards, GlowingCard } from "./lightswind/glowing-cards";

const FeatureCard = () => {
	return (
		<section className="mt-30">
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter italic">
					Why Work With Me
				</h2>
				<p className="text-slate-400 max-w-lg mx-auto leading-relaxed italic">
					Bringing{" "}
					<span className="text-blue-400 font-medium">passion</span>,
					<span className="text-amber-400 font-medium">
						{" "}
						adaptability
					</span>
					, and
					<span className="text-emerald-400 font-medium">
						{" "}
						quality
					</span>{" "}
					to every project.
				</p>
			</div>
			<div className="w-full   py-12 relative z-20 scroll-mt-50">
				<GlowingCards className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
					{abilities.map(
						({ title, desc, icon: Icon, iconColor, bgColor }) => {
							const glowColor = iconColor.includes("blue")
								? "#3b82f6"
								: iconColor.includes("emerald")
									? "#10b981"
									: "#f59e0b";

							return (
								<GlowingCard
									key={title}
									glowColor={glowColor}
									className="h-full w-full min-h-64"
								>
									<div
										className={`size-14 shrink-0 flex items-center justify-center rounded-full ${bgColor} mb-4`}
									>
										<Icon
											className={`size-7 ${iconColor}`}
										/>
									</div>

									<div className="flex flex-col grow">
										<h3 className="text-white text-2xl font-semibold leading-tight">
											{title}
										</h3>
										<p className="text-slate-400 text-lg leading-relaxed mt-3">
											{desc}
										</p>
									</div>
								</GlowingCard>
							);
						},
					)}
				</GlowingCards>
			</div>
		</section>
	);
};

export default FeatureCard;
