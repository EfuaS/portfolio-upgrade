import longHeadShot from "../../assets/headshot.png";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="h-[80vh] grid grid-cols-1  lg:grid-cols-2  items-center">
        {/* Mobile view smaller image */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="md:hidden flex items-center justify-center mb-6"
        >
          <div className="size-full rounded-full shadow-xl overflow-hidden">
            <img
              src={longHeadShot}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tablet view medium sized image */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="hidden md:flex lg:hidden items-center justify-center mb-6"
        >
          <div className="size-1/2 rounded-full shadow-xl overflow-hidden">
            <img
              src={longHeadShot}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Side - Content */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col justify-center space-y-6"
        >
          {/* Open to Work Badge */}
          <div className="inline-flex items-center w-fit">
            <span className="px-4 py-2 bg-teal-900/50 text-teal-300 rounded-full text-xs font-medium animate-bounce">
              Open to work
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-secondary-text-color!"
          >
            Lawrencia Efua Cobbina
          </h1>

          <h1 className="text-xl">
            {/* Typewritter effect */}
            <Typewriter
              options={{
                strings: [
                  "Frontend Engineer",
                  "Microsoft Azure Developer",
                  "Microsoft Certified",
                  "Meta Certified",
                  "Soon-to-be Flutter Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          {/* Description */}
          <p className="text-sm max-w-lg leading-relaxed">
            Frontend Engineer specializing in building exceptional digital
            experiences. Passionate about creating intuitive, performant web
            applications using modern technologies.
          </p>

          {/* Metrics */}
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-4xl text-teal-400 text-center font-bold ">
                3+
              </p>
              <p className="text-sm  mt-1">Experience</p>
            </div>
            <div>
              <p className="text-4xl text-teal-400 text-center font-bold ">
                4+
              </p>
              <p className="text-sm  mt-1">Projects</p>
            </div>
            <div>
              <p className="text-4xl text-teal-400 text-center font-bold ">
                4+
              </p>
              <p className="text-sm  mt-1">Certificates</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image Frame */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="hidden lg:flex items-center justify-center h-[95%] "
        >
          <div className="size-full rounded-3xl shadow-xl overflow-hidden">
            <img
              src={longHeadShot}
              alt="Profile"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
