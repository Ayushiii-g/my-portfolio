import React from 'react';

interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  achievements: string[];
}

interface ProjectStatsProps {
  projects: Project[];
}

export default function ProjectStats({ projects }: ProjectStatsProps) {
  const totalProjects = projects.length;
  const categories = [...new Set(projects.map(p => p.category))];
  const totalAchievements = projects.reduce((acc, project) => acc + project.achievements.length, 0);
  const recentProjects = projects.filter(p => p.year === "2025").length;

  return (
    <section className="w-full py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Project Statistics
          </h2>
          <p className="text-xl text-white/80">
            A snapshot of my project portfolio and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">{totalProjects}</div>
            <div className="text-white/80 text-sm">Total Projects</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">{categories.length}</div>
            <div className="text-white/80 text-sm">Categories</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">{totalAchievements}</div>
            <div className="text-white/80 text-sm">Achievements</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">{recentProjects}</div>
            <div className="text-white/80 text-sm">2025 Projects</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] text-white rounded-full text-sm font-semibold"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 