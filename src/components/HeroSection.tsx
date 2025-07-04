
import { Github, Linkedin, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-sm md:text-base text-gray-400 tracking-wider transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            WELCOME TO MY PORTFOLIO
          </h2>
          <h1 className={`text-4xl md:text-6xl font-bold text-gradient transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Full Stack Developer
          </h1>
          <p className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Crafting digital experiences with modern technologies and clean code.
          </p>
          
          <div className={`flex justify-center space-x-6 pt-8 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <a href="https://github.com/salman92-dev" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/salman-ahmad-1773aa221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a href="#contact" className="glass p-3 rounded-full hover:scale-110 hover:bg-white/20 transition-all duration-300 group">
              <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
