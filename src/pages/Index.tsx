
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

export default function Index() {
  useForceDarkTheme();

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden dark:bg-background transition-colors duration-500">
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
