import React from 'react';
import { FiMail, FiClock, FiBookOpen } from 'react-icons/fi';

export default function BlogComingSoon() {
  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Coming Soon Content */}
        <div className="bg-black rounded-3xl p-12 border border-white/20 shadow-2xl backdrop-blur-md">
          {/* Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] rounded-full flex items-center justify-center">
              <FiBookOpen className="text-4xl text-white" />
            </div>
          </div>
          
          {/* Heading */}
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232] bg-clip-text text-transparent">
            Coming Soon
          </h2>
          
          {/* Description */}
          <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
            I'm currently working on some exciting content about AI, cybersecurity, and full-stack development. 
            Stay tuned for deep dives into my projects, tutorials, and industry insights.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiBookOpen className="text-xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Deep Dives</h3>
              <p className="text-white/70 text-sm">
                In-depth analysis of AI algorithms, security implementations, and development patterns
              </p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF94B4] to-[#FF3232] rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiClock className="text-xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Project Walkthroughs</h3>
              <p className="text-white/70 text-sm">
                Step-by-step guides through my projects, challenges faced, and lessons learned
              </p>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-[#FF3232] to-[#3A29FF] rounded-full flex items-center justify-center mb-4 mx-auto">
                <FiMail className="text-xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Insights</h3>
              <p className="text-white/70 text-sm">
                Thoughts on emerging technologies, best practices, and career development
              </p>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Get Notified</h3>
            <p className="text-white/70 mb-6">
              Be the first to know when new content drops. No spam, just quality insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#3A29FF] transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 