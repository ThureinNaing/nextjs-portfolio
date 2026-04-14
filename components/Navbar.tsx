import Link from "next/link";
import SparkleNavbar from "./lightswind/sparkle-navbar";

const Navbar = () => {
	return (
		<header className="flex justify-between items-center md:px-8  text-white`">
			<h1 className="text-xl font-semibold text-mauve-400 italic">
				Thurein Naing
			</h1>
			<nav className="hidden md:block">
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
			</nav>
			<Link
				href="#contact"
				className="bg-white text-black px-3 py-1 rounded italic cursor-pointer"
			>
				Contact me
			</Link>
		</header>
	);
};

export default Navbar;
