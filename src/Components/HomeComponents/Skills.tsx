import React, { useState } from 'react';
import Particles from '../../Animations/Particles';

const SKILLS_DATA = [
    {
        category: "Web Development",
        skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "JavaScript", "Node.js", "Express.js", "React", "Postman"],
        icon: "🌐"
    },
    {
        category: "Machine Learning",
        skills: ["PyTorch", "scikit-learn", "TensorFlow", "Keras", "NLTK", "NumPy", "Pandas"],
        icon: "🤖"
    },
    {
        category: "Cybersecurity",
        skills: ["Network Security", "Linux Permissions", "Vulnerability Assessment", "Firewalls", "Cryptography", "Secure Coding", "Threat Modeling"],
        icon: "🔒"
    },
    {
        category: "DBMS",
        skills: ["MySQL", "PostgreSQL"],
        icon: "🗄️"
    },
    {
        category: "Programming",
        skills: ["C", "Java", "Python"],
        icon: "💻"
    },
    {
        category: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
        icon: "🛠️"
    }
];

export default function Skills() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent">
            {/* Particles with heading */}
            <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
                
                {/* Heading within particles */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-white mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            My technical toolkit across development, AI, and security
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-16">
                {SKILLS_DATA.map((category, index) => (
                    <div
                        key={index}
                        className="group relative bg-black rounded-2xl p-6 border border-gray-700/50 shadow-lg transition-all duration-300 cursor-pointer overflow-hidden hover:border-transparent"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Gradient border on hover */}
                        <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            <div className="w-full h-full bg-black rounded-2xl"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                            </div>
                            
                            {/* Skills list */}
                            <div className="space-y-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
                                    >
                                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats */}
            <div className="mt-16 flex justify-center">
                <div className="flex gap-8 text-center">
                    <div className="bg-black backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-700/50">
                        <div className="text-2xl font-bold text-white">6</div>
                        <div className="text-sm text-white/60">Categories</div>
                    </div>
                    <div className="bg-black backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-700/50">
                        <div className="text-2xl font-bold text-white">30+</div>
                        <div className="text-sm text-white/60">Technologies</div>
                    </div>
                    <div className="bg-black backdrop-blur-sm rounded-xl px-6 py-4 border border-gray-700/50">
                        <div className="text-2xl font-bold text-white">3</div>
                        <div className="text-sm text-white/60">Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
