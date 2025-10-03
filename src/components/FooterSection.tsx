
const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 py-8 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gradient">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: sa0587676@gmail.com</li>
              <li>Location: Sahiwal, Pakistan</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover-glass px-2 py-1 rounded">Home</a></li>
              <li><a href="/#about" className="text-gray-400 hover-glass px-2 py-1 rounded">About</a></li>
              <li><a href="/#skills" className="text-gray-400 hover-glass px-2 py-1 rounded">Skills</a></li>
              <li><a href="/#projects" className="text-gray-400 hover-glass px-2 py-1 rounded">Projects</a></li>
              <li><a href="/#contact" className="text-gray-400 hover-glass px-2 py-1 rounded">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gradient">Social</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/salman92-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover-glass px-2 py-1 rounded">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/salman-ahmad-1773aa221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover-glass px-2 py-1 rounded">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© {currentYear} Salman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
