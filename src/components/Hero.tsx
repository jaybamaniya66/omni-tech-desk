
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on page load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-techblue-900/10 via-tealteal-900/10 to-techblue-800/10"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-techblue-500/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-tealteal-500/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 animate-on-scroll">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Future-Ready</span> Tech Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
            Elevate your business with cutting-edge DevOps, web development, blockchain, and AI solutions. We turn tech challenges into competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="primary-button">Get Started</Button>
            <Button className="secondary-button">Learn More</Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-on-scroll">
          <div className="relative">
            {/* Main hero image */}
            <div className="rounded-xl overflow-hidden shadow-2xl animate-float">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab10380dbbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Tech Services Visualization"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating badge/card 1 */}
            <div className="absolute -top-5 -left-5 glass-card p-3 rounded-lg shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="bg-techblue-500 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">DevOps Excellence</p>
                  <p className="text-xs text-gray-600">CI/CD Mastery</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge/card 2 */}
            <div className="absolute bottom-10 -right-5 glass-card p-3 rounded-lg shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="bg-tealteal-500 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold">AI Solutions</p>
                  <p className="text-xs text-gray-600">Custom Agents & Automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
