
import AnimatedParticlesBg from "@/components/AnimatedParticlesBg";
import FloatingElements from "@/components/FloatingElements";
import EnhancedBackground from "@/components/EnhancedBackground";
import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import SectionDivider from "@/components/SectionDivider";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeToggle from "@/components/ThemeToggle";
import { User, Briefcase, GraduationCap, Code, FolderOpen, Mail } from "lucide-react";

export default function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500
      dark:bg-background dark:text-foreground
      bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800">
      <AnimatedParticlesBg />
      <FloatingElements />
      <EnhancedBackground />
      <ThemeToggle />

      <HeroSection />

      {/* CENTERED SECTIONS BELOW HERO */}
      <div className="relative z-30 px-6 py-12 space-y-12">
        <div className="max-w-7xl mx-auto">
          <SectionCard id="profile" title="Profile" icon={User} color="cyan">
            <ProfileSection />
          </SectionCard>
        </div>

        <div className="max-w-7xl mx-auto">
          <SectionCard id="experience" title="Experience" icon={Briefcase} color="purple">
            <ExperienceSection />
          </SectionCard>
        </div>

        <div className="max-w-7xl mx-auto">
          <SectionCard id="education" title="Education" icon={GraduationCap} color="blue">
            <EducationSection />
          </SectionCard>
        </div>

        <SectionDivider />

        <div className="max-w-7xl mx-auto">
          <SectionCard id="skills" title="Skills" icon={Code} color="green">
            <SkillsSection />
          </SectionCard>
        </div>

        <SectionDivider />

        <div className="max-w-7xl mx-auto">
          <SectionCard id="projects" title="Projects" icon={FolderOpen} color="pink">
            <ProjectsSection />
          </SectionCard>
        </div>

        <SectionDivider />

        <div className="max-w-7xl mx-auto">
          <SectionCard id="contact" title="Contact" icon={Mail} color="orange">
            <ContactSection />
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
