import Image from "next/image";
import { Card, CardContent } from "./lightswind/card";
import { Code2Icon } from "lucide-react";
import { Projects } from "@/constants/index.constant";

const ShowCaseSectionn = () => {
	return (
		<section className="mt-20 min-h-screen">
			<h2 className="text-center font-extrabold text-3xl mb-10">
				Projects
			</h2>
			<div className="grid md:grid-cols-3 justify-between items-center gap-8">
				{Projects.map((project, index) => (
					<Card className="h-full bg-[#0d1117]" key={index}>
						<CardContent className="space-y-5">
							<div className="relative w-full aspect-video overflow-hidden rounded-xl">
								<Image
									src={project.img}
									alt="photo"
									fill
									sizes="100vw"
									className="w-full h-auto rounded-lg"
								/>
							</div>
							<h3 className="font-extrabold text-lg grow">
								{project.title}
							</h3>
							<p className="text-gray-400">{project.desc}</p>
							<div className="flex gap-2 items-center text-gray-400 text-xs">
								<Code2Icon size={20} />
								TECH STACK
							</div>
							<div className="flex items-center gap-2 flex-wrap gap-y-2">
								{project.technologies.map((tech, idx) => (
									<span
										key={idx}
										className="rounded-xl border border-blue-300 px-3 py-1 text-xs text-blue-300 font-bold mx-1 "
									>
										{tech}
									</span>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default ShowCaseSectionn;
