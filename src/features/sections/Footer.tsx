import {  MailPlus, Smile } from "lucide-react";
import DownloadResume from "../navigation-ui/DownloadResume";

export default function Footer() {
  return (
    <footer className="bg-[#020617] h-[30vh] ">
      <div className="px-32 pt-10 grid grid-cols-2 ">
        <div className="space-y-3">
          <h2 className="font-medium text-3xl text-secondary-text-color">
            Thanks for stopping by!
            <div className="inline-flex gap-2 pl-4">
              <Smile className="animate-bounce text-amber-300" size={30} />
            </div>
          </h2>
          <p className="w-2/3">
            I'm always open to new opportunities and collaborations. Any
            feedback on this website is also welcome. Feel free to reach out
            through any of my socials.
          </p>

          <div>
            <MailPlus />
          </div>
        </div>
        <div className="text-end">
          <p>
            Designed and Developed by
            <span className="text-accent-color"> me </span>@ 2026 
          </p>
          <DownloadResume/>
        </div>
      </div>
    </footer>
  );
}
