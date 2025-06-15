
export interface Project {
  title: string;
  tech: string;
  description: string;
  tags: string[];
  color: string;
  type: "web" | "app";
  githubUrl: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    title: "ATM Machine System",
    tech: "C++",
    description: "Console-based ATM simulation with file handling, user accounts, and transaction features.",
    tags: ["C++", "Console App", "File Handling"],
    color: "cyan",
    type: "app",
    githubUrl: "https://github.com/username/atm-system",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  {
    title: "Quiz App",
    tech: "Android + SQLite",
    description: "Mobile quiz app storing questions and tracking scores using SQLite.",
    tags: ["Android", "SQLite", "Quiz"],
    color: "green",
    type: "app",
    githubUrl: "https://github.com/Light-cy/CODSOFT",
    images: [
      "/lovable-uploads/a61a0bef-f2c1-4faf-b454-1506eaa29ab3.png",
      "/lovable-uploads/0c1a2fab-83ea-4bf6-b9a6-d74e2d5770dd.png",
      "/lovable-uploads/a2faf440-3970-473b-88fe-f2cab70137d2.png",
      "/lovable-uploads/52838fe3-3399-403b-91e3-4fd06c44511e.png"
    ]
  },
  {
    title: "Daily Quotes App",
    tech: "Android + API",
    description: "Android app showing daily motivational quotes via API integration.",
    tags: ["Android", "API", "Motivational"],
    color: "orange",
    type: "app",
    githubUrl: "https://github.com/username/quotes-app",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ]
  },
  {
    title: "Alarm Clock App",
    tech: "Android",
    description: "Alarm app with alert box; stops either manually or after 60 seconds.",
    tags: ["Android", "Alerts", "Timer"],
    color: "red",
    type: "app",
    githubUrl: "https://github.com/username/alarm-app",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ]
  },
  {
    title: "Instagram Clone",
    tech: "Firebase",
    description: "Basic Instagram-like app using Firebase for authentication and media storage.",
    tags: ["Firebase", "Authentication", "Media Storage"],
    color: "pink",
    type: "app",
    githubUrl: "https://github.com/username/instagram-clone",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  }
];
