
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, HealthTech Innovations",
    content: "TechSphere's DevOps implementation transformed our deployment process. What used to take days now happens in minutes, with greater reliability and fewer errors. Their team's expertise in automation has been a game-changer for our development workflow.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    logo: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
  },
  {
    name: "Michael Chang",
    role: "Founder, FinTech Solutions",
    content: "The blockchain platform developed by TechSphere has revolutionized how we handle transactions. Their understanding of both the technology and our industry's specific needs resulted in a solution that's not only secure but has opened new business opportunities for us.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    logo: "https://images.unsplash.com/photo-1614036414180-724f1c394c27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2001&q=80"
  },
  {
    name: "Priya Patel",
    role: "VP of Operations, E-commerce Giant",
    content: "The AI-powered customer service automation that TechSphere built for us has reduced response times by 70% while maintaining a high level of customer satisfaction. Their ability to translate complex AI concepts into practical business applications is impressive.",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    logo: "https://images.unsplash.com/photo-1614027164847-1f28431e7adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2286&q=80"
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section id="case-studies" className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their 
            experience working with TechSphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={cn(
                "p-4 rounded-lg transition-all duration-300 text-left",
                activeTestimonial === index 
                  ? "bg-white/10 border border-white/20" 
                  : "bg-transparent hover:bg-white/5"
              )}
            >
              <div className="flex items-center mb-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">
                {testimonial.content}
              </p>
            </button>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 animate-on-scroll">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center md:justify-start">
              <img
                src={testimonials[activeTestimonial].logo}
                alt="Company Logo"
                className="h-16 rounded-lg object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <blockquote className="text-lg md:text-xl mb-6 italic">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-gray-300">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
