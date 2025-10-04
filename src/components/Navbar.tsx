
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import './logo.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
    { label: "Get Quote", href: "/quote" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-black/20' : 'backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 logo hover:scale-105 transition-transform duration-300" >
            <svg viewBox="0 0 600 150" className="logo-svg">
              <text x="50" y="100">Salman</text>
              <line x1="50" y1="110" x2="303" y2="110" />
            </svg>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item, index) => {
                if (item.href === "/quote") {
                  return (
                    <Link
                      key={item.label}
                      to="/quote"
                      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium hover-glass rounded-md transition-all duration-200 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium hover-glass rounded-md transition-all duration-200 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 hover-glass rounded-md transition-all duration-200 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  size={24} 
                  className={`absolute transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 glass">
          {menuItems.map((item, index) => {
            const common = `text-gray-300 hover:text-white block px-3 py-2 text-base font-medium hover-glass rounded-md transition-all duration-200 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`;
            const delay = { transitionDelay: `${index * 50}ms` };
            if (item.href === "/quote") {
              return (
                <Link
                  key={item.label}
                  to="/quote"
                  className={common}
                  style={delay}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className={common}
                style={delay}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <div className="px-3 py-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
