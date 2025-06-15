
import AnimatedParticlesBg from "@/components/AnimatedParticlesBg";
import { motion, cubicBezier } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

// SVG Blobs to layer behind content for extra "jazzy" look
function SvgBlobs() {
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <svg className="absolute hidden sm:block top-[-8vw] left-[-8vw] w-[40vw] h-[40vw] opacity-60" viewBox="0 0 500 500" fill="none">
        <defs>
          <linearGradient id="blob-grad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#639aff" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#9061ff" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path fill="url(#blob-grad1)" d="M421,317Q355,384,258,394Q161,404,107,317Q53,230,141,166Q229,102,325,136Q421,170,421,317Z"/>
      </svg>
      <svg className="absolute hidden sm:block bottom-[-12vw] right-[-10vw] w-[32vw] h-[32vw] opacity-50" viewBox="0 0 500 500" fill="none">
        <defs>
          <linearGradient id="blob-grad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5ad2ed" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path fill="url(#blob-grad2)" d="M418,323Q384,396,302,419Q220,442,138,402Q56,362,108,279Q160,196,253,125Q346,54,399,144Q452,234,418,323Z"/>
      </svg>
    </div>
  );
}

const easeBezier = cubicBezier(0.42, 0, 0.58, 1);

const heroVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: easeBezier }
  },
};

// For always-on dark mode
function useForceDarkTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    }
  }, []);
}

const glowStyle = "bg-gradient-to-r from-blue-700/80 via-fuchsia-800/60 to-cyan-600/80 blur-xl opacity-60";

// Custom section cards for resume info
function SectionCard({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="relative max-w-2xl w-full my-6 px-6 py-5 rounded-2xl bg-background/80 backdrop-blur border border-border shadow-lg z-30 mx-auto">
      <h2 className="text-xl md:text-2xl font-extrabold mb-2 text-cyan-300">{title}</h2>
      <div className="text-base md:text-lg text-foreground/90">{children}</div>
    </section>
  )
}

