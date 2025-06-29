import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/5 via-gray-800/5 to-black/5"></div>
        
        {/* Animated abstract shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-black/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-gray-600/10 filter blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-gray-400/5 filter blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '8s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptLTE3IDIwaDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMjQgMTJoMXY0aC0xdi00em00IDBoMXY0aC0xdi00em00IDBoMXY0aC0xdi00em0tMjAgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bS0yNCAxNmgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bTQgMGgxdjRoLTF2LTR6bS0xNi04aDR2MWgtNHYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-2 z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 animate-on-scroll pr-8" style={{ transitionDelay: '0.1s' }}>
          <div className="mb-2 flex items-center">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-black/10 to-gray-600/10 text-black dark:text-white rounded-full">
              🚀 Leading Technology Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-10">
            <span className="text-black dark:text-white">Transform Your Business</span>
            <br />
            <span className="text-black dark:text-white">With Modern Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-7 max-w-2lg">
            We deliver cutting-edge solutions in DevOps, AI, Cloud Infrastructure, and Full-Stack Development to drive your digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-12">
            <Link
              to="/services/devops"
              className="primary-button flex items-center gap-2"
            >
              <div className="bg-black dark:bg-white p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Explore Our Services
            </Link>
            <a
              href="#about"
              className="secondary-button flex items-center gap-2"
            >
              <div className="bg-black dark:bg-white p-3 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Learn More
            </a>
          </div>
        </div>

        
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
          <div className="relative">
            {/* Enhanced floating badge/card 1 */}
            <div className="hidden md:block absolute -top-12 -left-10 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-black dark:bg-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">DevOps Excellence</p>
                  <p className="text-xs text-gray-600">CI/CD Mastery</p>
                </div>
              </div>
            </div>

            {/* Web & App Development card */}
            <div className="hidden md:block absolute top-16 left-12 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-black dark:bg-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">Web & App Development</p>
                  <p className="text-xs text-gray-600">Website and App Development</p>
                </div>
              </div>
            </div>
            
            {/* Enhanced floating badge/card 2 */}
            <div className="hidden md:block absolute bottom-10 -right-5 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-black dark:bg-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2 glass-card p-4 rounded-lg shadow-lg animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-black dark:bg-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
