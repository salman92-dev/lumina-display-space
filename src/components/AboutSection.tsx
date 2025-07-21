
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass max-md:p-4 p-8 rounded-2xl transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-3xl md:text-4xl font-bold text-gradient mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-gray-300 leading-relaxed">
                With 1 years of experience in full stack development, I specialize in building scalable web applications using modern technologies. My passion lies in creating elegant solutions to complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I have a strong foundation in both front-end and back-end development, with expertise in React, Next Js, Tilwind Css, Express Js, SQL and Postgresql.
              </p>
            </div>
            <div className={`space-y-6 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Experience Highlights</h3>
                <ul className="space-y-4 text-gray-300 list-disc list-outside ml-4">
                  <li className="hover:text-white transition-colors duration-200">
                    I build complete web applications from scratch using modern tools like React, Next.js, Vite, and Express.js — handling both the frontend and backend.
                  </li>
                  <li className="hover:text-white transition-colors duration-200">
                    I have strong skills in HTML, CSS, Tailwind CSS, and animations, so I can create user-friendly, modern interfaces that work on any device.
                  </li>
                  <li className="hover:text-white transition-colors duration-200">
                   I know how to integrate APIs securely
                  </li>
                  <li className="hover:text-white transition-colors duration-200">
                    I love finding solutions to real-world problems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
