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
    githubUrl: "https://github.com/Light-cy/CODSOFT/tree/codsoft_task2_daily_quotes",
    images: [
      "/lovable-uploads/1936f69f-1cc9-4e78-b715-919e1381b661.png",
      "/lovable-uploads/fbfdf14f-d33d-4ce8-90f8-ba98bb55c260.png",
      "/lovable-uploads/63010ade-e23b-407e-905c-328af8000ad8.png",
      "/lovable-uploads/4396b3e5-7368-4410-8128-1893bf485f9d.png",
      "/lovable-uploads/19f7bf74-8362-467c-8ba1-104dcb2a5516.png"
    ]
  },
  {
    title: "Alarm Clock App",
    tech: "Android",
    description: "Alarm app with alert box; stops either manually or after 60 seconds.",
    tags: ["Android", "Alerts", "Timer"],
    color: "red",
    type: "app",
    githubUrl: "https://github.com/Light-cy/CODSOFT/tree/Alarm_clock_app_codsoft_task3",
    images: [
      "/lovable-uploads/d14554f6-616f-4813-bd21-9f0f64f25513.png",
      "/lovable-uploads/874d18cd-0b9a-4654-85fa-3807ee5f8f05.png",
      "/lovable-uploads/a22f2b8f-ab51-47b5-8f3d-9a18b7194c21.png",
      "/lovable-uploads/61ee7dc0-f8fb-4c02-beca-0e030200f602.png",
      "/lovable-uploads/5468c2dc-763b-4136-aff9-fbb8d134562d.png",
      "/lovable-uploads/4a335bc2-7276-4924-ba8b-1e1fb662ff6c.png"
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
