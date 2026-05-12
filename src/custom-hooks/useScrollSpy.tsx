import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds: string[], offset = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const listeners = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(id);
              // Optional: Update URL without adding to history
              window.history.replaceState(null, "", `#${id}`);
            }
          });
        },
        { rootMargin: `-${offset}px 0px -70% 0px` }, // Adjusts when the "active" switch happens
      );

      observer.observe(element);
      return observer;
    });

    return () => listeners.forEach((o) => o?.disconnect());
  }, [sectionIds, offset]);

  return activeId;
};
