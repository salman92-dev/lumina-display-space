
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link : "/quote",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management System",
    description: "Collaborative task management platform with real-time updates",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link : "/",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link : "/",
    technologies: ["React", "D3.js", "Firebase"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 cursor-pointer" onClick={()=> window.location.href=project.link}>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm glass rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
