
import { Github, Linkedin, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-6">
          <h2 className="text-sm md:text-base text-gray-400 tracking-wider">WELCOME TO MY PORTFOLIO</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and clean code.
          </p>
          
          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/salman92-dev" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/salman-ahmad-1773aa221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#contact" className="glass p-3 rounded-full hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
