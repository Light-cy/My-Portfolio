
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { projects } from "@/types/project";
import ImageGallery from "@/components/ImageGallery";
import ProjectInfo from "@/components/ProjectInfo";

export default function AppDetails() {
  const [searchParams] = useSearchParams();
  const projectTitle = searchParams.get('project');
  
  const project = projects.find(p => p.title === projectTitle);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Portfolio`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <ImageGallery project={project} />

          {/* Project Details */}
          <ProjectInfo project={project} />
        </div>
      </div>
    </div>
  );
}
