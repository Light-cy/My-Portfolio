
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Project } from "@/types/project";

interface ImageGalleryProps {
  project: Project;
}

export default function ImageGallery({ project }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoadingStates, setImageLoadingStates] = useState<{[key: string]: boolean}>({});
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  // Preload images when component mounts
  useEffect(() => {
    if (project?.images) {
      project.images.forEach((imageUrl) => {
        const img = new Image();
        setImageLoadingStates(prev => ({ ...prev, [imageUrl]: true }));
        
        img.onload = () => {
          setImageLoadingStates(prev => ({ ...prev, [imageUrl]: false }));
        };
        
        img.onerror = () => {
          setImageLoadingStates(prev => ({ ...prev, [imageUrl]: false }));
          setImageErrors(prev => ({ ...prev, [imageUrl]: true }));
          console.error(`Failed to load image: ${imageUrl}`);
        };
        
        img.src = imageUrl;
      });
    }
  }, [project]);

  const nextImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const previousImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  if (!project.images || project.images.length === 0) {
    return null;
  }

  const currentImage = project.images[currentImageIndex];
  const isCurrentImageLoading = currentImage ? imageLoadingStates[currentImage] : false;
  const hasCurrentImageError = currentImage ? imageErrors[currentImage] : false;

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
        {isCurrentImageLoading && (
          <Skeleton className="w-full h-full absolute inset-0 bg-gray-700/50" />
        )}
        
        {hasCurrentImageError ? (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">📷</div>
              <div className="text-sm">Image not available</div>
            </div>
          </div>
        ) : (
          <motion.img
            key={currentImageIndex}
            src={currentImage}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className={`w-full h-full object-contain bg-white/5 transition-opacity duration-300 ${
              isCurrentImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            loading="eager"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isCurrentImageLoading ? 0 : 1, x: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {project.images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              disabled={isCurrentImageLoading}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              disabled={isCurrentImageLoading}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex 
                      ? `bg-${project.color}-400` 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail Gallery */}
      {project.images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all relative ${
                index === currentImageIndex 
                  ? `border-${project.color}-400` 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {imageLoadingStates[image] && (
                <Skeleton className="absolute inset-0 bg-gray-700/50" />
              )}
              {imageErrors[image] ? (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  📷
                </div>
              ) : (
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className={`w-full h-full object-cover transition-opacity ${
                    imageLoadingStates[image] ? 'opacity-0' : 'opacity-100'
                  }`}
                  loading="lazy"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
