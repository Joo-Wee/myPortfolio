import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import heroImg from "../../assets/circuitImg.png";

const HERO = {
    eyebrow: "Hi, I'm",
    headline: "Joo Manasseh",
    headlineAlt: "I build systems end-to-end, interface down to infrastructure",
    sub: "Computer Engineering foundation, real delivery today, AI features I'm actively building toward.",
    primaryCTA: { label: "View Projects", href: "/projects"},
    secondaryCTA: { label: "Let's Talk", href: "/contact"},
    badges: ["Design to real product", "Tools people use", "Infra, both worlds", "Teaching complexity"],
};


export default function HeroSection () {
    return (
        <section
            className="py-3 section bg-glow bg-cover overflow-hidden relative" 
            style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: "20% 49%" }}
            id="home"
        >
        <div
            aria-hidden
            className="pointer-events-none absolute -top-26 -right-32 w-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "hsl(var(--ds-brand-primary) / 0.4)" }}
         />
         
       <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: "hsl(var(--ds-brand-secondary) / 0.4)" }}
      />
         
         <div className="container-ds relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-var(--ds-nav-height))] py-2">
            
                <div className="flex flex-col gap-6 animate-fade-up">
                
                    <div className="flex items-center gap-2">
                        <span className="badge bagde-primary">{HERO.eyebrow}</span>
                     </div>
                     
                     <h1 className="text-display">
                        {HERO.headline}{" "}
                        <span className="text-5xl text-gradient block pt-6 sm:inline-block">
                            {HERO.headlineAlt}
                        </span>
                      </h1>
                      
                      <p className="text-hero-sub">{HERO.sub}</p>
                      
                  <div className="flex flex-wrap gap-2">
                    {HERO.badges.map((b) => (
                        <span key={b} className="badge badge-secondary">{b}</span>
                     ))}
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Link to={HERO.primaryCTA.href}>
                        <Button className="btn-primary">
                            {HERO.primaryCTA.label}
                            <ArrowRight className="h-4 w-4" />
                         </Button>
                     </Link>
                     
                     <Link to={HERO.secondaryCTA.href}>
                        <Button className="btn-primary">
                            {HERO.secondaryCTA.label}
                            <ChevronRight className="h-4 w-4" />
                         </Button>
                     </Link>
                 </div>
                 
              </div>
              
              <div className="relative flex items-center justify-center animate-slide-in-right">
              
              
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                
                
                    <div
                        className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]"
                        style={{
                            background: "conic-gradient(from 0deg, hsl(var(--ds-brand-primary)/0.1), transparent, hsl(var(--ds-brand-primary)/0.1))",
                            }}
                       />
                       
                       <div
                        className="absolute inset-8 rounded-full animate-glow-pulse"
                        style={{
                            background:
                                "radial-gradient(circle, hsl(var(-ds-brand-primary)/0.25), hsl(var(-ds-brand-primary)/0.05))",
            }}
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center
                         text-4xl font-bold font-display text-primary-foreground"
               style={{
                background:
                    "linear-gradient(135deg, hsl(var(--ds-brand-primary)), hsl(var(--ds-brand-primary-light)))",
                   boxShadow: "var(--ds-shadow-glow)",
                  }}
                 >
                 
                 DS
                 </div>
               </div>
               
            {[
                { top: "10%", left: "5%", delay: "0s", label: "React" },
                { top: "75%", left: "5%", delay: "0.8s", label: "Next.js" },
                { top: "10%", right: "5%", delay: "0.4s", label: "Tailwind" },
                { top: "75%", right: "5%", delay: "1.2s", label: "TS" },
            ].map((node) => (
                <div
                    key={node.label}
                    className="absolute card-glass px-3 py-1.5 text-xs font-semibold
                                text-foreground animate-float"
                    style={{
                        top: node.top,
                        left: node.left,
                        right: node.right,
                        animationDelay: node.delay,
                       }}
                   >
                        {node.label}
                      </div>
                    ))}
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
            
          </section>
);
}