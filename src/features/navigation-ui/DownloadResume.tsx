import { Download } from "lucide-react";

export default function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/Resume-Lawrencia-Cobbina.docx.pdf?url";
    link.download = 'Resume-Lawrencia-Cobbina.docx.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className="my-4 max-w-52 text-indigo-400 border-2 hover:cursor-pointer hover:scale-105 hover:bg-accent-color/5 ease-in-out duration-300 border-indigo-400 p-2 rounded-tl-2xl rounded-br-2xl">
      Download Resume
      <Download className="inline ml-2 mb-0.5" size={18} />
    </button>
  );
}
