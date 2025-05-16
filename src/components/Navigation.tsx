
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold flex items-center">
          <span className="bg-gradient-to-r from-techblue-600 to-tealteal-500 text-transparent bg-clip-text">Tech</span>
          <span className="text-gray-800">Sphere</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-techblue-500 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-techblue-500 hover:after:w-full after:transition-all after:duration-300">
            Services
          </a>
          <a href="#about" className="text-gray-700 hover:text-techblue-500 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-techblue-500 hover:after:w-full after:transition-all after:duration-300">
            About
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-techblue-500 transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-techblue-500 hover:after:w-full after:transition-all after:duration-300">
            Case Studies
          </a>
          <a href="#contact" className="primary-button flex items-center gap-2 py-2.5 px-6 bg-gradient-to-r from-techblue-500 to-tealteal-500 hover:from-techblue-600 hover:to-tealteal-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button with improved styling */}
        <button
          className="md:hidden p-2 bg-white/80 backdrop-blur-sm rounded-md shadow-sm border border-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with improved styling and transitions */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg py-4 px-6 shadow-lg border-t border-gray-100 animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            <a
              href="#services"
              className="text-gray-700 font-medium hover:text-techblue-500 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 font-medium hover:text-techblue-500 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#case-studies"
              className="text-gray-700 font-medium hover:text-techblue-500 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </a>
            <a
              href="#contact"
              className="flex justify-center items-center py-3 px-4 bg-gradient-to-r from-techblue-500 to-tealteal-500 text-white font-medium rounded-lg transition-all duration-300 shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
