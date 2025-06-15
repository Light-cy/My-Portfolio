
import AnimatedParticlesBg from "@/components/AnimatedParticlesBg";
import { motion, cubicBezier } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

// Sticky/floating nav bar for quick section jumps
function FloatingNav() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-screen pointer-events-none">
      <div className="mx-auto max-w-xl flex justify-center gap-4 mt-4 p-2 bg-background/60 backdrop-blur rounded-full shadow-lg border border-border pointer-events-auto">
        <a href="#profile" className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-cyan-900/30 text-cyan-300 transition">Profile</a>
        <a href="#experience" className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-fuchsia-900/20 text-fuchsia-200 transition">Experience</a>
        <a href="#education" className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-indigo-900/20 text-indigo-200 transition">Education</a>
        <a href="#skills" className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-green-900/30 text-green-200 transition">Skills</a>
        <a href="#projects" className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-pink-900/30 text-pink-200 transition">Projects</a>
        <a href="#contact" className="text-sm font-semibold px-3 py-1 rounded-full hover:bg-cyan-900/30 text-cyan-300 transition">Contact</a>
      </div>
    </nav>
  );
}

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
      {/* additional blob for more color layering */}
      <svg className="absolute hidden md:block -top-24 right-0 w-[22vw] h-[22vw] opacity-40" viewBox="0 0 500 500" fill="none">
        <defs>
          <linearGradient id="blob-grad3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path fill="url(#blob-grad3)" d="M400,200Q380,350,250,400Q120,450,100,300Q80,150,235,100Q390,50,400,200Z"/>
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

function useForceDarkTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    }
  }, []);
}

const glowStyle = "bg-gradient-to-r from-blue-700/80 via-fuchsia-800/60 to-cyan-600/80 blur-2xl opacity-50";

// Custom section cards with new styles for portfolio reference look
function SectionCard({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section
      id={id}
      className="relative group max-w-2xl w-full my-7 px-6 py-7 rounded-3xl bg-background/85 backdrop-blur border border-border shadow-2xl shadow-blue-950/10 mx-auto transition-all duration-200"
    >
      <h2 className="section-title text-2xl md:text-3xl font-black mb-3 tracking-tight bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg neon-glow flex items-center gap-2 uppercase">
        <span className="inline-block w-2 h-6 md:h-7 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500/60 to-fuchsia-400/30 mr-2"></span>
        {title}
      </h2>
      <div className="text-base md:text-lg text-foreground/90">{children}</div>
    </section>
  );
}

// Divider between sections
function SectionDivider() {
  return (
    <div className="relative flex justify-center items-center h-8">
      <div className="h-0.5 w-32 bg-gradient-to-r from-blue-600 via-cyan-400/70 to-fuchsia-400 rounded-full opacity-60"></div>
    </div>
  );
}

