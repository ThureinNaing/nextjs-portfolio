import ScrollReveal from "./lightswind/scroll-reveal";
import { SparkleParticles } from "./lightswind/sparkle-particles";
import ResumeButton from "./ResumeButton";
import TerminalBox from "./TerminalBox";

const HeroSection = () => {
	return (
		<section
			id="home"
			className="flex flex-wrap md:flex-nowrap justify-between  md:py-16 md:mt-20 scroll-mt-125  gap-8 "
		>
			<SparkleParticles
				className="absolute inset-0 z-0"
				maxParticleSize={2.5}
				minParticleSize={1}
				baseDensity={30}
				maxSpeed={2}
				minMoveSpeed={0.2}
				maxOpacity={0.8}
				customDirection="bottom"
				opacityAnimationSpeed={5}
				minParticleOpacity={0.2}
				particleColor="#ffffff"
				enableParallax={true}
				enableHoverGrab={true}
				backgroundColor="transparent"
				zIndexLevel={-1}
				clickEffect={false}
				hoverMode="repulse"
				particleCount={6}
				particleShape="star"
				enableCollisions={true}
			/>
			<div className="relative z-10">
				<ScrollReveal size="lg" textClassName="tracking-tight">
					Shaping the Future of Web Development: My Portfolio Journey
				</ScrollReveal>

				<p className="text-lg text-gray-600 mb-6">
					Hi, I&apos;m Thurein Naing, a full-stack devloper with a
					passion for crafting innovative web solutions.
				</p>
				<div className="flex flex-wrap gap-4 mt-8 items-center">
					<a
						href="#projects"
						className="inline-block bg-gray-400 hover:bg-gray-500 text-black px-4 md:px-8 py-1 md:py-3 rounded-lg transition-colors duration-300 pointer-events-auto"
					>
						View Projects
					</a>
					{/* Resume Button */}
					<ResumeButton />
				</div>
			</div>
			<TerminalBox />
		</section>
	);
};

export default HeroSection;
