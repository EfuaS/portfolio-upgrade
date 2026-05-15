import SectionHeader from "../navigation-ui/SectionHeader";
import headShort from "../../assets/headshot.png";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "../../utils/projectsContent";

const projects = experienceData;

gsap.registerPlugin(ScrollTrigger);

export function Works() {
  const myWorksSection = useRef(null);
  const works = useRef(null);

  useGSAP(
    () => {
      gsap.to(works.current, {
        yPercent: projects.length * -11,
        scrollTrigger: {
          trigger: myWorksSection.current,
          pin: true,
          scrub: 2,
          start: "top 15%",
        },
      });
    },
    { scope: myWorksSection },
  );

  return (
    <section
      ref={myWorksSection}
      id="my-works"
      className="grid grid-cols-3 h-screen overflow-hidden"
    >
      <div className="col-span-1 grid place-content-center max-h-screen">
        <SectionHeader
          title="My Works"
          header="Portfolio of Projects"
          isCentered={false}
        />
      </div>
      <div
        ref={works}
        className="col-span-2 grid place-content-center gap-28 pb-20"
      >
        {projects.map((project) => (
          <div key={project.id} className="glass-card min-h-[70vh] h-fit w-4xl" >
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
              <p className="text-primary-text-color ">
                {project.about}
              </p>

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
    </section>
  );
}