export default function Index() {
  useForceDarkTheme();

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden dark:bg-background transition-colors duration-500 scrollbar-hidden font-sans">
      <FloatingNav />
      <AnimatedParticlesBg />
      <SvgBlobs />

      {/* CENTERED HERO */}
      <main className="relative flex-1 flex flex-col items-center justify-center z-20 pt-24 pb-32">
        {/* Glow Decor */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[29vw] rounded-full ${glowStyle}`} aria-hidden />
        <motion.div
          className="mx-auto flex flex-col items-center max-w-2xl px-6"
          initial="hidden"
          animate="show"
          variants={heroVariants}
        >
          <span className="text-xs md:text-sm uppercase mb-4 tracking-widest bg-gradient-to-r from-blue-300 via-indigo-400 to-cyan-200 inline-block text-transparent bg-clip-text font-bold animate-fade-in opacity-90">
            Hi, I&apos;m
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-center bg-gradient-to-br from-cyan-200/90 via-fuchsia-400/80 to-blue-400/90 bg-clip-text text-transparent drop-shadow-2xl animate-scale-in mb-2 neon-glow">
            Qaseeb Ahmad
          </h1>
          <p className="text-lg md:text-2xl text-center text-muted-foreground font-medium mt-4 mb-10 animate-fade-in">
            <span className="inline-block bg-black/50 rounded px-4 py-2 font-mono tracking-tight shadow-lg border border-cyan-900/30">
              Software Engineer &nbsp;·&nbsp; Web Designer &nbsp;·&nbsp; Animations Enthusiast
            </span>
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 120, ease: easeBezier }}
          >
            <Button
              asChild
              className="px-8 py-3 text-lg font-black rounded-xl shadow-2xl shadow-blue-800/25 bg-gradient-to-r from-blue-700 via-fuchsia-800 to-cyan-700
                  hover:scale-105 hover:shadow-fuchsia-400/[0.25] hover:brightness-110 hover:ring-2 hover:ring-cyan-400/70 focus-visible:ring-4
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
              className="px-8 py-3 text-lg font-black rounded-xl border-fuchsia-700 text-fuchsia-200 bg-background/50 hover:bg-fuchsia-900/35 hover:scale-105 
                hover:shadow-cyan-400/[0.22] focus-visible:ring-2 transition-all duration-200 animate-fade-in backdrop-blur group"
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

        <SectionCard id="profile" title="Profile">
          Enthusiastic Computer Science student and developer passionate about innovative software solutions. Experienced in C++ and other programming languages, with strong problem-solving and debugging skills. Seeking an internship to apply technical expertise and gain industry experience.
        </SectionCard>

        <SectionDivider />

        <SectionCard id="experience" title="Experience">
          <ul className="list-disc list-inside space-y-4">
            <li className="bg-cyan-900/10 rounded-lg px-4 py-2 hover:scale-[1.01] transition shadow-md border-l-4 border-cyan-800/50">
              <strong>Assistant Professor (Intern)</strong> – University of Central Punjab<br />
              <span className="text-xs text-muted-foreground">Nov 2024 – Present</span><br />
              Assisted faculty in academic and administrative tasks.<br />
              Supported students and helped with course material.
            </li>
            <li className="bg-fuchsia-900/10 rounded-lg px-4 py-2 hover:scale-[1.01] transition shadow-md border-l-4 border-fuchsia-600/30">
              <strong>Private Tutor</strong> – Self-employed<br />
              <span className="text-xs text-muted-foreground">Jun 2024 – Present</span><br />
              Provided personalized tutoring tailored to individual learning styles.
            </li>
            <li className="bg-blue-900/10 rounded-lg px-4 py-2 hover:scale-[1.01] transition shadow-md border-l-4 border-blue-700/30">
              <strong>Employee</strong> – Daim Pharmacy<br />
              <span className="text-xs text-muted-foreground">Apr 2020 – Aug 2020</span><br />
              Managed inventory and assisted customers in a retail pharmacy setting.
            </li>
            <li className="bg-violet-900/10 rounded-lg px-4 py-2 hover:scale-[1.01] transition shadow-md border-l-4 border-violet-700/30">
              <strong>Front-End Intern</strong> – Ireg-IT<br />
              <span className="text-xs text-muted-foreground">Oct 2024 – Dec 2024</span><br />
              Tested and reviewed UI/UX of software applications.<br />
              Identified bugs and suggested design improvements.
            </li>
            <li className="bg-green-900/10 rounded-lg px-4 py-2 hover:scale-[1.01] transition shadow-md border-l-4 border-green-700/30">
              <strong>Affiliate Marketer</strong> – Nimal Solutions<br />
              <span className="text-xs text-muted-foreground">Apr 2025 – Present</span><br />
              Sourced candidates via LinkedIn.<br />
              Managed outreach and communication logs.
            </li>
          </ul>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="education" title="Education">
          <ul className="list-disc list-inside space-y-2">
            <li className="bg-indigo-900/10 rounded-lg px-4 py-2 border-l-4 border-indigo-700/30 shadow transition">
              <strong>Bachelor of Science in Computer Science</strong><br />
              National University of Computer & Emerging Sciences (FAST-NUCES), 2019–2023
            </li>
          </ul>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="skills" title="Skills">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-2xl bg-cyan-900/40 text-cyan-200 text-base font-bold shadow-sm">React</span>
            <span className="px-4 py-1.5 rounded-2xl bg-fuchsia-900/40 text-fuchsia-200 text-base font-bold shadow-sm">TypeScript</span>
            <span className="px-4 py-1.5 rounded-2xl bg-indigo-900/40 text-indigo-200 text-base font-bold shadow-sm">Tailwind CSS</span>
            <span className="px-4 py-1.5 rounded-2xl bg-blue-800/40 text-blue-200 text-base font-bold shadow-sm">Shadcn UI</span>
            <span className="px-4 py-1.5 rounded-2xl bg-green-900/40 text-green-200 text-base font-bold shadow-sm">Node.js</span>
            <span className="px-4 py-1.5 rounded-2xl bg-gray-700/40 text-gray-200 text-base font-bold shadow-sm">UI/UX Design</span>
            <span className="px-4 py-1.5 rounded-2xl bg-pink-900/30 text-pink-200 text-base font-bold shadow-sm">Web Animation</span>
            <span className="px-4 py-1.5 rounded-2xl bg-yellow-800/30 text-yellow-100 text-base font-bold shadow-sm">Performance Optimization</span>
            <span className="px-4 py-1.5 rounded-2xl bg-violet-800/30 text-violet-100 text-base font-bold shadow-sm">Framer Motion</span>
            {/* Add more as needed */}
          </div>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Each project card with hover interactions and tags */}
            <div className="project-card group bg-cyan-950/50 border border-cyan-800/60 rounded-2xl p-5 shadow-xl hover:shadow-cyan-400/30 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-cyan-200 mb-1">ATM Machine System <span className="text-xs">(C++)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Console-based ATM simulation with file handling, user accounts, and transaction features.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-cyan-800/40 text-cyan-200 text-xs rounded px-2 py-0.5">C++</span>
                <span className="bg-blue-800/40 text-blue-200 text-xs rounded px-2 py-0.5">Console App</span>
                <span className="bg-gradient-to-br from-pink-500/10 to-cyan-200/10 text-cyan-100 text-xs rounded px-2 py-0.5">File Handling</span>
              </div>
            </div>
            <div className="project-card group bg-violet-950/40 border border-violet-700/40 rounded-2xl p-5 shadow-xl hover:shadow-violet-400/25 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-violet-200 mb-1">Rock-Paper-Scissors Game <span className="text-xs">(HTML/CSS/JS)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Interactive browser game with local storage and dynamic UI.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-yellow-900/40 text-yellow-300 text-xs rounded px-2 py-0.5">HTML/CSS/JS</span>
                <span className="bg-indigo-900/30 text-indigo-200 text-xs rounded px-2 py-0.5">Local Storage</span>
                <span className="bg-gray-800/30 text-gray-200 text-xs rounded px-2 py-0.5">Dynamic UI</span>
              </div>
            </div>
            <div className="project-card group bg-fuchsia-950/50 border border-fuchsia-700/50 rounded-2xl p-5 shadow-xl hover:shadow-fuchsia-300/25 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-fuchsia-200 mb-1">Flipkart Clone <span className="text-xs">(HTML/CSS)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Static e-commerce UI clone with responsive design.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-900/35 text-blue-200 text-xs rounded px-2 py-0.5">HTML/CSS</span>
                <span className="bg-indigo-700/25 text-indigo-100 text-xs rounded px-2 py-0.5">UI</span>
                <span className="bg-yellow-500/20 text-yellow-300 text-xs rounded px-2 py-0.5">Responsive</span>
              </div>
            </div>
            <div className="project-card group bg-orange-900/35 border border-orange-700/50 rounded-2xl p-5 shadow-xl hover:shadow-orange-200/25 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-yellow-200 mb-1">Quiz App <span className="text-xs">(Android + SQLite)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Mobile quiz app storing questions and tracking scores using SQLite.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-orange-800/30 text-orange-200 text-xs rounded px-2 py-0.5">Android</span>
                <span className="bg-green-900/35 text-green-200 text-xs rounded px-2 py-0.5">SQLite</span>
                <span className="bg-gray-900/20 text-gray-300 text-xs rounded px-2 py-0.5">Quiz</span>
              </div>
            </div>
            <div className="project-card group bg-sky-900/40 border border-sky-700/50 rounded-2xl p-5 shadow-xl hover:shadow-sky-300/25 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-sky-200 mb-1">Daily Quotes App <span className="text-xs">(API-based)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Android app showing daily motivational quotes via API.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-sky-800/30 text-sky-200 text-xs rounded px-2 py-0.5">Java</span>
                <span className="bg-cyan-800/20 text-cyan-200 text-xs rounded px-2 py-0.5">API</span>
                <span className="bg-blue-900/20 text-blue-200 text-xs rounded px-2 py-0.5">Android</span>
              </div>
            </div>
            <div className="project-card group bg-green-950/40 border border-green-700/50 rounded-2xl p-5 shadow-xl hover:shadow-green-200/20 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-green-200 mb-1">Alarm Clock App <span className="text-xs">(Android)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Alarm app with alert box; stops either manually or after 60 seconds.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-green-800/30 text-green-200 text-xs rounded px-2 py-0.5">Android</span>
                <span className="bg-gray-900/20 text-gray-300 text-xs rounded px-2 py-0.5">Alarm</span>
                <span className="bg-orange-800/20 text-orange-200 text-xs rounded px-2 py-0.5">Alerts</span>
              </div>
            </div>
            <div className="project-card group bg-pink-950/40 border border-pink-700/40 rounded-2xl p-5 shadow-xl hover:shadow-pink-200/30 transition-all hover:-translate-y-1 duration-200 flex flex-col gap-1">
              <h3 className="text-xl font-bold text-pink-200 mb-1">Instagram Clone <span className="text-xs">(Firebase)</span></h3>
              <p className="text-base text-foreground/90 mb-2">
                Basic Instagram-like app using Firebase for authentication and media storage.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-pink-800/40 text-pink-200 text-xs rounded px-2 py-0.5">Firebase</span>
                <span className="bg-blue-800/20 text-blue-200 text-xs rounded px-2 py-0.5">Authentication</span>
                <span className="bg-gray-900/25 text-gray-200 text-xs rounded px-2 py-0.5">Media</span>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="contact" title="Contact">
          <div className="space-y-1">
            <div>
              <span className="font-semibold text-cyan-200">Email: </span>
              <a href="mailto:qaseeb.ahmad@email.com" className="underline text-cyan-300 hover:text-fuchsia-300 transition">qaseeb.ahmad@email.com</a>
            </div>
            <div>
              <span className="font-semibold text-cyan-200">LinkedIn: </span>
              <a href="https://linkedin.com/in/qaseebahmad" target="_blank" rel="noopener" className="underline text-cyan-300 hover:text-fuchsia-300 transition">linkedin.com/in/qaseebahmad</a>
            </div>
            <div>
              <span className="font-semibold text-cyan-200">GitHub: </span>
              <a href="https://github.com/qaseebahmad" target="_blank" rel="noopener" className="underline text-cyan-300 hover:text-fuchsia-300 transition">github.com/qaseebahmad</a>
            </div>
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
