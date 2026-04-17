"use client";

import Link from "next/link";
import SparkleNavbar from "./lightswind/sparkle-navbar";
import { useEffect, useState } from "react";

const Navbar = () => {
	// track if the user has scrolled down the page
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		// create an event listener  when the user scrolls
		const handleScroll = () => {
			// check if the user has scrolled down at least 10px
			// if they have, set the state to true
			const isScrolled = window.scrollY > 10;
			setScrolled(isScrolled);
		};

		// add the event listener to the window
		window.addEventListener("scroll", handleScroll);

		// cleanup the event listener when the component is unmounted
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const offset = 80; // Navbar height အတွက် နေရာချန်တာပါ
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};
	return (
		<header
			className={`flex justify-between items-center md:px-16 py-6  text-white fixed w-full left-1/2  -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${scrolled ? "top-0 bg-black" : "md:top-1 top-0 bg-transparent "}`}
		>
			<h1 className="text-sm md:text-xl font-semibold  text-mauve-400 italic">
				Thurein Naing
			</h1>
			<nav className="hidden md:block">
				<SparkleNavbar
					items={[
						"Home",
						"Experience",
						"Projects",
						"Skills",
						"About",
					]}
					color="#1E90FF"
				/>
			</nav>
			<Link
				href="#about"
				onClick={(e) => scrollToSection(e, "about")}
				className="bg-white text-black text-sm md:text-lg px-3 py-1 rounded italic cursor-pointer"
			>
				Contact me
			</Link>
		</header>
	);
};

export default Navbar;
