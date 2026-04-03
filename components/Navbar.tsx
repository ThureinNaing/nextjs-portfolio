import Link from "next/link";
import SparkleNavbar from "./lightswind/sparkle-navbar";

const Navbar = () => {
	// const navLinks = [
	// 	{ name: "Home", href: "#home" },
	// 	{ name: "About", href: "#about" },
	// 	{ name: "Projects", href: "#projects" },
	// 	{ name: "Experience", href: "#experience" },
	// 	{ name: "Skills", href: "#skills" },
	// ];
	return (
		<header className="flex justify-between items-center  bg-gray-800 text-white`">
			<h1 className="text-xl font-semibold text-mauve-400">
				Thurein Naing
			</h1>
			<SparkleNavbar
				items={[
					"Home",
					"About",
					"Projects",
					"Experience",
					"Skills",
					"Contact",
				]}
				color="#1E90FF"
			/>
			<Link
				href="#contact"
				className="bg-white text-black px-3 py-1 rounded"
			>
				Contact me
			</Link>
		</header>
	);
};

export default Navbar;
