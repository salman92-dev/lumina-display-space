
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of experience in full stack development, I specialize in building scalable web applications using modern technologies. My passion lies in creating elegant solutions to complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I have a strong foundation in both front-end and back-end development, with expertise in React, Node.js, and cloud technologies.
              </p>
            </div>
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Experience Highlights</h3>
                <ul className="space-y-4 text-gray-300 list-disc list-outside ml-4">
                  <li>
                    Led development of enterprise-scale applications
                  </li>
                  <li>
                    Implemented microservices architecture
                  </li>
                  <li>
                    Optimized application performance
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
