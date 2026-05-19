import SectionHeader from "../navigation-ui/SectionHeader";
import headShort from "../../assets/headshot.png";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData, ExperienceDTO } from "../../utils/projectsContent";
import ProjectModal from "../navigation-ui/ProjectModal";

const projects = experienceData;

gsap.registerPlugin(ScrollTrigger);

export function Works() {
  const myWorksSection = useRef(null);
  const works = useRef(null);
  const [selectedProject, setSelectedProject] = useState<ExperienceDTO | null>(
    null,
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(works.current, {
          yPercent: projects.length * -11,
          scrollTrigger: {
            trigger: myWorksSection.current,
            pin: true,
            scrub: 2,
            start: "top 15%",
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        // No GSAP animation here! GSAP automatically kills the desktop ScrollTrigger when entering this breakpoint.
      });

      return () => mm.revert();
    },
    { scope: myWorksSection },
  );

  return (
    <section
      ref={myWorksSection}
      id="my-works"
      className="grid grid-cols-1 lg:grid-cols-3 lg:h-screen lg:overflow-hidden"
    >
      <div className="lg:col-span-1 grid place-content-center lg:max-h-screen">
        <SectionHeader
          title="My Works"
          header="Portfolio of Projects"
          isCentered={false}
        />
      </div>
      <div
        ref={works}
        className="lg:col-span-2 grid place-content-center gap-28 pb-20 pt-32 h-[90vh] lg:h-auto overflow-y-scroll lg:overflow-visible"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card lg:min-h-[70vh] h-fit w-90 md:w-4xl cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-gray-400/5 h-100 rounded-t-xl overflow-hidden">
              <img
                src={headShort}
                className="object-contain size-full hover:scale-115 duration-1000 ease-in-out"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-2xl  font-semibold text-secondary-text-color!">
                {project.name}
              </h3>
              <p>{project.duration}</p>
              <p className="text-primary-text-color ">{project.about}</p>

              <div className="mt-4 flex flex-wrap gap-2  text-sm text-slate-200">
                {project.tools.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 bg-accent-color/7 text-accent-color rounded-2xl px-4 py-1"
                  >
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
