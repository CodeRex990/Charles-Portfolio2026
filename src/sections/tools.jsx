import { Key } from "lucide-react";
import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    //frontend
    {name: "HTML/CSS", level:80, category: "frontend" },
    {name: "Javascript", level:40, category: "frontend" },
    {name: "Tailwind CSS", level:25, category: "frontend" },
    {name: "React", level:25, category: "frontend" },
    {name: "Bootstrap5", level:75, category: "frontend" },
    //Backend
    {name: "Node.js", level:50, category: "backend" },
    {name: "MongoDB", level:50, category: "backend" },
    {name: "Vercel", level:50, category: "backend" },
    {name: "Render", level:50, category: "backend" },
    {name: "Cloudinary", level:50, category: "backend" },
    {name: "Git", level:50, category: "backend" },
    // {name: "Visual Studio", level:75, category: "backend" },
    //Web Builder
    {name: "Figma", level:65, category: "builder" },
    {name: "Duda", level:95, category: "builder" },
    {name: "Wordpress", level:45, category: "builder" },
    {name: "Webflow", level:50, category: "builder" },
    {name: "Wix", level:45, category: "builder" },
    //Design
    {name: "Canva", level:100, category: "design" },
    {name: "Adobe Photoshop", level:95, category: "design" },
    {name: "Adobe Illustrator", level:50, category: "design" },
    //Other
    {name: "Unity", level:15, category: "other" },
    {name: "Blender", level:20, category: "other" },
    {name: "Salesforce", level:80, category: "other" },
]

const categories = ["all", "frontend", "backend", "builder", "design", "other"]

export const Tools = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return ( 
    <section id="tools" className="py-24 px-4 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 w-96 h-90 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center" >
         <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Tools that <span className="font-serif italic font-normal text-white"> Support My Workflow.</span>
            </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button 
                key={key} 
                onClick={() => setActiveCategory(category)}
                className={cn("capitalize px-5 py-2 rounded-full transition-colors duration-300", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary")}>
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"> 
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    </section>
    )
};

