
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const projectsData = {
  "e-commerce-platform": {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Node.js", "MongoDB"],
    fullDescription: "This comprehensive e-commerce platform was built to handle high-traffic online retail operations. The system features real-time inventory management, secure payment processing, and an intuitive admin dashboard for managing products, orders, and customer data.",
    features: [
      "Real-time inventory tracking",
      "Secure payment gateway integration",
      "Admin dashboard with analytics",
      "Customer account management",
      "Order tracking system",
      "Mobile-responsive design"
    ],
    challenges: "The main challenge was implementing real-time inventory updates across multiple concurrent users while maintaining data consistency.",
    results: "Successfully reduced inventory discrepancies by 95% and improved customer satisfaction scores by 40%.",
    liveUrl: "#",
    githubUrl: "#"
  },
  "task-management-system": {
    title: "Task Management System",
    description: "Collaborative task management platform with real-time updates",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    fullDescription: "A comprehensive task management system designed for teams to collaborate effectively. The platform includes real-time notifications, task assignments, progress tracking, and detailed reporting capabilities.",
    features: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Team performance analytics",
      "Customizable workflows",
      "File attachment support",
      "Integration with popular tools"
    ],
    challenges: "Implementing real-time updates across multiple users while maintaining optimal performance was a key technical challenge.",
    results: "Improved team productivity by 60% and reduced project completion time by 30%.",
    liveUrl: "#",
    githubUrl: "#"
  },
  "analytics-dashboard": {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    technologies: ["React", "D3.js", "Firebase"],
    fullDescription: "An advanced analytics dashboard that provides real-time insights into business metrics. The dashboard features interactive charts, customizable widgets, and automated reporting capabilities.",
    features: [
      "Interactive data visualizations",
      "Real-time data updates",
      "Customizable dashboard layouts",
      "Automated report generation",
      "Multi-source data integration",
      "Export capabilities"
    ],
    challenges: "Processing and visualizing large datasets in real-time while maintaining smooth user interactions required careful optimization.",
    results: "Reduced data analysis time by 80% and enabled faster decision-making across the organization.",
    liveUrl: "#",
    githubUrl: "#"
  }
};

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  
  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <Link to="/" className="glass px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  const project = projectsData[projectId as keyof typeof projectsData];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{project.title}</h1>
                  <p className="text-xl text-gray-300 mb-4">{project.description}</p>
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
                
                <div className="flex gap-4 flex-shrink-0">
                  <a
                    href={project.liveUrl}
                    className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <span className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                    <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Results</h2>
                    <p className="text-gray-300 leading-relaxed">{project.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default ProjectDetailPage;
