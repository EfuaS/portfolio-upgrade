import { Download } from "lucide-react";

export default function DownloadResume() {
  return (
    <button className="my-4 max-w-52 text-indigo-400 border-2 hover:cursor-pointer hover:bg-accent-color/15 ease-in-out duration-300 border-indigo-400 p-2 rounded-tl-2xl rounded-br-2xl">
      Download Resume
      <Download className="inline ml-2 mb-0.5" size={18} />
    </button>
  );
}
