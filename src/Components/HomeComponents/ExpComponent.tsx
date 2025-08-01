import { useState } from 'react';

const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company: "Tech Company",
    duration: "June 2023 - August 2023",
    description: "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB"],
    type: "work",
    achievements: [
      "Led development of a customer portal that improved user engagement by 40%",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored 2 junior developers and conducted code reviews"
    ]
  },
  {
    title: "Computer Science Student",
    company: "University Name",
    duration: "2021 - 2025",
    description: "Pursuing a degree in Computer Science with focus on Artificial Intelligence, Cybersecurity, and Full-Stack Development.",
    skills: ["Python", "Java", "Data Structures", "Algorithms"],
    type: "education",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List for 3 consecutive semesters",
      "Research assistant in AI/ML lab",
      "President of Computer Science Club"
    ]
  }
];

export default function ExpComponent() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">
          Experience
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          My journey through education, work, and personal projects
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="w-full max-w-4xl space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline connector */}
            {index < EXPERIENCES.length - 1 && (
              <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500 animate-pulse"></div>
            )}
            
            <div className="flex items-start gap-6">
              {/* Animated Timeline dot */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer group-hover:animate-bounce">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {exp.type === 'work' ? '💼' : exp.type === 'education' ? '🎓' : '🚀'}
                  </span>
                </div>
              </div>

              {/* Interactive Experience card */}
              <div 
                className={`flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:bg-white/15 ${
                  expandedCard === index ? 'ring-2 ring-purple-500/50' : ''
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-purple-300 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-white/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Expandable Achievements */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-white/80 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Interactive Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white px-3 py-1 rounded-full border border-purple-500/30 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-blue-500/40 ${
                        hoveredSkill === skill ? 'ring-2 ring-purple-400' : ''
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add your skill click logic here
                        console.log(`Clicked on skill: ${skill}`);
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Expand/Collapse indicator */}
                <div className="mt-4 text-center">
                  <span className="text-purple-400 text-sm font-medium">
                    {expandedCard === index ? 'Click to collapse' : 'Click to expand'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Deep Dive Button */}
      <div className="mt-16 flex justify-center">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232]">
          <button
            className="px-12 py-4 rounded-full bg-black text-white text-2xl font-bold flex items-center gap-4 transition hover:scale-105 focus:outline-none border-none"
          >
            <span>Deep Dive</span>
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
