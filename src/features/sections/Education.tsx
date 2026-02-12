import {
  ArrowUpRight,
  Award,
  GraduationCap,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import SectionHeader from "../navigation-ui/SectionHeader";

export function Education() {
  const timeline = [
    {
      title: "BSc Management Information Systems",
      institution: "Ashesi University",
      duration: "2018 - 2022",
      description: `With a focus on software development, business analytics and project management, this is where my spark for software that
         meets real-world needs was ignited. I worked with tools like Python, PHP, JavaScript, Apache, MYSQL to build my first full stack ecommerce website targeted at providing
         a digital storefront for my Aunt's small Fabrics & Cosmetics shop.`,
      link: "https://github.com/EfuaS/neighbourcare",
      icon: GraduationCap,
      tone: "from-teal-400 via-cyan-400 to-blue-500",
      noteTilt: "-rotate-[1deg]",
    },
    {
      title: "National Service - Junior Software Developer",
      institution: "Accede Ghana",
      duration: "2022 - 2023",
      description: `In Ghana, all graduates are required to complete a year of national service, and I had the opportunity
       to serve as a Junior Software Developer at Accede Ghana.
        During this time, I contributed to various software development projects across several industries, including FinTech, Community Outreach and Real Estate,
         gaining hands-on experience in coding, debugging, and collaborating with a team of developers.`,
      link: null,
      icon: Workflow,
      tone: "from-emerald-400 via-teal-300 to-cyan-400",
      noteTilt: "rotate-[1deg]",
    },
    {
      title: "Meta Certified Frontend Developer",
      institution: "Meta",
      duration: "2023",
      description: `Certified in modern frontend practice: HTML, CSS, JavaScript, and React. Proof that I keep pace with the craft as it evolves.`,
      link: "https://coursera.org/share/86ef3b4defd4235ad55a1aeac97b9478",
      icon: Award,
      tone: "from-amber-300 via-orange-300 to-pink-400",
      noteTilt: "-rotate-[2deg]",
    },
    {
      title: "React Software Engineer",
      institution: "Accede Ghana",
      duration: "2019 - Present",
      description: `Working as part of the JavaScript team, to help deliver high-quality software solutions to clients across various industries.
      I have been involved in the development of several projects across various sectors. I have contributed to company growth by training and mentoring interns
      and other National Service Personnel.`,
      link: null,
      icon: Sparkles,
      tone: "from-fuchsia-300 via-purple-300 to-indigo-300",
      noteTilt: "rotate-[2deg]",
    },
    {
      title: "In-Progress - Microsoft Azure Developer",
      institution: "Microsoft",
      duration: "Expected March 2026",
      description: `Currently pursuing the Microsoft Azure Developer certification, which will further enhance my skills in cloud computing and Azure services.
       This certification is expected to aid me in my journey to be a Consultant who is able to advise clients on solution from the dev stage 
       to deployment and maintenance.`,
      link: null,
      icon: Rocket,
      tone: "from-sky-300 via-teal-200 to-lime-300",
      noteTilt: "-rotate-[1deg]",
    },
  ];

  return (
    <section className="pt-24 px-6 max-w-[80vw] mx-auto">
      <SectionHeader header="My Journey" title="Education & Experience" />

      {/* Timeline of Developer Journey */}
      <div className="relative mt-12 pr-20">
        {/* Faded edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-50 w-28 bg-linear-to-r from-[#0f172b] via-[#0f172b]/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-50 w-28 bg-linear-to-l from-[#0f172b] via-[#0f172b]/90 to-transparent" />

        <div className="relative overflow-x-auto pb-6  pl-24">
          {/* Timeline note card */}
          <div className="flex gap-6 md:gap-8 min-w-full snap-x snap-mandatory">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="relative snap-start"
                  data-aos="fade-up"
                  data-aos-delay={index * 250}
                >
                  <div className="flex flex-col items-start gap-4 relative">
                    <div className="relative">
                      {/* Timeline circular steps pinned with icons */}
                      <div className="size-12 rounded-full bg-linear-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-400/40">
                        <Icon className="text-slate-900" size={22} />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-12 h-6 w-px bg-linear-to-b from-teal-300/60 via-cyan-200/80 to-transparent" />
                    </div>

                    {/* Timeline note cards */}
                    <div
                      className={`relative bg-slate-950/85 ${item.noteTilt} rounded-lg px-4 py-4 shadow-2xl shadow-teal-500/25 border border-white/5 min-w-72 max-w-sm overflow-hidden breeze-card hover-jiggle`}
                      style={{ animationDelay: `${index * 0.4}s` }}
                    >
                      <div
                        className={`absolute inset-0 opacity-65 bg-linear-to-br ${item.tone}`}
                      />
                      {/* Dark overlay on card bright colors to enhance readability */}
                      <div className="absolute inset-0 bg-slate-950/60" />
                      <div className="absolute top-1 left-4 h-8 w-6 bg-white/5 rotate-6 blur-[2px]" />
                      {/* Note card content */}
                      <div className="relative space-y-1 mt-5">
                        <h3 className="text-lg text-center font-semibold text-secondary-text-color! leading-snug">
                          {item.title}
                        </h3>
                        <div className="flex justify-between pt-2">
                          <p className="text-xs text-slate-200/90">
                            {item.institution}{" "}
                          </p>
                          <p className="text-xs text-slate-300 font-semibold">
                            {item.duration}
                          </p>
                        </div>

                        <p
                          className="mt-3 text-sm leading-relaxed"
                          style={{ color: "var(--color-secondary-text-color)" }}
                        >
                          {item.description}
                        </p>

                        {/* Note bottom Action Link */}
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-xs text-accent-color mt-3"
                          >
                            Check it out
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
