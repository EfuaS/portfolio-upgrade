import React, { useEffect } from "react";
import { ExperienceDTO } from "../../utils/projectsContent";

type ProjectModalProps = {
  isOpen: boolean;
  project: ExperienceDTO | null;
  onClose: () => void;
};

export default function ProjectModal({
  isOpen,
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className="relative max-w-3xl w-full mx-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-${project.id}`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-sm text-gray-500 hover:text-gray-800"
          aria-label="Close project details"
        >
          Close
        </button>

        <h2
          id={`project-modal-${project.id}`}
          className="text-2xl font-semibold mb-2 text-secondary-text-color"
        >
          {project.name}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          {project.role} • {project.duration}
        </p>

        <p className="mb-4 text-primary-text-color">{project.about}</p>

        {project.businessImpact && (
          <>
            <h3 className="font-semibold mt-4">Business Impact</h3>
            <p className="mb-2">{project.businessImpact}</p>
          </>
        )}

        {project.challengeFaced && (
          <>
            <h3 className="font-semibold mt-4">Challenge Faced</h3>
            <p className="mb-2">{project.challengeFaced}</p>
          </>
        )}

        {project.developerPride && (
          <>
            <h3 className="font-semibold mt-4">Developer Pride</h3>
            <p className="mb-2">{project.developerPride}</p>
          </>
        )}

        <h3 className="font-semibold mt-4">Team Size</h3>
        <p className="mb-2">{project.teamSize}</p>

        <h3 className="font-semibold mt-4">Tools</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="bg-accent-color/7 text-accent-color rounded-2xl px-3 py-1 text-sm"
            >
              {tool}
            </span>
          ))}
        </div>

        {project.link && (
          <>
            <h3 className="font-semibold mt-4">Link</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-color underline break-words"
            >
              {project.link}
            </a>
          </>
        )}
      </div>
    </div>
  );
}
