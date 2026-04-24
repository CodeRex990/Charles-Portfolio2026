import { LanguageIcon } from "@heroicons/react/16/solid"
import { Code2, Lightbulb, LucideImage, Palette, Rocket, UserRoundCheck, Users, Zap } from "lucide-react"

const highlights = [
{   icon: Rocket,
    title: "Performance",
    description: 
    "Delivers consistent and structured outputs using reliable tools and workflows.",},
{   icon: Users,
    title: "Collaboration",
    description: 
    "Works effectively with diverse teams and adapts to different communication styles.",},
{   icon: Lightbulb,
    title: "Growth Mindset",
    description: 
    "Continuously learning and refining both design and development skills.",},
{   icon: LanguageIcon,
    title: "Communication",
    description: 
    "Experienced in real-time client collaboration, translating complex requests into polished web modifications.",},
{   icon: Palette,
    title: "Design Growth",
    description: 
    "Developing a strong eye for layout, spacing, and modern interface trends.",},
{   icon: Zap,
    title: "Adaptability",
    description: 
    "Quick to adjust in fast-paced environments and evolving project needs.",},
]


export const About = () => {
    return (
        <section className="py-32 relative overflow-hidden" id="about">
            <div className="container mx-auto px-6 relative z=10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building A Future,
                        <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-justify">
                        <p>With over a year of professional experience in the tech industry, I have developed a unique perspective on how users interact with the web. My background involves real-time collaboration with North American clients, helping them refine and modify their digital presence. This experience has strengthened my ability to understand user needs, interpret client expectations, and translate them into practical design solutions.</p>
                        <p>I’m currently focused on advancing as a front-end developer with a growing emphasis on design. I rely on structured workflows, documentation, and proven tools to build clean and maintainable interfaces. While I continue to develop confidence in writing from scratch, I prioritize delivering results through efficient and scalable approaches.</p>
                    </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My goal is to bridge the gap between visual design and technical execution—creating work that is not only functional, but thoughtfully crafted.
                            </p>
                        </div>
                            </div>

                    {/* right column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                                </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm muted-foreground">{item.description}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}