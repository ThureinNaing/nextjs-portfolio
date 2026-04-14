import AboutMe from "@/components/AboutMe";
import { ExperienceSection } from "@/components/ExperienceSection";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";
import ShowCaseSectionn from "@/components/ShowCaseSection";
import TechStack from "@/components/TechStack";

export default function Home() {
	return (
		<div className="md:px-8 space-y-5 ">
			<h1 className="text-sky-600">Portfoilo</h1>
			<HeroSection />
			<FeatureCard />
			<ExperienceSection />
			<AboutMe />
			<TechStack />
			<ShowCaseSectionn />
		</div>
	);
}
