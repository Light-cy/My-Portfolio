
import AnimatedParticlesBg from "@/components/AnimatedParticlesBg";
import FloatingElements from "@/components/FloatingElements";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Rocket, Code, User, Briefcase, GraduationCap, Lightbulb, FolderOpen, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Smoother and faster easing curves
const easeBezier = cubicBezier(0.25, 0.46, 0.45, 0.94);
const bounceEasing = cubicBezier(0.34, 1.56, 0.64, 1);
const fastEasing = cubicBezier(0.4, 0, 0.2, 1);

// Sticky/floating nav bar with glassmorphism
function FloatingNav() {
  return (
    <motion.nav 
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-screen pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: fastEasing, delay: 0.2 }}
    >
      <div className="mx-auto max-w-2xl flex justify-center gap-2 mt-6 p-3 bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 pointer-events-auto">
        {[
          { href: "#profile", label: "Profile", icon: User, color: "cyan" },
          { href: "#experience", label: "Experience", icon: Briefcase, color: "purple" },
          { href: "#education", label: "Education", icon: GraduationCap, color: "blue" },
          { href: "#skills", label: "Skills", icon: Code, color: "green" },
          { href: "#projects", label: "Projects", icon: FolderOpen, color: "pink" },
          { href: "#contact", label: "Contact", icon: Mail, color: "orange" }
        ].map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className={`group relative flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition-all duration-200 
              hover:bg-${item.color}-500/20 hover:shadow-lg hover:shadow-${item.color}-500/25 hover:scale-105 
              text-${item.color}-300 hover:text-${item.color}-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden sm:block">{item.label}</span>
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${item.color}-500/0 to-${item.color}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              layoutId={`nav-${item.href}`}
            />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

// Enhanced background with faster animated layers
function EnhancedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-cyan-900/20" />
      
      {/* Faster floating orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-32 h-32 rounded-full opacity-30 blur-xl`}
          style={{
            background: `radial-gradient(circle, ${
              ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'][i % 6]
            }, transparent)`
          }}
          animate={{
            x: [0, 80, -40, 40, 0],
            y: [0, -80, 40, -24, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
        />
      ))}
    </div>
  );
}

function useForceDarkTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    }
  }, []);
}

// Enhanced section cards with faster animations
function SectionCard({ 
  id, 
  title, 
  children, 
  icon: Icon, 
  color = "cyan" 
}: { 
  id: string; 
  title: string; 
  children: React.ReactNode; 
  icon: any; 
  color?: string; 
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="relative group max-w-4xl w-full my-12 mx-auto"
      style={{ y, opacity, scale }}
    >
      <motion.div
        className="relative px-8 py-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 25px 50px -12px ${color === 'cyan' ? 'rgba(6, 182, 212, 0.25)' : 'rgba(168, 85, 247, 0.25)'}`
        }}
        transition={{ duration: 0.2, ease: fastEasing }}
      >
        {/* Faster animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100`}
          transition={{ duration: 0.3 }}
        />
        
        {/* Faster floating particles inside card */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-${color}-400 rounded-full opacity-60`}
              animate={{
                x: [0, 40, -24, 16, 0],
                y: [0, -32, 24, -16, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: fastEasing }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`flex items-center gap-4 text-3xl md:text-4xl font-black mb-6 tracking-tight bg-gradient-to-r from-${color}-300 via-white to-${color}-300 bg-clip-text text-transparent drop-shadow-lg uppercase`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br from-${color}-500/20 to-purple-500/20 border border-${color}-500/30`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.4, ease: bounceEasing }}
            >
              <Icon className={`w-6 h-6 text-${color}-300`} />
            </motion.div>
            {title}
          </motion.h2>
          <motion.div 
            className="text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Faster animated divider
