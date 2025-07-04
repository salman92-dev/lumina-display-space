
import { Link } from "react-router-dom";

const projects = [
   {
    title: "Stockverse",
    description: "StockVerse.com is the gateway to the world of investing and stock market insights.",
    image: "/stockverse2.svg",
    link : "/project/stockverse",
    technologies: ["React", "Next Js", "Tailwind CSS","Express Js","SQL","Postgresql","AI"],
  },
  {
    title: "Flying Spaghetti",
    description: "$FLYING is a meme coin inspired by the satirical Flying Spaghetti Monster, aiming to revive original meme culture in crypto.",
    image: "/flying-speghetti.jpg",
    link : "/project/Flying Spaghetti",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Soap Coin",
    description: "$SOAP is that feeling when you just hopped out the shower feeling squeaky clean and fresh. Your coins are pumping, your balls are clean, your bags are up.",
    image: "/soap-coin.jpg",
    link : "/project/soap-coin",
    technologies: ["Html", "Css", "Javascript"],
  },
  {
    title: "FSJAL",
    description: "Real-time analytics dashboard with data visualization",
    image: "/fsjal.jpg",
    link : "/project/fsjal",
    technologies: ["Html", "Css", "Javascript"],
  },
  {
    title: "Depin",
    description: "A blockchain project using AI to enable secure, smart search/discovery for decentralized marketplaces.",
    image: "depin.jpg",
    link : "/project/depin",
    technologies: ["Html", "Css","Javascript","React"],
  },
  {
    title: "Solonka",
    description: "Solonka emerges as the pinnacle of sophistication in the Solana Chain launchpad landscape, meticulously engineered for unrivaled user-friendliness and top-tier security.",
    image: "solonka.jpg",
    link : "/project/solonka",
    technologies: ["Html", "Css","Javascript"],
  },
  {
    title: "Rapid Stakes",
    description: "The one stop decentralized sports betting & online casino platform. Play your favorite games and win big.",
    image: "rapid-stakes.jpg",
    link : "/project/rapid-stakes",
    technologies: ["Html", "Css","Javascript"],
  },
  {
    title: "Fx Coin",
    description: "The First Frictionless Forex Investing Protocol Built on Ethereum Merging Crypto & Forex",
    image: "fx-coin.jpg",
    link : "/project/fx-coin",
    technologies: ["Html", "Css","Javascript"],
  },
  {
    title: "Degen Book",
    description: "DegenBook empowers users to cast their vote on fellow Telegram members which is not only fun and addictive, but it’s extremely valuable also.",
    image: "degen-book.jpg",
    link : "/project/degen-book",
    technologies: ["Html", "Css","Javascript"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              to={project.link}
              className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 block"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
