import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import SkeletonLoader from "./SkeletonLoader";

const projects = [
   {
    title: "Stockverse",
    description: "StockVerse.com is the gateway to the world of investing and stock market insights.",
    image: "/stockverse2.svg",
    link : "/project/stockverse",
    demoUrl: "https://stockverse.com",
    technologies: ["React", "Next Js", "Tailwind CSS","Express Js","SQL","Postgresql","AI"],
  },
  {
    title: "Vertex Solution",
    description: "Vertex Solution We help businesses thrive online with cutting-edge SEO, stunning web development, and strategic digital marketing that delivers real results.",
    image: "/vertex.jpg",
    link : "/project/vertex",
    demoUrl : "https://vertex-solution.netlify.app/",
    technologies: ["React", "Vite", "Tailwind CSS","Supabase"],
  },
  {
    title: "Flying Spaghetti",
    description: "$FLYING is a meme coin inspired by the satirical Flying Spaghetti Monster, aiming to revive original meme culture in crypto.",
    image: "/flying-speghetti.jpg",
    link : "/project/Flying Spaghetti",
    demoUrl : "https://salman92-dev.github.io/flying-spaghetti/",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Soap Coin",
    description: "$SOAP is that feeling when you just hopped out the shower feeling squeaky clean and fresh. Your coins are pumping, your balls are clean, your bags are up.",
    image: "/soap-coin.jpg",
    link : "/project/soap-coin",
    demoUrl : "https://salman92-dev.github.io/soap-coin-eth/",
    technologies: ["Html", "Css", "Javascript"],
  },
  {
    title: "FSJAL",
    description: "Real-time analytics dashboard with data visualization",
    image: "/fsjal.jpg",
    link : "/project/fsjal",
    demoUrl : "https://fsjal.netlify.app/",
    technologies: ["Html", "Css", "Javascript"],
  },
  {
    title: "Depin",
    description: "A blockchain project using AI to enable secure, smart search/discovery for decentralized marketplaces.",
    image: "depin.jpg",
    link : "/project/depin",
    demoUrl : "https://depin-coin.netlify.app/",
    technologies: ["Html", "Css","Javascript","React"],
  },
  {
    title: "Solonka",
    description: "Solonka emerges as the pinnacle of sophistication in the Solana Chain launchpad landscape, meticulously engineered for unrivaled user-friendliness and top-tier security.",
    image: "solonka.jpg",
    link : "/project/solonka",
    demoUrl : "https://salman92-dev.github.io/solanka/",
    technologies: ["Html", "Css","Javascript"],
  },
  {
    title: "Rapid Stakes",
    description: "The one stop decentralized sports betting & online casino platform. Play your favorite games and win big.",
    image: "rapid-stakes.jpg",
    link : "/project/rapid-stakes",
    demoUrl : "https://salman92-dev.github.io/rapid-stake/",
    technologies: ["Html", "Css","Javascript"],
  },
  {
    title: "Fx Coin",
    description: "The First Frictionless Forex Investing Protocol Built on Ethereum Merging Crypto & Forex",
    image: "fx-coin.jpg",
    link : "/project/fx-coin",
    demoUrl : "https://salman92-dev.github.io/fx-coin/",
    technologies: ["Html", "Css","Javascript"],
  },
  {
    title: "Degen Book",
    description: "DegenBook empowers users to cast their vote on fellow Telegram members which is not only fun and addictive, but it’s extremely valuable also.",
    image: "degen-book.jpg",
    link : "/project/degen-book",
    demoUrl : "https://salman92-dev.github.io/degen-book/",
    technologies: ["Html", "Css","Javascript"],
  },
];

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [demoProject, setDemoProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Extract unique technologies
  const allTechnologies = ["All", ...Array.from(new Set(projects.flatMap(p => p.technologies)))];

  // Filter projects based on selected technology
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(p => p.technologies.includes(selectedFilter));

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate project cards with staggered delays
          filteredProjects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, index]);
            }, index * 150);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredProjects]);

  // Reset visible projects when filter changes
  useEffect(() => {
    setVisibleProjects([]);
    setTimeout(() => {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index]);
        }, index * 100);
      });
    }, 50);
  }, [selectedFilter]);

  return (
    <>
      <section ref={sectionRef} id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-gradient mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Projects
          </h2>
          <p className={`text-muted-foreground mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Filter by technology to explore my work
          </p>
          
          {/* Technology Filter */}
          <div className={`flex flex-wrap gap-2 mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedFilter === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(tech)}
                className="transition-all duration-200"
              >
                {tech}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <SkeletonLoader type="project" count={6} />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`glass rounded-xl overflow-hidden hover:scale-105 hover:bg-white/10 transition-all duration-300 group ${
                    visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 group-hover:text-gray-300 transition-colors duration-200">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm glass rounded-full group-hover:bg-white/20 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Link to={project.link} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      {project.demoUrl && (
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => setDemoProject(project)}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Live Demo Modal */}
      <Dialog open={!!demoProject} onOpenChange={(open) => !open && setDemoProject(null)}>
        <DialogContent className="max-w-6xl h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{demoProject?.title} - Live Demo</span>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={() => setDemoProject(null)}
              >
                <X className="w-4 h-4" />
              </Button> */}
            </DialogTitle>
            <DialogDescription>
              Interactive preview of the project
            </DialogDescription>
          </DialogHeader>
          {demoProject?.demoUrl && (
            <iframe
              src={demoProject.demoUrl}
              className="w-full h-[34rem] md:h-[31rem] rounded-lg border-2 border-border"
              title={`${demoProject.title} demo`}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectSection;
