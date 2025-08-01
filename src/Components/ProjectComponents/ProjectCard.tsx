import React, { useState } from 'react';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  features: string[];
  achievements: string[];
  category: string;
  image: string;
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-black rounded-2xl p-6 border border-white/20 shadow-lg transition-all duration-500 cursor-pointer overflow-hidden hover:border-transparent">
      {/* Gradient border on hover */}
      <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        <div className="w-full h-full bg-black rounded-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{project.image}</div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-purple-300 font-semibold">{project.year}</p>
            </div>
          </div>
          <span className="text-xs text-white/60 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">
            {project.category}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-white/80 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-gradient-to-r from-[#3A29FF]/20 to-[#FF94B4]/20 text-white px-2 py-1 rounded-full border border-[#3A29FF]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Expandable Details */}
        <div className={`overflow-hidden transition-all duration-500 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-white/80 text-sm flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white/80 mb-2 uppercase tracking-wide">Achievements</h4>
            <div className="flex flex-wrap gap-2">
              {project.achievements.map((achievement, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gradient-to-r from-[#FF94B4]/20 to-[#FF3232]/20 text-white px-2 py-1 rounded-full border border-[#FF94B4]/30"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <FiArrowRight className={`text-lg transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
          
          <div className="flex gap-2">
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <FiGithub className="text-lg" />
            </button>
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <FiExternalLink className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 