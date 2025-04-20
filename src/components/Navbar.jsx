import React from "react";

const Navbar = ({
	onScrollToHero,
	onScrollToAbout,
	onScrollToSkills,
	onScrollToProjects,
	onScrollToContact,
}) => {
	return (
		<nav className="bg-transparent  text-white px-8 py-5 fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md">
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				{/* Shiny Silver Text Effect on Font */}
				<div
					className="text-5xl font-extrabold tracking-widest font-['Space_Grotesk'] uppercase cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-3deg hover:shadow-2xl hover:shadow-silver-500 shine-font"
					onClick={onScrollToHero}
				>
					NinjaDev
				</div>

				{/* Navigation Menu */}
				<ul className="nav-menu flex space-x-10 text-lg font-bold tracking-wide">
					{[
						{ label: "About", onClick: onScrollToAbout },
						{ label: "Skills", onClick: onScrollToSkills },
						{ label: "Projects", onClick: onScrollToProjects },
						{ label: "Contact", onClick: onScrollToContact },
					].map(({ label, onClick }) => (
						<li
							key={label}
							className="cursor-pointer transition-all duration-300 hover:text-red-500 hover:scale-110 font-bold"
							onClick={onClick}
						>
							{label}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
