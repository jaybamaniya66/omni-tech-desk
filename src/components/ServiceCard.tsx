
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "tech-card group relative overflow-hidden border border-gray-100",
        "hover:border-techblue-300 hover:shadow-2xl transition-all duration-300",
        className
      )}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-techblue-100 to-tealteal-50 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="mb-6 text-3xl text-techblue-500 group-hover:text-techorange-500 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 group-hover:text-techblue-700 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-techblue-500 to-tealteal-500 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

export default ServiceCard;
