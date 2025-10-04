import { useEffect, useRef, useState } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for architecting large-scale React applications with clean code and maintainable structure.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image: "/stockverse.png",
    link: "#"
  },
  {
    title: "Modern CSS Techniques for 2024",
    excerpt: "Explore cutting-edge CSS features including container queries, cascade layers, and modern layout techniques.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "CSS",
    image: "/vertex.jpg",
    link: "#"
  },
  {
    title: "Optimizing Web Performance",
    excerpt: "Deep dive into performance optimization strategies, from code splitting to lazy loading and beyond.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Performance",
    image: "/stockverse2.svg",
    link: "#"
  }
];

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          blogPosts.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePosts(prev => [...prev, index]);
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
  }, []);

  return (
    <section ref={sectionRef} id="blog" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gradient mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Latest Articles
        </h2>
        <p className={`text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Insights and tutorials on web development
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`glass rounded-xl overflow-hidden hover:scale-105 hover:bg-white/10 transition-all duration-300 group ${
                visiblePosts.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 text-xs glass rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-gray-300 transition-colors duration-200">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm font-medium group-hover:text-white transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
