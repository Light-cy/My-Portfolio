
import AnimatedParticlesBg from "@/components/AnimatedParticlesBg";
import FloatingElements from "@/components/FloatingElements";
import FloatingNav from "@/components/FloatingNav";
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
import ScrollIndicator from "@/components/ScrollIndicator";
import { User, Briefcase, GraduationCap, Code, FolderOpen, Mail } from "lucide-react";
import { useEffect } from "react";

function useForceDarkTheme() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    }
  }, []);
}

export default function Index() {
  useForceDarkTheme();

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <FloatingNav />
      <AnimatedParticlesBg />
      <FloatingElements />
      <EnhancedBackground />

      <HeroSection />

      {/* SECTIONS */}
      <div className="relative z-30 pb-20">
        <SectionCard id="profile" title="Profile" icon={User} color="cyan">
          <ProfileSection />
        </SectionCard>

        <SectionDivider />

        <SectionCard id="experience" title="Experience" icon={Briefcase} color="purple">
          <ExperienceSection />
        </SectionCard>

        <SectionDivider />

        <SectionCard id="education" title="Education" icon={GraduationCap} color="blue">
          <EducationSection />
        </SectionCard>

        <SectionDivider />

        <SectionCard id="skills" title="Skills" icon={Code} color="green">
          <SkillsSection />
        </SectionCard>

        <SectionDivider />

        <SectionCard id="projects" title="Projects" icon={FolderOpen} color="pink">
          <ProjectsSection />
        </SectionCard>

        <SectionDivider />

        <SectionCard id="contact" title="Contact" icon={Mail} color="orange">
          <ContactSection />
        </SectionCard>
      </div>

      <ScrollIndicator />
    </div>
  );
}
