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

interface ProjectTabsProps {
  projects: Project[];
}

export default function ProjectTabs({ projects }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From AI-powered solutions to secure platforms, explore the projects that showcase my technical expertise and problem-solving approach.
          </p>
        </div>
        
        {/* Project Tabs */}
        <div className="mb-12">
          <div className="flex justify-center items-end w-full">
            <div className="flex gap-16 justify-center items-end w-full">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative text-3xl font-bold px-2 pb-2 transition-all duration-200 focus:outline-none ${
                    activeTab === index 
                      ? 'gradient-text' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {project.title}
                  {/* Bold underline for active tab */}
                  {activeTab === index && (
                    <div className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* Base line */}
          <div className="w-full h-[1px] bg-white/20 mt-2" />
        </div>
        
        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-2xl p-8 border border-white/20 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{projects[activeTab].image}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {projects[activeTab].title}
                  </h3>
                  <p className="text-lg text-purple-300">{projects[activeTab].year}</p>
                </div>
              </div>
              <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                {projects[activeTab].category}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {projects[activeTab].description}
            </p>
            
            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {projects[activeTab].technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#3A29FF]/20 to-[#FF94B4]/20 text-white rounded-full border border-[#3A29FF]/30 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
              <ul className="space-y-3">
                {projects[activeTab].features.map((feature, index) => (
                  <li key={index} className="text-white/80 flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Achievements</h4>
              <div className="flex flex-wrap gap-3">
                {projects[activeTab].achievements.map((achievement, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-[#FF94B4]/20 to-[#FF3232]/20 text-white rounded-full border border-[#FF94B4]/30 text-sm"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-white/20">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] text-white rounded-full font-semibold hover:scale-105 transition-transform">
                  <span>View Project</span>
                  <FiExternalLink className="text-lg" />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                  <span>View Code</span>
                  <FiGithub className="text-lg" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-white/60">
                <span className="text-sm">Project {activeTab + 1} of {projects.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 