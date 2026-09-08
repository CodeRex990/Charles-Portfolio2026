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
                        <p>With 1.5 years of professional experience in the tech industry, I have developed a practical understanding of how websites are built, maintained, and experienced by users. In my current role, I work directly with North American clients, helping implement website updates, content changes, and design adjustments while translating their requirements into functional digital experiences.</p>
                        <p>My experience extends beyond web design. I work with HTML, CSS, and JavaScript, with hands-on exposure to React and modern web development workflows. I also have experience with CMS and website-building platforms such as Duda and WordPress, alongside tools and practices related to SEO, Google Analytics, UI design, and content management.</p>
                    </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                               I'm continuing to strengthen my front-end development capabilities while expanding into CMS, CRM, analytics, and digital experience platforms. My goal is to become a versatile web professional who can contribute across both the technical and creative sides of the web.
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