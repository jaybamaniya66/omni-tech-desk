
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Enhanced background with more dynamic elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-techblue-900/5 via-tealteal-900/5 to-techblue-800/5"></div>
        
        {/* Animated abstract shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-techblue-500/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-tealteal-500/10 filter blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-techorange-500/5 filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '8s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptLTE3IDIwaDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMjQgMTJoMXY0aC0xdi00em00IDBoMXY0aC0xdi00em00IDBoMXY0aC0xdi00em00IDBoMXY0aC0xdi00em00IDBoMXY0aC0xdi00em0tMjAgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bS0yNCAxNmgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bS0xNi04aDR2MWgtNHYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
          <div className="mb-2 flex items-center">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-techblue-500/10 to-tealteal-500/10 text-techblue-700 rounded-full">
              Premium Tech Solutions
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Future-Ready</span> 
            <br />Tech Services
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
            Elevate your business with cutting-edge DevOps, web development, blockchain, and AI solutions. We transform tech challenges into competitive advantages.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button className="primary-button text-base font-medium px-8 py-6 flex items-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="secondary-button text-base font-medium px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
          <div className="relative">
            {/* Main hero image with enhanced styling */}
            <div className="rounded-2xl overflow-hidden shadow-2xl animate-float border border-gray-100 shadow-techblue-500/10">
              <img
                src="https://images.unsplash.com/photo-1581092921461-eab10380dbbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Tech Services Visualization"
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Enhanced floating badge/card 1 */}
            <div className="absolute -top-5 -left-5 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-techblue-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">DevOps Excellence</p>
                  <p className="text-xs text-gray-600">CI/CD Mastery</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating badge/card 2 */}
            <div className="absolute bottom-10 -right-5 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-tealteal-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">AI Solutions</p>
                  <p className="text-xs text-gray-600">Custom Agents & Automation</p>
                </div>
              </div>
            </div>
            
            {/* New floating badge/card 3 */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-techorange-500 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Blockchain</p>
                  <p className="text-xs text-gray-600">Secure & Scalable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Improved scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="p-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/20 shadow-lg mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-techblue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="text-sm text-gray-700 font-medium">Discover More</p>
      </div>
    </section>
  );
};

export default Hero;
