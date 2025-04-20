import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sumangal from "../../src/assets/sumangal.webp";
import cryptoverse from "../../src/assets/cryptoverse.webp";
import parkme from "../../src/assets/parkme.webp";

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [inView, setInView] = useState(false); // Lazy loading state
	const projectRefs = useRef([]);

	// Initialize AOS
	useEffect(() => {
		AOS.init({ duration: 800, once: true });

		// Set up lazy loading with IntersectionObserver
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true); // Once in view, load image
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Observe all project elements
		projectRefs.current.forEach((ref) => observer.observe(ref));

		return () => observer.disconnect(); // Cleanup observer
	}, []);

	const projects = [
		{
			title: "Sumangal Metrimony",
			description:
				"Sumangal Matrimony is a dedicated matchmaking platform built to simplify and personalize the partner search experience. Designed with modern UI/UX principles and robust backend logic, it offers secure registration, smart filtering, and user-centric profiles tailored to the cultural preferences of Indian families.",
			link: "https://sumangalglobal.com/",
			image: sumangal,
		},
		{
			title: "Crypto Verse",
			description:
				"Crypto Verse is a real-time cryptocurrency dashboard that fetches live data using RapidAPI. It features dynamic price tracking, market stats, and visual insights for top coins, offering users a smooth and informative experience for crypto analysis.",
			link: "#",
			image: cryptoverse,
		},
		{
			title: "Park.Me",
			description:
				"Park.me is a smart vehicle parking and management system developed using PHP and MySQL. It streamlines parking space allocation, vehicle entry/exit tracking, and slot availability in real-time. The system supports both admin and user roles for better control and visibility over vehicle movement and parking status.",
			link: "https://github.com/Deepkhuman/Park.me",
			image: parkme,
		},
	];

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + projects.length) % projects.length
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
	};

	const getRelativeIndex = (index) => {
		if (index === currentIndex) return 0;
		if (index === (currentIndex + 1) % projects.length) return 1;
		if (index === (currentIndex - 1 + projects.length) % projects.length)
			return -1;
		return null;
	};

	return (
		<section
			className="bg-black text-white py-24 flex justify-center items-center flex-col"
			data-aos="fade-up"
			data-aos-delay="200"
		>
			{/* Projects Header */}
			<div
				className="text-center mb-12"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				<h2 className="text-4xl font-bold text-white">My Projects</h2>
				<p className="text-lg text-gray-400 mt-2">A glimpse of my work</p>
			</div>

			<div className="relative w-[100%] max-w-4xl h-[400px]">
				{/* Navigation Buttons */}
				<button
					onClick={handlePrev}
					className="absolute left-0 top-1/2 -translate-y-1/2 z-20 !bg-gray-800 p-3 rounded-full text-white text-2xl hover:bg-gray-700"
				>
					‹
				</button>
				<button
					onClick={handleNext}
					className="absolute right-0 top-1/2 -translate-y-1/2 z-20 !bg-gray-800 p-3 rounded-full text-white text-2xl hover:bg-gray-700"
				>
					›
				</button>

				{/* Cards Layered with Positioning */}
				<div className="relative w-full h-full">
					{projects.map((project, index) => {
						const relativeIndex = getRelativeIndex(index);
						if (relativeIndex === null) return null;

						let style = "";
						if (relativeIndex === 0) {
							style =
								"z-30 scale-100 blur-0 opacity-100 left-1/2 -translate-x-1/2";
						} else if (relativeIndex === 1) {
							style =
								"z-20 scale-90 blur-sm opacity-60 left-[75%] -translate-x-1/2";
						} else if (relativeIndex === -1) {
							style =
								"z-10 scale-90 blur-sm opacity-60 left-[25%] -translate-x-1/2";
						}

						return (
							<a
								href={project.link}
								key={index}
								ref={(el) => (projectRefs.current[index] = el)}
								className={`project-card absolute top-0 w-[300px] h-[350px] transition-all duration-500 ease-in-out transform ${style} bg-gray-900 rounded-xl shadow-xl p-6 flex flex-col justify-center items-center hover:scale-105 hover:shadow-2xl hover:border-1 hover:border-white cursor-pointer`}
								style={{
									backgroundImage: inView ? `url(${project.image})` : "none",
									backgroundSize: "cover",
									backgroundPosition: "center",
								}}
							>
								<h3 className="text-xl font-bold hover:blur-2xl text-white text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 group-hover:hidden">
									<p className="flex w-70 justify-center">{project.title}</p>
								</h3>

								<p className="mt-2 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center">
									{project.description}
								</p>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
