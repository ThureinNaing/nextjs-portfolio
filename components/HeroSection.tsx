import TerminalBox from "./TerminalBox";

const HeroSection = () => {
	const commands = `$ git commit -m "Solving complex problems with clean code"
$ pnpm run optimize-performance
$ Success: 100% User Satisfaction & High-Speed Performance.`;
	return (
		<section>
			<div></div>
			<TerminalBox
				// 			command={`const portfolio = await buildApps();const career = await apply();if (career.offer) { life.upgrade("Success");
				// return`}
				command={commands}
			/>
			{/* <TerminalBox lines={commands} /> */}
		</section>
	);
};

export default HeroSection;
