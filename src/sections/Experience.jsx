const experiences = [
  {
    period: "2025 - Present",
    role: "Web Designer - Analyst",
    company: "Eclerx",
    description:
      "Provided day-to-day support for website updates and interface adjustments across multiple client-managed platforms. Handled modification requests, ensured accurate implementation of design changes, and maintained consistency with existing brand guidelines. Strengthened communication skills through regular interaction with international clients and improved ability to translate non-technical requests into practical web solutions.",
    technologies: ["Duda", "Salesforce CRM"],
    current: false,
  },
  {
    period: "2023",
    role: "Graphic Designer",
    company: "WebTek Inc.",
    description: "On-The Job Training",
    technologies: ["Adobe Photoshop", "Canva"],
    current: false,
  },
  {
    period: "2020-2024",
    role: "Freelance Graphic Designer",
    description:
      "Created visual assets for digital platforms including social media content, layout compositions, and promotional materials. Applied design principles such as spacing, hierarchy, and color balance to ensure clarity and engagement. Developed a stronger understanding of visual communication and brand presentation across different formats.",
    technologies: ["Adobe Photoshop", "Canva"],
    current: false,
  },
];

const certifications = [
  {
    year: "2026",
    title: "Google Analytics 2026",
    issuer: "Google",
    description:
      "Understanding web analytics fundamentals, tracking user behavior, measuring traffic sources, and configuring data streams to derive actionable marketing insights.",
    technologies: ["Data Analytics", "SEO"],
    link: "https://skillshop.credential.net/b3f26ea8-e994-4474-9e49-14c00e904462",
  },
  {
    year: "2026",
    title: "Digital Marketing Certified",
    issuer: "HubSpot Academy",
    description:
      "Gained comprehensive expertise in inbound marketing strategies, content creation, SEO optimization, and social media engagement to drive organic audience growth.",
    technologies: ["HubSpot", "CRM", "SEO"],
    link: "https://app-na2.hubspot.com/academy/achievements/lz8lwq4b/en/1/charles-espanol/digital-marketing",
  },
  {
    year: "2026",
    title: "HubSpot Content Hub for Marketers",
    issuer: "HubSpot Academy",
    description:
      "Learned to build, manage, and scale content management strategies using HubSpot Content Hub, integrating CRM tools with site content for personalized user experiences.",
    technologies: ["HubSpot", "CRM"],
    link: "https://app-na2.hubspot.com/academy/achievements/v8tltsxf/en/1/charles-espanol/hubspot-content-hub-for-marketers",
  },
  {
    year: "2025",
    title: "Duda Editor 2.0 Certified",
    issuer: "Duda",
    description:
      "Proven proficiency in designing, building, and deploying responsive, high-performance websites using the Duda web creation platform and its advanced design features.",
    technologies: ["Duda", "Web Design"],
    link: "https://www.linkedin.com/in/charles-eduard-español-945230316/overlay/Certifications/1391222356/treasury?profileId=ACoAAFAfsEUBg75CFaiHoDQXVeL2eirjbkKoyCU",
  },
  {
    year: "2025",
    title: "Web Development Bootcamp 2025",
    issuer: "Udemy",
    description:
      "Built full-stack web application development skills, acquiring hands-on practice with frontend and backend technologies including HTML, CSS, JavaScript, React Router, and MongoDB.",
    technologies: ["HTML", "CSS", "JavaScript", "React Routers", "MongoDB"],
    link: "https://www.udemy.com/certificate/UC-7b2f8741-8626-4aae-9c6f-2f5aa6e3919f/",
  },
  {
    year: "2025",
    title: "Unity Essentials Pathway",
    issuer: "Unity",
    description:
      "Acquired foundational hands-on experience in 3D scene creation, core physics engines, basic scripting, and essential game development workflows within the Unity Engine.",
    technologies: ["Unity"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7350641687444025344/",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* =========================
            CAREER SECTION HEADER
        ========================== */}

        <div className="max-w-xl mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience built
            <span className="font-serif italic font-normal text-white">
              {" "}through real-world interaction.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200 text-justify">
            Working in dynamic environments has strengthened my ability to
            respond to user needs, refine existing systems, and deliver
            practical solutions. Through consistent exposure to diverse
            requests and expectations, I’ve developed both technical
            confidence and a deeper understanding of user-centered design.
          </p>

        </div>


        {/* =========================
            CAREER TIMELINE
        ========================== */}

        <div className="relative">

          {/* Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">

            {experiences.map((exp, idx) => (

              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">

                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}

                </div>


                {/* Experience Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >

                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

                    {/* Date */}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >

                      {exp.technologies.map((tech, techIdx) => (

                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =========================
            CERTIFICATIONS
        ========================== */}

        <div className="mt-32">

          {/* Certification Header */}
          <div className="max-w-xl mb-12">

            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
              Certifications
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
              Continuous
              <span className="font-serif italic font-normal text-white">
                {" "}learning.
              </span>
            </h2>

            <p className="text-muted-foreground animate-fade-in animation-delay-200 text-justify">
              Continuously expanding my knowledge through certifications and
              structured learning across web development, design, CMS
              platforms, and digital tools.
            </p>

          </div>


          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {certifications.map((cert, idx) => (

              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in flex flex-col"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >

                {/* Year */}
                <span className="text-sm text-primary font-medium">
                  {cert.year}
                </span>


                {/* Certification Title */}
                <h3 className="text-xl font-semibold mt-2">
                  {cert.title}
                </h3>


                {/* Issuer */}
                <p className="text-muted-foreground">
                  {cert.issuer}
                </p>


                {/* Description */}
                <p className="text-sm text-muted-foreground mt-4">
                  {cert.description}
                </p>


                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-4">

                  {cert.technologies.map((tech, techIdx) => (

                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* View Certificate Button */}
                <div className="mt-auto pt-6">

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg border border-primary/50 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  >
                    View Certificate ↗
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};