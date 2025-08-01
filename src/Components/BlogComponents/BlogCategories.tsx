import React from 'react';
import { FiCode, FiShield, FiBrain, FiTrendingUp } from 'react-icons/fi';

const BLOG_CATEGORIES = [
  {
    title: "AI & Machine Learning",
    description: "Deep dives into neural networks, algorithms, and AI applications",
    icon: FiBrain,
    color: "from-purple-500 to-pink-500",
    topics: ["Neural Networks", "Computer Vision", "NLP", "Deep Learning"]
  },
  {
    title: "Cybersecurity",
    description: "Security best practices, threat analysis, and secure development",
    icon: FiShield,
    color: "from-red-500 to-orange-500",
    topics: ["Penetration Testing", "Secure Coding", "Threat Modeling", "Cryptography"]
  },
  {
    title: "Full-Stack Development",
    description: "Modern web development, architecture patterns, and best practices",
    icon: FiCode,
    color: "from-blue-500 to-cyan-500",
    topics: ["React", "Node.js", "Database Design", "API Development"]
  },
  {
    title: "Career & Growth",
    description: "Industry insights, career advice, and personal development",
    icon: FiTrendingUp,
    color: "from-green-500 to-teal-500",
    topics: ["Career Growth", "Tech Trends", "Interview Prep", "Skill Development"]
  }
];

export default function BlogCategories() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What to Expect
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A preview of the content categories I'll be covering in my blog
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_CATEGORIES.map((category, index) => (
            <div 
              key={index}
              className="group bg-black rounded-2xl p-8 border border-white/20 shadow-lg transition-all duration-300 hover:border-transparent overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <category.icon className="text-xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="text-xs bg-gradient-to-r from-[#3A29FF]/20 to-[#FF94B4]/20 text-white px-3 py-1 rounded-full border border-[#3A29FF]/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 rounded-full border border-white/20">
            <span className="text-white/80">Content coming soon</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#3A29FF] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#FF94B4] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#FF3232] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 