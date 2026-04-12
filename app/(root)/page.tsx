import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<div className="px-8 space-y-5">
			<h1 className="text-sky-600">Portfoilo</h1>
			<HeroSection />
			<FeatureCard />
		</div>
	);
}
