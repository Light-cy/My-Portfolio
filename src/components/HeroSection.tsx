
import { motion } from "framer-motion";
import { Sparkles, Zap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingNav from "@/components/FloatingNav";

export default function HeroSection() {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center z-20 min-h-screen px-6">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        <motion.div
          className="mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-gradient-to-r bg-clip-text text-transparent font-bold mb-4 font-space
            dark:from-cyan-400 dark:to-purple-400
            from-cyan-600 to-purple-700">
            <Sparkles className="w-4 h-4 dark:text-cyan-400 text-cyan-600" />
            Welcome to my digital universe
            <Sparkles className="w-4 h-4 dark:text-purple-400 text-purple-600" />
          </span>
        </motion.div>

        {/* NAVIGATION ABOVE NAME */}
        <div className="flex justify-center px-8 py-12 mb-8">
          <FloatingNav />
        </div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 font-orbitron"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "backOut" }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r bg-clip-text text-transparent
              dark:from-cyan-300 dark:via-purple-400 dark:to-pink-400
              from-cyan-600 via-purple-600 to-pink-600"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            Qaseeb
          </motion.span>
          <br />
          <motion.span
            className="inline-block bg-gradient-to-r bg-clip-text text-transparent
              dark:from-pink-400 dark:via-purple-400 dark:to-cyan-300
              from-pink-600 via-purple-600 to-cyan-600"
            animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            Ahmad
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed font-space"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        >
          <span className="backdrop-blur rounded-2xl px-6 py-4 border inline-block
            dark:bg-black/50 dark:border-white/10 dark:text-gray-300
            bg-white/60 border-slate-200/60 text-slate-700 shadow-lg">
            ✨ Software Engineer • Frontend Developer • Android Developer ✨
          </span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{
              rotate: [0, -2, 2, 0],
              y: -3,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            <Button asChild className="relative px-10 py-4 text-lg font-black rounded-2xl overflow-hidden group font-space">
              <button onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <motion.div
                    whileHover={{
                      rotate: 15,
                      transition: { duration: 0.15 }
                    }}
                  >
                    <Rocket className="w-5 h-5" />
                  </motion.div>
                  View My Work
                </span>
              </button>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{
              x: 3,
              rotate: 1,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.15 }}
          >
            <Button asChild variant="outline" className="px-10 py-4 text-lg font-black rounded-2xl border-2 backdrop-blur transition-all duration-150 font-space
              dark:border-white/20 dark:bg-black/40 dark:text-white dark:hover:bg-white/10 dark:hover:border-cyan-400/50
              border-slate-300/60 bg-white/60 text-slate-700 hover:bg-white/80 hover:border-cyan-500/60 shadow-lg hover:shadow-xl">
              <button onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}>
                <span className="flex items-center gap-2">
                  <motion.div
                    whileHover={{
                      scale: [1, 1.2, 1],
                      transition: { duration: 0.15 }
                    }}
                  >
                    <Zap className="w-5 h-5" />
                  </motion.div>
                  Let's Connect
                </span>
              </button>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