function SectionDivider() {
  return (
    <div className="relative flex justify-center items-center h-16 my-8">
      <motion.div
        className="h-1 w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: fastEasing }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default function Index() {
  useForceDarkTheme();

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <FloatingNav />
      <AnimatedParticlesBg />
      <FloatingElements />
      <EnhancedBackground />

      {/* HERO SECTION */}
      <main className="relative flex-1 flex flex-col items-center justify-center z-20 min-h-screen px-6">
        <motion.div
          className="text-center max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: bounceEasing }}
        >
          <motion.div
            className="mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: fastEasing }}
          >
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-bold mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Welcome to my digital universe
              <Sparkles className="w-4 h-4 text-purple-400" />
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: bounceEasing }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Qaseeb
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Ahmad
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: fastEasing }}
          >
            <span className="bg-black/50 backdrop-blur rounded-2xl px-6 py-4 border border-white/10 inline-block">
              ✨ Software Engineer • Web Designer • Animation Enthusiast ✨
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: fastEasing }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.15 }}>
              <Button
                asChild
                className="relative px-10 py-4 text-lg font-black rounded-2xl overflow-hidden group"
              >
                <a href="#projects">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    View My Work
                  </span>
                </a>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.15 }}>
              <Button
                asChild
                variant="outline"
                className="px-10 py-4 text-lg font-black rounded-2xl border-2 border-white/20 bg-black/40 backdrop-blur text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-200"
              >
                <a href="#contact">
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Let's Connect
                  </span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* SECTIONS */}
      <div className="relative z-30 pb-20">
        <SectionCard id="profile" title="Profile" icon={User} color="cyan">
          <motion.p
            className="text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Enthusiastic Computer Science student and developer passionate about innovative software solutions. 
            Experienced in C++ and other programming languages, with strong problem-solving and debugging skills. 
            Seeking an internship to apply technical expertise and gain industry experience.
          </motion.p>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="experience" title="Experience" icon={Briefcase} color="purple">
          <div className="space-y-6">
            {[
              {
                title: "Assistant Professor (Intern)",
                company: "University of Central Punjab",
                period: "Nov 2024 – Present",
                description: "Assisted faculty in academic and administrative tasks. Supported students and helped with course material.",
                color: "cyan"
              },
              {
                title: "Private Tutor",
                company: "Self-employed",
                period: "Jun 2024 – Present",
                description: "Provided personalized tutoring tailored to individual learning styles.",
                color: "purple"
              },
              {
                title: "Front-End Intern",
                company: "Ireg-IT",
                period: "Oct 2024 – Dec 2024",
                description: "Tested and reviewed UI/UX of software applications. Identified bugs and suggested design improvements.",
                color: "blue"
              },
              {
                title: "Affiliate Marketer",
                company: "Nimal Solutions",
                period: "Apr 2025 – Present",
                description: "Sourced candidates via LinkedIn. Managed outreach and communication logs.",
                color: "green"
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${exp.color}-500/10 to-transparent border border-${exp.color}-500/20 hover:border-${exp.color}-500/40 transition-all duration-200`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color}-400 to-${exp.color}-600 rounded-r`} />
                <h3 className={`text-xl font-bold text-${exp.color}-300 mb-1`}>{exp.title}</h3>
                <p className="text-white/80 font-semibold mb-1">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="education" title="Education" icon={GraduationCap} color="blue">
          <motion.div
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-xl font-bold text-blue-300 mb-2">Bachelor of Science in Computer Science</h3>
            <p className="text-white/80 font-semibold">National University of Computer & Emerging Sciences (FAST-NUCES)</p>
            <p className="text-gray-400">2019–2023</p>
          </motion.div>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="skills" title="Skills" icon={Code} color="green">
          <div className="flex flex-wrap gap-4">
            {[
              { name: "React", color: "cyan" },
              { name: "TypeScript", color: "blue" },
              { name: "Tailwind CSS", color: "teal" },
              { name: "Shadcn UI", color: "purple" },
              { name: "Node.js", color: "green" },
              { name: "UI/UX Design", color: "pink" },
              { name: "Web Animation", color: "orange" },
              { name: "Performance Optimization", color: "yellow" },
              { name: "Framer Motion", color: "indigo" }
            ].map((skill, index) => (
              <motion.span
                key={skill.name}
                className={`px-6 py-3 rounded-2xl bg-gradient-to-r from-${skill.color}-500/20 to-${skill.color}-600/20 border border-${skill.color}-500/30 text-${skill.color}-200 font-bold backdrop-blur`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="projects" title="Projects" icon={FolderOpen} color="pink">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "ATM Machine System",
                tech: "C++",
                description: "Console-based ATM simulation with file handling, user accounts, and transaction features.",
                tags: ["C++", "Console App", "File Handling"],
                color: "cyan"
              },
              {
                title: "Rock-Paper-Scissors Game",
                tech: "HTML/CSS/JS",
                description: "Interactive browser game with local storage and dynamic UI.",
                tags: ["HTML/CSS/JS", "Local Storage", "Dynamic UI"],
                color: "purple"
              },
              {
                title: "Flipkart Clone",
                tech: "HTML/CSS",
                description: "Static e-commerce UI clone with responsive design.",
                tags: ["HTML/CSS", "UI", "Responsive"],
                color: "blue"
              },
              {
                title: "Quiz App",
                tech: "Android + SQLite",
                description: "Mobile quiz app storing questions and tracking scores using SQLite.",
                tags: ["Android", "SQLite", "Quiz"],
                color: "green"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${project.color}-500/10 to-transparent border border-${project.color}-500/20 hover:border-${project.color}-500/40 backdrop-blur overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/20 to-transparent opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.2 }}
                />
                <div className="relative z-10">
                  <h3 className={`text-xl font-bold text-${project.color}-300 mb-2`}>
                    {project.title} <span className="text-sm text-gray-400">({project.tech})</span>
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-full bg-${project.color}-500/20 text-${project.color}-200 border border-${project.color}-500/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionCard>

        <SectionDivider />

        <SectionCard id="contact" title="Contact" icon={Mail} color="orange">
          <div className="space-y-4">
            {[
              { label: "Email", value: "qaseeb.ahmad@email.com", href: "mailto:qaseeb.ahmad@email.com" },
              { label: "LinkedIn", value: "linkedin.com/in/qaseebahmad", href: "https://linkedin.com/in/qaseebahmad" },
              { label: "GitHub", value: "github.com/qaseebahmad", href: "https://github.com/qaseebahmad" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-orange-500/30 transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold text-orange-300 min-w-[80px]">{contact.label}:</span>
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener' : undefined}
                  className="text-white hover:text-orange-300 transition-colors underline decoration-orange-500/50 hover:decoration-orange-300"
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
        </SectionCard>
      </div>

      {/* Faster animated scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400 animate-pulse" />
        <span className="mt-2 text-xs text-cyan-300/60 tracking-wide">Scroll</span>
      </motion.div>
    </div>
  );
}
