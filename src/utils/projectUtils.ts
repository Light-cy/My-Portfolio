
import { ExternalLink, Smartphone } from "lucide-react";

export const getProjectIcon = (type: "web" | "app") => {
  return type === "web" ? ExternalLink : Smartphone;
};

export const getProjectShadowColor = (color: string): string => {
  const colorMap: Record<string, string> = {
    'cyan': '6, 182, 212',
    'purple': '147, 51, 234',
    'blue': '59, 130, 246',
    'green': '34, 197, 94',
    'orange': '249, 115, 22',
    'red': '239, 68, 68',
    'pink': '236, 72, 153'
  };
  return colorMap[color] || '236, 72, 153';
};
