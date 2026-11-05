import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";
export default function Home () {
	return (
	<main className="pt-nav">
	   <HeroSection />
	   <AboutSection />
	   <ProjectsSection />
	</main>
    );
};