<<<<<<< HEAD
import React from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
=======

import React from 'react';
import ServiceCard from './ServiceCard';
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e

const Services = () => {
  const services = [
    {
<<<<<<< HEAD
      icon: "🚀",
      title: "DevOps Excellence",
      description: "Streamline your development and operations with our comprehensive DevOps solutions.",
      link: "/services/devops"
    },
    {
      icon: "🤖",
      title: "AI Agents",
      description: "Leverage the power of artificial intelligence to automate and optimize your business processes.",
      link: "/services/ai-agents"
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description: "Build scalable and reliable cloud solutions that grow with your business needs.",
      link: "/services/cloud-infrastructure"
    },
    {
      icon: "💻",
      title: "Full-Stack Development",
      description: "End-to-end web and mobile applications built with modern technologies and best practices.",
      link: "/services/full-stack-development"
    },
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom websites and web applications that deliver exceptional user experiences.",
      link: "/services/web-development"
    },
    {
      icon: "⛓️",
      title: "Blockchain Solutions",
      description: "Innovative blockchain applications and smart contracts for the decentralized future.",
      link: "/services/blockchain-solutions"
=======
      title: "DevOps Excellence",
      description: "Streamline your development pipeline with our expert DevOps services, including CI/CD, infrastructure automation, and cloud optimization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications built with modern frameworks and designed for optimal user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: "Full Stack Development",
      description: "End-to-end development services covering both frontend and backend, delivering seamless, integrated solutions for complex requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Blockchain Solutions",
      description: "Leverage the power of blockchain technology with our secure, scalable solutions for smart contracts, DApps, and distributed systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "AI Agents & Automation",
      description: "Deploy intelligent AI agents and automation solutions to enhance efficiency, provide insights, and revolutionize your business operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "Architect, deploy, and manage scalable cloud solutions on AWS, Azure, and Google Cloud, optimized for performance and cost-efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e
    }
  ];

  return (
<<<<<<< HEAD
    <section id="services" className="section-padding relative">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-black/30 dark:bg-white/30 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gray-600/30 dark:bg-gray-400/30 blur-3xl -z-10"></div>

      <div className="container mx-auto ">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-black/10 to-gray-600/10 text-black dark:text-white rounded-full">
            Our Services
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-black dark:text-white">
            Comprehensive <span className="text-black dark:text-white">Technology Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a complete suite of technology services designed to transform your business and drive digital innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Link
            to="/services/devops"
            className="primary-button inline-flex items-center gap-2"
          >
            Explore All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
=======
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background patterns and shapes */}
      <div className="absolute inset-0 bg-gray-50/70 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-techblue-100/30 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-tealteal-100/30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-techblue-500/10 to-tealteal-500/10 text-techblue-700 rounded-full">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Premium Tech Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-techblue-500 to-tealteal-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We deliver cutting-edge solutions tailored to meet the unique demands of your business, 
            helping you stay ahead in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
>>>>>>> 6fd5b80e8841fdec3a375a89df6592c4ab24849e
      </div>
    </section>
  );
};

export default Services;
