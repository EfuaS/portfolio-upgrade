import SectionHeader from "../navigation-ui/SectionHeader";
import headShort from "../../assets/headshot.png";
import { CodeXml, ListCheck, Palette, PenTool } from "lucide-react";

  const coreStack = [
    {
      name: "React",
      icon: <CodeXml size={22} className="text-sky-500" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette size={22} className="text-cyan-300" />,
    },
    {
      name: "TypeScript",
      icon: <ListCheck size={22} className="text-emerald-500" />,
    },
    {
      name: "Figma",
      icon: <PenTool size={22} className="text-pink-500" />,
    },
  ];

export function Works() {
  return (
    <section id="my-works" className="grid grid-cols-3 h-screen ">
      <div className="col-span-1 grid place-content-center">
        <SectionHeader
          title="GrantSpace"
          header="My Works"
          isCentered={false}
        />
      </div>
      <div className="col-span-2 grid place-content-center ">
        <div className="glass-card h-[70vh] w-4xl">
          <div className="bg-gray-400/5 h-[75%] rounded-t-xl overflow-hidden">
            <img src={headShort} className="object-contain size-full hover:scale-115 duration-1000 ease-in-out" />
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="text-2xl  font-semibold text-secondary-text-color!">
              AI Grant Discovery Platform
            </h3>
            <p className="text-primary-text-color ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              ducimus minima libero esse dolorem iste, recusandae possimus saepe
              ab ut nobis, blanditiis quam, neque corrupti repudiandae ullam
              quasi doloremque facilis.
            </p>

            <div className="mt-4 flex flex-wrap gap-2  text-sm text-slate-200">
              {coreStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-gray-900 rounded-md px-3 py-1"
                >
                  {tech.icon}
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
