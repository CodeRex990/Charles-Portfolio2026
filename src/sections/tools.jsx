import { GitBranch, Key } from "lucide-react";
import { useState } from "react";
import {cn} from "@/lib/utils";
import { FaBlender, FaBootstrap, FaHtml5, FaNodeJs, FaReact, FaSalesforce, FaWix } from "react-icons/fa";
import { DiIllustrator, DiJavascript, DiMongodb, DiNodejs, DiPhotoshop } from "react-icons/di";
import { BsJavascript, BsUnity, BsWordpress } from "react-icons/bs";
import { RiJavascriptFill } from "react-icons/ri";
import { SiBlender, SiCanva, SiCloudinary, SiRender, SiTailwindcss } from "react-icons/si";
import { CgVercel, CgWebsite } from "react-icons/cg";
import { GiBlender, GiTBrick } from "react-icons/gi";
import { FiFigma } from "react-icons/fi";
import { FaWebflow } from "react-icons/fa6";

// 0% – 25%: Familiar / Learning / Active Learning

// 26% – 50%: Intermediate / Functional

// 51% – 75%: Proficient / Production-Ready /

// 76% – 100%: Advanced / Deep Understanding / High Proficiency / Core Workflow

const skills = [
    //frontend
    {name: "HTML/CSS", level:80, category: "frontend", icon:<FaHtml5 />, label:"High Proficiency", },
    {name: "Javascript", level:40, category: "frontend", icon:<RiJavascriptFill />, label:"Active Learning", },
    {name: "Tailwind CSS", level:25, category: "frontend", icon:<SiTailwindcss />, label:"Active Learning", },
    {name: "React", level:25, category: "frontend", icon:<FaReact />, label:"Active Learning", },
    {name: "Bootstrap5", level:75, category: "frontend", icon:<FaBootstrap />, label:"Proficient", },
    //Backend
    {name: "Node.js", level:50, category: "backend", icon:<FaNodeJs />, label:"Active Learning", },
    {name: "MongoDB", level:45, category: "backend", icon:<DiMongodb />, label:"Familiar", },
    {name: "Vercel", level:45, category: "backend" , icon:<CgVercel />, label:"Familiar", },
    {name: "Render", level:45, category: "backend", icon:<SiRender />, label:"Familiar", },
    {name: "Cloudinary", level:45, category: "backend", icon:<SiCloudinary />, label:"Familiar", },
    {name: "Git", level:50, category: "backend", icon:<GitBranch />, label:"Intermediate", },
    // {name: "Visual Studio", level:75, category: "backend" },
    //Web Builder
    {name: "Figma", level:40, category: "builder", icon:<FiFigma />, label:"Intermediate",  },
    {name: "Duda", level:95, category: "builder", icon:<CgWebsite />, label:"Core Workflow",  },
    {name: "Wordpress", level:35, category: "builder", icon:<BsWordpress />, label:"Intermediate",  },
    {name: "Webflow", level:50, category: "builder", icon:<FaWebflow />, label:"Intermediate",  },
    {name: "Wix", level:35, category: "builder", icon:<FaWix />, label:"Intermediate",  },
    //Design
    {name: "Canva", level:100, category: "design", icon:<SiCanva />, label:"High Proficiency", },
    {name: "Adobe Photoshop", level:99, category: "design", icon:<DiPhotoshop />, label:"High Proficiency", },
    {name: "Adobe Illustrator", level:50, category: "design", icon:<DiIllustrator />, label:"Intermediate", },
    //Other
    {name: "Unity", level:15, category: "other", icon:<BsUnity />, label:"Familiar", },
    {name: "Blender", level:20, category: "other", icon:<SiBlender />, label:"Familiar", },
    {name: "Salesforce", level:80, category: "other", icon:<FaSalesforce />, label:"Core Workflow", },
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
                Stack & Proficiency <span className="font-serif italic font-normal text-white"> Matrix.</span>
            </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200 text-center mx-auto max-w-3xl mb-16">
            Transparency is key to effective collaboration. Here is a real-time look at my technical comfort levels, ranging from core competencies used in daily production to emerging technologies I am actively integrating into my workflow.</p>
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
                    <div className="text-left mb-4 flex ">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                        <h4 className="px-3 flex items-center">{skill.icon}</h4>
                    </div>
                    
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
     
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%: {skill.label}</span>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    </section>
    )
};

