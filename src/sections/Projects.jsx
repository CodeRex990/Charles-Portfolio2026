import { ArrowUpRight, Link, LucideSquareArrowOutUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
    {
       id: 1,
       title: "Neosaur Remake Webflow Website",
       description: "A high-fidelity conceptual landing page developed for a game remake initiative. Built using Webflow, the site serves as the primary digital front, showcasing collaborative design efforts and project milestones.",
       image: "/projects/project1.png", 
       tags: ["WebBuilder", "Webflow", "Web Design", "AI Collaboration"],
       link: "https://neosaur-remake.webflow.io",
       githubUrl: "#",
    },
    {
       id: 2,
       title: "BulakenyoSpots Review Platform",
       description: "A full-stack interactive review platform featuring secure user authentication and dynamic content management. Developed using React.js and Node.js with a responsive Bootstrap UI and MongoDB for scalable data storage.",
       image: "/projects/project2.png", 
       tags: ["Javascript", "Bootstrap CSS", "Node.js", "React.js", "MongoDB"],
       link: "https://bulakenyospots.up.railway.app",
       githubUrl: "#",
    },
    {
       id: 3,
       title: "Maid For You Duda Website",
       description: "A professional service-oriented mockup designed and deployed via the Duda web builder. Focused on conversion-centric layout principles and seamless cross-device responsiveness.",
       image: "/projects/project3.png", 
       tags: ["WebBuilder", "DUDA", "Web Design"],
       link: "https://beta.websiteadmin.thryv.com/preview/757953b01ce44de48eb8553f2cc44939?t=1748436827980&device=all",
       githubUrl: "#",
    },
    {
       id: 4,
       title: "Automated Game Utility",
       description: "A sophisticated automation tool engineered to optimize repetitive gameplay mechanics. Leverages OpenCV for real-time computer vision and Python with Tkinter to provide a functional, user-friendly interface.",
       image: "/projects/project5.png", 
       tags: ["OpenCV", "Tkinter UI", "Python", "Automation", "AI Collaboration"],
    //    link: "#",
    //    githubUrl: "#",
    },    
]


export const Projects = () => {
    return (
        <section className="py-32 relative overflow-hidden" id="projects">
            {/* BG */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
              <div className="container mx-auto px-6 relative z=10">
                {/* section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Works</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Work that 
                        <span className="font-serif italic font-normal text-white"> reflects progress and purpose.</span></h2>
                        <p className="text-muted-foreground animate-fade-in animation-delay-200">
                            Working in dynamic environments has strengthened my ability to respond to user needs, refine existing systems, and deliver practical solutions. Through consistent exposure to diverse requests and expectations, I’ve developed both technical confidence and a deeper understanding of user-centered design.
                        </p>
                </div>

                {/* Project GRID */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-110"  />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />

                                 {/* overlay links */}
                                 <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={project.link} target="_blank" className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"><LucideSquareArrowOutUpRight className="w-5 h-5" /></a>                                   
                                    {/* <a href={project.githubUrl} className="p-3 rounded-full glass hover:bg-primary-foreground hover:text-primary-foreground transition-all"><Link className="w-5 h-5" /></a> */}
                                 </div>
                            </div>
                            {/* content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl semi-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="px-4 py-1. rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                                ))}</div>
                            </div>
                        </div> 
                    ))}
                </div>
                {/* view all btn */} 
                <div className="text-center mt-12 animated-fade-in animation-delay-500">
                <AnimatedBorderButton >
                <ArrowUpRight className="w-5 h-5" />
                 <a href="#gallery"> View Other Projects</a>
                </AnimatedBorderButton>
                </div>
              </div>
        </section>
    )
}