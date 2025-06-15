
export interface Project {
  title: string;
  tech: string;
  description: string;
  tags: string[];
  color: string;
  type: "web" | "app";
  githubUrl: string;
  liveUrl?: string;
  images?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "ATM Machine System",
    tech: "C++",
    description: "Console-based ATM simulation with file handling, user accounts, and transaction features.",
    tags: ["C++", "Console App", "File Handling"],
    color: "cyan",
    type: "app",
    githubUrl: "https://github.com/Light-cy/CPP-Codes",
    features: [
      "Password input is hidden using asterisks * 🔒",
      "Allows backspace to delete characters while entering password ⌫",
      "Limits password attempts to 3 before blocking access 🚫",
      "Allows users to create a new account with name, account number, and password ✨",
      "Supports optional initial deposit during account creation 💰",
      "Checks for duplicate account numbers before account creation 🔍",
      "Allows users to delete an account after correct password verification 🗑️",
      "Displays total withdrawn amount before account deletion 📊",
      "Lets users deposit money into an account 💵",
      "Enforces a minimum deposit amount of 100 💳",
      "Updates account balance after deposit ⚡",
      "Lets users withdraw money from their account 💸",
      "Requires user to select note category (1000, 500, or 100) for withdrawal 🏦",
      "Validates if enough notes are available for chosen denomination ✅",
      "Prevents withdrawals below 100 ⛔",
      "Prevents withdrawal if account balance is below 100 📉",
      "Updates note counts in notes.txt after withdrawal 📝",
      "Allows checking of account balance 👁️",
      "Shows total available balance after correct password entry 💰",
      "Records all transactions (withdrawals and deposits) in transaction.txt 📋",
      "Displays transaction history with date, time, amount, and type 📅",
      "Displays full account details (name, account number, password, balance) after password authentication 🔐",
      "Uses new.txt to store all user account data 💾",
      "Uses notes.txt to store denominations and available notes 🗂️",
      "Uses transaction.txt to store transaction logs 📄",
      "Uses temporary files for safe file updates 🔄",
      "Provides a console-based ATM interface 💻",
      "Includes animated loading and color-coded text for better UX 🎨",
      "Clears screen and waits with messages using system(\"cls\") and Sleep() ⏱️"
    ]
  },
  {
    title: "Flipkart Clone",
    tech: "HTML/CSS",
    description: "Static e-commerce UI clone with responsive design.",
    tags: ["HTML/CSS", "UI", "Responsive"],
    color: "blue",
    type: "web",
    liveUrl: "https://flipcartclonesites.netlify.app/",
    githubUrl: "https://github.com/Light-cy/flipkart-clone"
  },
  {
    title: "Rock-Paper-Scissors Game",
    tech: "HTML/CSS/JS",
    description: "Interactive browser game with local storage and dynamic UI.",
    tags: ["HTML/CSS/JS", "Local Storage", "Dynamic UI"],
    color: "purple",
    type: "web",
    liveUrl: "https://rock-paper-scissors-game-by-light.netlify.app/",
    githubUrl: "https://github.com/Light-cy/rps-game"
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
    features: [
      "Real-time quote fetching 🔄",
      "Like ❤️ / Dislike 💔 functionality",
      "Copy 📋 & Share 📤 options",
      "Swipe to refresh 🔃",
      "Smooth fade animations ✨ using Glide for a polished experience"
    ],
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
    tech: "Java + XML",
    description: "Advanced alarm app built with Java and XML, featuring key Android components like AlarmManager and BroadcastReceiver for accurate alarm scheduling. Enhanced with Glide library for smooth image blurring effects.",
    tags: ["Android", "Java", "XML", "AlarmManager"],
    color: "red",
    type: "app",
    githubUrl: "https://github.com/Light-cy/CODSOFT/tree/Alarm_clock_app_codsoft_task3",
    features: [
      "Automatically stops the alarm after 1 second if not dismissed ⏱️",
      "Auto-stop after 1 minute when phone is locked 🔒",
      "Clean UI with modern look built entirely in XML 🎨",
      "Accurate alarm scheduling with AlarmManager ⚡",
      "Smooth image blurring effects using Glide library ✨",
      "BroadcastReceiver for reliable alarm handling 📡"
    ],
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
    description: "Basic Instagram-like app using Firebase for authentication and media storage. This project is still ongoing with more features being implemented.",
    tags: ["Firebase", "Authentication", "Media Storage", "In Progress"],
    color: "pink",
    type: "app",
    githubUrl: "https://github.com/Light-cy/My-apps/tree/Project",
    images: [
      "/lovable-uploads/0c65a61c-ead7-434e-a3b9-d4806c7a77fd.png",
      "/lovable-uploads/15bf0521-0cad-4883-b3b9-2a93482ce9b5.png",
      "/lovable-uploads/7bbe67e8-3ae5-43d9-a9fc-08cb2c49b07d.png",
      "/lovable-uploads/b74a77e0-c6c4-40fe-847f-7eb0e875c5f5.png",
      "/lovable-uploads/ef5dfe6f-d94c-4f0b-ad8d-d9dcaca7c4f5.png",
      "/lovable-uploads/95e74639-ff1a-483e-9695-8335518094cb.png",
      "/lovable-uploads/819a3ccd-683a-4011-a4b1-72af0cb69852.png",
      "/lovable-uploads/00b9850b-bb24-4042-885b-bb90b61e9139.png",
      "/lovable-uploads/d216898b-9c6e-460e-bb39-727a36543dd9.png",
      "/lovable-uploads/fc2f93ee-abb0-4029-a002-eeaf22643dd0.png"
    ]
  }
];
