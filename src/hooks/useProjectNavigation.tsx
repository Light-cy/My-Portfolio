
import { projects } from "@/types/project";

export const useProjectNavigation = () => {
  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.type === "web" && project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    } else if (project.type === "app") {
      const url = `/app-details?project=${encodeURIComponent(project.title)}`;
      window.open(url, "_blank");
    }
  };

  return { handleProjectClick };
};