export default function Index() {
  useForceDarkTheme();

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden dark:bg-background transition-colors duration-500 scrollbar-hidden">
      <AnimatedParticlesBg />
      <SvgBlobs />

      {/* CENTERED HERO */}
      <main className="relative flex-1 flex flex-col items-center justify-center z-20 pt-14 pb-28">
        {/* Glow Decor */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[27vw] rounded-full ${glowStyle}`} aria-hidden />
        
        <motion.div
          className="mx-auto flex flex-col items-center max-w-2xl px-6"
          initial="hidden"
          animate="show"
          variants={heroVariants}
        >
          <span className="text-xs md:text-sm uppercase mb-4 tracking-wider bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-200 inline-block text-transparent bg-clip-text font-bold animate-fade-in">
            Hi, I&apos;m
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-br from-cyan-200/90 via-fuchsia-400/80 to-blue-400/90 bg-clip-text text-transparent drop-shadow-lg animate-scale-in mb-2 neon-glow">
            Qaseeb Ahmad
          </h1>
          <p className="text-lg md:text-2xl text-center text-muted-foreground font-medium mt-4 mb-9 animate-fade-in">
            <span className="inline-block bg-black/40 rounded px-3 py-1 font-mono tracking-tighter shadow-lg">
              Software Engineer &nbsp;·&nbsp; Web Designer &nbsp;·&nbsp; Animations Enthusiast
            </span>
          </p>
          <motion.div
            className="flex gap-4 mt-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 120, ease: easeBezier }}
          >
            <Button
              asChild
              className="px-6 py-3 text-lg font-bold rounded-xl shadow-xl bg-gradient-to-r from-blue-700 via-fuchsia-800 to-cyan-700
                hover:scale-105 hover:shadow-fuchsia-400/[0.2] hover:ring-2 hover:ring-cyan-400/70 focus-visible:ring-4
                transition-all duration-200 animate-fade-in backdrop-blur group"
            >
              <a href="#work">
                <span className="transition-colors group-hover:text-cyan-300">
                  View My Work
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-6 py-3 text-lg font-bold rounded-xl border-fuchsia-700 text-fuchsia-200 bg-background/40 hover:bg-fuchsia-900/20 hover:scale-105 
                hover:shadow-cyan-400/[0.18] focus-visible:ring-2 transition-all duration-200 animate-fade-in backdrop-blur group"
            >
              <a href="#contact">
                <span className="transition-colors group-hover:text-cyan-400">
                  Contact Me
                </span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </main>

      {/* Resume Info Sections */}
      <div className="relative z-30 flex-1 w-full flex flex-col items-center pb-36">
        <SectionCard title="Profile">
          Enthusiastic Computer Science student and developer passionate about innovative software solutions. Experienced in C++ and other programming languages, with strong problem-solving and debugging skills. Seeking an internship to apply technical expertise and gain industry experience.
        </SectionCard>
        <SectionCard title="Experience">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Assistant Professor (Intern)</strong> – University of Central Punjab<br />
              <span className="text-xs text-muted-foreground">Nov 2024 – Present</span><br />
              Assisted faculty in academic and administrative tasks.<br />
              Supported students and helped with course material.
            </li>
            <li>
              <strong>Private Tutor</strong> – Self-employed<br />
              <span className="text-xs text-muted-foreground">Jun 2024 – Present</span><br />
              Provided personalized tutoring tailored to individual learning styles.
            </li>
            <li>
              <strong>Employee</strong> – Daim Pharmacy<br />
              <span className="text-xs text-muted-foreground">Apr 2020 – Aug 2020</span><br />
              Managed inventory and assisted customers in a retail pharmacy setting.
            </li>
            <li>
              <strong>Front-End Intern</strong> – Ireg-IT<br />
              <span className="text-xs text-muted-foreground">Oct 2024 – Dec 2024</span><br />
              Tested and reviewed UI/UX of software applications.<br />
              Identified bugs and suggested design improvements.
            </li>
            <li>
              <strong>Affiliate Marketer</strong> – Nimal Solutions<br />
              <span className="text-xs text-muted-foreground">Apr 2025 – Present</span><br />
              Sourced candidates via LinkedIn.<br />
              Managed outreach and communication logs.
            </li>
          </ul>
        </SectionCard>
        <SectionCard title="Education">
          <ul className="list-disc list-inside">
            <li>
              <strong>Bachelor of Science in Computer Science</strong><br />
              National University of Computer & Emerging Sciences (FAST-NUCES), 2019–2023
            </li>
          </ul>
        </SectionCard>
        <SectionCard title="Skills">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-2xl bg-cyan-900/30 text-cyan-200 text-sm font-semibold">React</span>
            <span className="px-3 py-1 rounded-2xl bg-fuchsia-900/30 text-fuchsia-200 text-sm font-semibold">TypeScript</span>
            <span className="px-3 py-1 rounded-2xl bg-indigo-900/30 text-indigo-200 text-sm font-semibold">Tailwind CSS</span>
            <span className="px-3 py-1 rounded-2xl bg-blue-800/30 text-blue-200 text-sm font-semibold">Shadcn UI</span>
            <span className="px-3 py-1 rounded-2xl bg-green-900/30 text-green-200 text-sm font-semibold">Node.js</span>
            <span className="px-3 py-1 rounded-2xl bg-gray-700/30 text-gray-200 text-sm font-semibold">UI/UX Design</span>
            <span className="px-3 py-1 rounded-2xl bg-pink-900/20 text-pink-200 text-sm font-semibold">Web Animation</span>
            <span className="px-3 py-1 rounded-2xl bg-yellow-800/20 text-yellow-100 text-sm font-semibold">Performance Optimization</span>
            <span className="px-3 py-1 rounded-2xl bg-violet-800/20 text-violet-100 text-sm font-semibold">Framer Motion</span>
            {/* Add more as needed from resume */}
          </div>
        </SectionCard>
        <SectionCard title="Projects">
          <div className="flex flex-col gap-5">
            <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40">
              <h3 className="text-lg font-bold text-cyan-200 mb-1">ATM Machine System (C++)</h3>
              <p className="text-base text-foreground/90">
                Console-based ATM simulation with file handling, user accounts, and transaction features.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-violet-950/35 border border-violet-700/30">
              <h3 className="text-lg font-bold text-violet-200 mb-1">Rock-Paper-Scissors Game (HTML/CSS/JS)</h3>
              <p className="text-base text-foreground/90">
                Interactive browser game with local storage and dynamic UI.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-fuchsia-950/40 border border-fuchsia-700/30">
              <h3 className="text-lg font-bold text-fuchsia-200 mb-1">Flipkart Clone (HTML/CSS)</h3>
              <p className="text-base text-foreground/90">
                Static e-commerce UI clone with responsive design.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-orange-900/25 border border-orange-700/30">
              <h3 className="text-lg font-bold text-yellow-200 mb-1">Quiz App (Android + SQLite)</h3>
              <p className="text-base text-foreground/90">
                Mobile quiz app storing questions and tracking scores using SQLite.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-sky-900/30 border border-sky-700/30">
              <h3 className="text-lg font-bold text-sky-200 mb-1">Daily Quotes App (API-based)</h3>
              <p className="text-base text-foreground/90">
                Android app showing daily motivational quotes via API.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-green-950/30 border border-green-700/30">
              <h3 className="text-lg font-bold text-green-200 mb-1">Alarm Clock App (Android)</h3>
              <p className="text-base text-foreground/90">
                Alarm app with alert box; stops either manually or after 60 seconds.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-pink-950/30 border border-pink-700/30">
              <h3 className="text-lg font-bold text-pink-200 mb-1">Instagram Clone (Firebase)</h3>
              <p className="text-base text-foreground/90">
                Basic Instagram-like app using Firebase for authentication and media storage.
              </p>
            </div>
          </div>
        </SectionCard>
        <SectionCard title="Contact">
          <div>
            <div>Email: <a href="mailto:qaseeb.ahmad@email.com" className="underline text-cyan-300">qaseeb.ahmad@email.com</a></div>
            <div>LinkedIn: <a href="https://linkedin.com/in/qaseebahmad" target="_blank" rel="noopener" className="underline text-cyan-300">linkedin.com/in/qaseebahmad</a></div>
            <div>GitHub: <a href="https://github.com/qaseebahmad" target="_blank" rel="noopener" className="underline text-cyan-300">github.com/qaseebahmad</a></div>
          </div>
        </SectionCard>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none select-none">
        <motion.div
          animate={{
            y: [0, 12, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.65,
            ease: easeBezier
          }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-300/60 animate-pulse" strokeWidth={2.3} />
        </motion.div>
        <span className="mt-1 text-xs text-cyan-200/50 tracking-wide animate-fade-in">Scroll</span>
      </div>
    </div>
  );
}
