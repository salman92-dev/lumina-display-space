
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillSection from "@/components/SkillSection";
import ProjectSection from "@/components/ProjectSection";
import BlogSection from "@/components/BlogSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import LinkedInArticles from "@/components/Linkedinembed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <BlogSection />
        <TestimonialsSection />
        <LinkedInArticles />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
