import { useRef } from "react";
import { useInView } from "../../hooks/useInView";
import { cn } from "../../lib/utils";
import froskaPic from "../../assets/froska_screenshot.png";
import typingPic from "../../assets/typing-assessment.png";
import curriculumPic from "../../assets/curriculum.png";

const SECTION = {
    title: "Projects",
    sub: "A collection of projects I have built and contributed to."
};

const CASE_PROJECTS = [
    {
        icon: froskaPic,
        title: "Froska",
        desc: "A full prompt-to-chain pipeline that lets users prove ownership of AI-generated art — shipped and live.",
        stack: ["NextJS", "Tailwind", "Wagmi", "OpenAI API"],
    },
    {
        icon: typingPic,
        title: "Typing Assessment Tool",
        desc: "Built to fill a gap in offline classroom tools — now live and running on the school's network.",
        stack: ["React", "Express", "NodeJS"],
    },
    {
        icon: curriculumPic,
        title: "Robotics Curriculum",
        desc: "A full 8-year curriculum, Basic 1 through 8, built to fill the gap of no structured path — designed and taught.",
        stack: ["Scratch", "Python", "Arduino C++"],
    },
];


const FUNDAMENTALS = [
    {
        title: "Tic-Tac-Toe",
        desc: "Classic two-player game, rebuilt from an earlier vanilla JavaScript version to learn state management and win-condition logic.",
        stack: ["React"],
    },
    {
        title: "Weather App",
        desc: "Look up any city's current weather and save favorites that persist across visits, built to practice API integration and localStorage.",
        stack: ["React", "OpenWeatherMap API", "localStorage"],
    },
    {
        title: "Task Tracker",
        desc: "A full create, edit, complete, and delete task manager with status filtering, built to practice CRUD patterns, immutable state updates, and localStorage persistence for both tasks and filter state.",
        stack: ["React", "OpenWeatherMap API", "localStorage"],
    },
];

function ProjectCard({ icon, title, desc, stack, index }) {
    return (
        <div
            className={cn(
                "card card-hover group p-0",
                `stagger-${Math.min(index + 1, 5)}`
             )}
         >
            <div className="flex flex-col gap-4">
                <div className="relative aspect-video overflow-hidden rounded-md">
                    <img 
                    src= {icon}
                    alt= {title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col gap-2 p-6 md:p-8">
                    <h3 className="text-card-title">{title}</h3>
                    <p className="text-body text-muted-foreground">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                       {stack.map((item) => (
                        <p key={item} className="badge badge-secondary text-body text-muted-foreground">{item}</p>         
                    ))}
                    </div>
                 </div>
              </div>
            </div>    
   );
}

export default function ProjectsSection() {
  const ref   = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="section relative overflow-hidden"
      id="stats"
    >
      {/* Full-width brand-coloured strip */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(var(--ds-brand-primary)), transparent 70%)",
        }}
      />

      <div className="container-ds relative z-10">
        <div className={`section-header fade-up ${inView ? "in-view" : ""}`}>
          <h2 className="text-section-title max-w-xl">{SECTION.title}</h2>
          <p className="text-section-sub max-w-md">{SECTION.sub}</p>
        </div>
        <div className="section-header-left mb-6">
           <h2 className="text-section-title max-2xl mb-2">Case Projects</h2>
         </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
            {CASE_PROJECTS.map((f, i) => (
                        <ProjectCard key={f.title} {...f} index={i} />
                   ))}
        </div>
        
        <div className="section-header-left mb-6">
            <h2 className="text-section-title max-2xl mt-8">Fundamentals</h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
           {FUNDAMENTALS.map((item) => (<div
            className={cn(
                "card card-hover group p-2",
                `stagger-${Math.min(item + 1, 5)}`
             )}
         >
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 p-6 md:p-8">
                    <h3 className="text-card-title">{item.title}</h3>
                    <p className="text-body text-muted-foreground line-clamp-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                       {item.stack.map((item) => (
                        <p key={item} className="badge badge-secondary text-body text-muted-foreground">{item}</p>         
                    ))}
                    </div>
                 </div>
              </div>
            </div>))}
            </div>
         </div>
      </section>
      );
}