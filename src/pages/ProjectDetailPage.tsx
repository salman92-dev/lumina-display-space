
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const projectsData = {
    "stockverse": {
    title: "Stockverse",
    description: "StockVerse.com is the gateway to the world of investing and stock market insights.  They provide up-to-date market analysis, stock news, and educational resources to help both beginners and seasoned investors make informed decisions.",
    image: "/stockverse.svg",
    technologies:  ["React", "Next Js", "Tailwind CSS","Express Js","SQL","Postgresql","AI"],
    fullDescription: "StockVerse.com is the gateway to the world of investing and stock market insights. They provide up-to-date market analysis, stock news, and educational resources to help both beginners and seasoned investors make informed decisions. Whether you’re looking to track trends, discover new opportunities, or expand your financial knowledge, StockVerse.com empowers you with the tools and information you need to navigate the markets with confidence",
    features: [
      "Real time Stock Prices",
      "In-Depth Company Profiles",
      "Interactive Charts",
      "Custom Watchlists",
      "Market News & Alerts",
      "AI integration to guess markets trends.",
    ],
    challenges: "-----------------------------------------------------------",
    results: "----------------------------------------------------------------",
    liveUrl: "https://stockverse.com",
    githubUrl: "https://github.com/salman92-dev/stockverse"
  },
    "vertex": {
    title: "Vertex Solutions",
    description: "Vertex Solution We help businesses thrive online with cutting-edge SEO, stunning web development, and strategic digital marketing that delivers real results.",
    image: "/stockverse.svg",
    technologies:  ["React", "Vite", "Tailwind CSS","Supabase"],
    fullDescription: "Vertex Solution We help businesses thrive online with cutting-edge SEO, stunning web development, and strategic digital marketing that delivers real results.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
    ],
    challenges: "-----------------------------------------------------------",
    results: "----------------------------------------------------------------",
    liveUrl: "https://vertex-solution.netlify.app/",
    githubUrl: "https://github.com/salman92-dev/Vertex-solution.git"
  },
  "Flying Spaghetti": {
    title: "Flying Spaghetti",
    description: "$FLYING is a meme coin inspired by the satirical Flying Spaghetti Monster, aiming to revive original meme culture in crypto.",
    image: "/flying-speghetti.jpg",
    technologies: ["HTML", "Css", "Javascript"],
    fullDescription: "$FLYING is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "----------------------------------------------------------------",
    liveUrl: "https://salman92-dev.github.io/flying-spaghetti/",
    githubUrl: "#"
  },
  "soap-coin": {
    title: "Soap Coin",
    description: "$SOAP is that feeling when you just hopped out the shower feeling squeaky clean and fresh. Your coins are pumping, your balls are clean, your bags are up. $SOAP isn’t a product, or a movement, it’s a practice. A way of life. Just make sure you don’t drop it.",
    image: "/soap-coin.jpg",
    technologies: ["Html", "Css", "Javascript"],
    fullDescription: "$SOAP is that feeling when you just hopped out the shower feeling squeaky clean and fresh. Your coins are pumping, your balls are clean, your bags are up. $SOAP isn’t a product, or a movement, it’s a practice. A way of life. Just make sure you don’t drop it.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://salman92-dev.github.io/soap-coin-eth/",
    githubUrl: "https://github.com/salman92-dev/soap-coin-eth"
  },
  "fsjal": {
    title: "FSJAL",
    description: "It is a meme Coin. Among the myriad of memes that have surfaced over the years, one that holds a special place in the hearts of many is the FSJAL meme.",
    image: "/fsjal.jpg",
    technologies: ["Html", "Css", "Javscript"],
    fullDescription: "It is a meme Coin.Among the myriad of memes that have surfaced over the years, one that holds a special place in the hearts of many is the FSJAL meme. Join us as we take a deep dive into the history, significance, and enduring appeal of the FSJAL meme.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://fsjal.netlify.app/",
    githubUrl: "https://github.com/salman92-dev/fsjal"
  },
  "depin": {
    title: "Depin",
    description: "A blockchain project using AI to enable secure, smart search/discovery for decentralized marketplaces.",
    image: "/depin.jpg",
    technologies: ["Html", "Css", "Javascript","React"],
    fullDescription: "DePin is an AI-powered Web3 platform that combines blockchain security with smart marketplace search for real-world assets (RWA). By bridging AI and decentralized technologies, DePin enables users to securely discover, trade, and interact with verified assets and marketplaces on Web 3.0 — all through an intuitive, secure, and trustless environment.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://depin-coin.netlify.app/",
    githubUrl: "https://github.com/salman92-dev/depin"
  },
  "solonka": {
    title: "Solonka",
    description: "Solonka emerges as the pinnacle of sophistication in the Solana Chain launchpad landscape, meticulously engineered for unrivaled user-friendliness and top-tier security.",
    image: "/solonka.jpg",
    technologies: ["Html", "Css", "Javascript"],
    fullDescription: "Solonka emerges as the pinnacle of sophistication in the Solana Chain launchpad landscape, meticulously engineered for unrivaled user-friendliness and top-tier security.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://salman92-dev.github.io/solanka/",
    githubUrl: "https://github.com/salman92-dev/solanka"
  },
  "rapid-stakes": {
    title: "Rapid Stakes",
    description: "The one stop decentralized sports betting & online casino platform. Play your favorite games and win big.",
    image: "/rapid-stakes2.jpg",
    technologies: ["Html", "Css", "Javascript"],
    fullDescription: "The one stop decentralized sports betting & online casino platform. Play your favorite games and win big.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://salman92-dev.github.io/rapid-stake/",
    githubUrl: "https://github.com/salman92-dev/rapid-stake"
  },
   "fx-coin": {
    title: "Rapid Stakes",
    description: "The First Frictionless Forex Investing Protocol Built on Ethereum Merging Crypto & Forex.",
    image: "/fx-coin.jpg",
    technologies: ["Html", "Css", "Javascript"],
    fullDescription: "The First Frictionless Forex Investing Protocol Built on Ethereum Merging Crypto & Forex.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://salman92-dev.github.io/fx-coin/",
    githubUrl: "https://github.com/salman92-dev/fx-coin"
  },
  "degen-book": {
    title: "Degen Book",
    description: "DegenBook empowers users to cast their vote on fellow Telegram members which is not only fun and addictive, but it’s extremely valuable also.",
    image: "/degen-book.jpg",
    technologies: ["Html", "Css", "Javascript"],
    fullDescription: "DegenBook empowers users to cast their vote on fellow Telegram members which is not only fun and addictive, but it’s extremely valuable also.",
    features: [
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------",
      "-------------------------------------"
    ],
    challenges: "-----------------------------------------------------------",
    results: "-----------------------------------------------------------",
    liveUrl: "https://salman92-dev.github.io/degen-book/",
    githubUrl: "https://github.com/salman92-dev/degen-book"
  },
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
            <div className="h-64 md:h-[25rem] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-[100%] h-full object-cover"
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
                    href={project.liveUrl} target="_blank" 
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
