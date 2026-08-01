

import { MonitorSmartphone, Server, CircuitBoard } from "lucide-react";
import { cn } from "../../lib/utils";
import quariLogo from "../../assets/Quari.png";
import mmaLogo from "../../assets/MMA-logo.png";
import abaLogo from "../../assets/PMEPMI.jpg";
import naecLogo from "../../assets/nagies-logo.jpg";

const SECTION = {
    title: "About Me",
    sub: "Computer Engineering graduate from KNUST, currently interning as a Frontend Developer at QuariLabs. Started in IT administration, found my way to frontend, and somewhere in there started teaching robotics to Basic 4–6 students — which shaped how I build just as much as any framework did." 
}

const FEATURES = [
    {
        icon: MonitorSmartphone,
        title: "Frontend",
        desc: ["React", "JavaScript", "Tailwind CSS"]
    },
    {
        icon: Server,
        title: "Backend & infra",
        desc: ["Node/Express", "Docker", "IIS/SQL Server", "VPS deployment"]
    },
    {
        icon: CircuitBoard,
        title: "Also building with",
        desc: ["C++", "WordPress"]
    },
];

const EXPERIENCE = [
    {
        icon: naecLogo,
        title: "Nagies Angels Educational Center",
        role: "Coding & Robotics Trainer",
        date: "MAY 2026 - PRESENT",
        responsibility: "Built and taught an 8-year curriculum, Scratch through Arduino.",
    },
    {
        icon: quariLogo,
        title: "Quarilabs",
        role: "Fullstack Engineer",
        date: "NOV 2024 - MAR 2026",
        responsibility: "React and Tailwind frontend work, plus Docker, Nginx, PostgreSQL, and n8n infrastructure, WordPress development, and server/domain admin.",
    },
    {
        icon: mmaLogo,
        title: "MMALABS",
        role: "IT Administrator",
        date: "AUG 2024 - MAY 2026",
        responsibility: "LIMS hosting and database support (IIS, SQL Server), a WordPress/Elementor site redesign, and remediation of a compromised site's malicious code.",
    },
    {
        icon: abaLogo,
        title: "ABA Travel & Tours",
        role: "Wordpress Developer",
        date: "JAN 2024 - JUL 2026",
        responsibility: "Full responsive redesign of pmepmimagazines — new pages, PHP plugin edits, cPanel-hosted.",
    },
];

function FeatureCard({ icon: Icon, title, desc, index }) {
    return (
        <div
            className={cn(
                "card card-hover group",
                `stagger-${Math.min(index + 1, 5)}`
             )}
         >
            <div className="flex flex-col gap-4">
                <div className="icon-box group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-card-title">{title}</h3>
                    <div className="flex flex-wrap gap-2">
                       {desc.map((item) => (
                        <p key={item} className="badge badge-secondary text-body text-muted-foreground">{item}</p>         
                    ))}
                    </div>
                 </div>
              </div>
            </div>    
   );
}

export default function AboutSection () {
    return (
        <section className="py-3 section-muted" id="about">
            <div className="container-ds grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:items-start">
            
                <div className="section-header-left">
                    <h2 className="text-left text-section-title max-2xl">{SECTION.title}</h2>
                    <div className="divider" />
                    <p className="text-section-sub max-w-xl">{SECTION.sub}</p>
                 </div>
                <div className="flex flex-col">                  
                 <div className="section-header mb-2">
                    <h2 className="text-section-title max-2xl mb-2">Skills</h2>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((f, i) => (
                        <FeatureCard key={f.title} {...f} index={i} />
                   ))}
                 </div>
                </div>
                               
              </div>
              
              <div className="container-ds">
                <div className="section-header-left">
                        <h2 className="text-section-title max-w-2xl">Work Experience</h2>
                </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
    {EXPERIENCE.map((item) => (
        <div key={item.title} className="flex gap-4">
            <div className="icon-box group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <img src={item.icon} alt={`${item.title} logo`} className="h-full w-full" />
            </div>
            <div className="flex flex-col gap-1.5">
                <h3 className="text-card-title">{item.title}</h3>
                <h4 className="text-card-title">{item.role}</h4>
                <p className="text-body text-muted-foreground">{item.date}</p>
                <p className="text-body text-muted-foreground">{item.responsibility}</p>
            </div>
        </div>
    ))}
</div>
</div>
        </section>
    );
}