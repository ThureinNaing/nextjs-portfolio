import { Zap, Sparkles, Crown } from "lucide-react";
import GlowingCards, { GlowingCard } from "./lightswind/glowing-cards";

import React from "react";

const GlowCardTest = () => {
	return (
		<div>
			<GlowingCards>
				<GlowingCard glowColor="#10b981">
					<h3>Performance</h3>
					<p>Lightning-fast components...</p>
				</GlowingCard>
				<GlowingCard glowColor="#8b5cf6">
					<h3>Design</h3>
					<p>Beautiful, accessible components...</p>
				</GlowingCard>
			</GlowingCards>
			<GlowingCards
				enableGlow={true}
				glowRadius={30}
				glowOpacity={0.8}
				animationDuration={500}
				gap="3rem"
				responsive={true}
			>
				<GlowingCard glowColor="#f59e0b" className="space-y-4">
					<div className="flex items-center space-x-2">
						<Crown className="w-6 h-6 text-amber-500" />
						<h3>Premium Features</h3>
					</div>
					<p>Enterprise-grade components...</p>
				</GlowingCard>
			</GlowingCards>
		</div>
	);
};

export default GlowCardTest;
