import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Working with Salman was an absolute pleasure. The project was delivered on time with exceptional quality. His attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content: "Salman transformed our vision into reality. His problem-solving skills and ability to understand complex requirements made our collaboration seamless and productive.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    content: "Outstanding developer with great communication skills. The web application he built for us is fast, responsive, and exactly what we needed. Highly recommended!",
    rating: 5,
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          testimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTestimonials(prev => [...prev, index]);
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
    <section ref={sectionRef} id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold text-gradient mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Client Testimonials
        </h2>
        <p className={`text-muted-foreground mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          What clients say about working with me
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                visibleTestimonials.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
