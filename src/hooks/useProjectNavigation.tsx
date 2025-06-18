
import { projects } from "@/types/project";
import { useNavigate } from "react-router-dom";

export const useProjectNavigation = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.type === "web" && project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    } else if (project.type === "app") {
      const url = `/app-details?project=${encodeURIComponent(project.title)}`;
      navigate(url);
    }
  };

  return { handleProjectClick };
};
