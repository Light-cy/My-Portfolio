
// HomePage – Futuristic, Attractive Hero Section

import AnimatedParticlesBg from "@/components/AnimatedParticlesBg";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

const heroVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: "easeOut" } },
};

const glowStyle = "bg-gradient-to-r from-blue-600/80 via-fuchsia-500/60 to-cyan-300/80 blur-lg opacity-60";

export default function Index() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
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
          <span className="text-xs md:text-sm uppercase mb-4 tracking-wider bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300 inline-block text-transparent bg-clip-text font-bold animate-fade-in">
            Hi, I&apos;m
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-br from-cyan-300/90 via-fuchsia-500/80 to-blue-500/90 bg-clip-text text-transparent drop-shadow-lg animate-scale-in mb-2">
            YOUR NAME
          </h1>
          <p className="text-lg md:text-2xl text-center text-muted-foreground font-medium mt-4 mb-9 animate-fade-in">
            <span className="inline-block bg-black/30 rounded px-2 py-1 font-mono tracking-tighter shadow-lg">
              Software Engineer &nbsp;·&nbsp; Web Designer &nbsp;·&nbsp; Animations Enthusiast
            </span>
          </p>

          <motion.div
            className="flex gap-4 mt-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 120 }}
          >
            <a href="#work" className="px-5 py-2 rounded shadow bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform hover:shadow-lg ring-2 ring-transparent hover:ring-cyan-500/70 duration-150">
              View My Work
            </a>
            <a href="#contact" className="px-5 py-2 rounded border border-accent text-accent-foreground bg-accent hover:bg-background/70 hover:scale-105 transition">
              Contact Me
            </a>
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
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground/70 animate-pulse" strokeWidth={2.3} />
        </motion.div>
        <span className="mt-1 text-xs text-muted-foreground/60 tracking-wide animate-fade-in">Scroll</span>
      </div>
    </div>
  );
}
