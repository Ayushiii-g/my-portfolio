import { useState } from 'react';

const TABS = [
  {
    label: 'Artificial Intelligence',
    content: (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-2">Artificial Intelligence</h3>
        <p className="text-white/80 text-center max-w-xl">
          Explore the world of AI, from natural language processing to computer vision and deep learning architectures.
        </p>
      </div>
    ),
  },
  {
    label: 'Cybersecurity',
    content: (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-2">Cybersecurity</h3>
        <p className="text-white/80 text-center max-w-xl">
          Learn about secure coding, threat modeling, and building resilient systems to protect technology at every stage.
        </p>
      </div>
    ),
  },
  {
    label: 'Full-Stack Development',
    content: (
      <div className="flex flex-col items-center justify-center w-full h-64 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8">
        <h3 className="text-2xl font-bold text-white mb-2">Full-Stack Development</h3>
        <p className="text-white/80 text-center max-w-xl">
          Discover the process of building seamless, scalable, and user-centric applications from front-end to back-end.
        </p>
      </div>
    ),
  },
];

export default function DeepDive() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent">
      {/* Heading and Subheading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">
          Technical Arsenal: My focus areas
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          From AI algorithms to secure systems - here's what I bring to the table
        </p>
      </div>
      
      {/* Main content area that changes with tab */}
      <div className="w-full max-w-3xl mb-10">
        {TABS[activeTab].content}
      </div>
      {/* Tabs styled like the image with underline */}
      <div className="w-full max-w-3xl flex flex-col">
        <div className="flex gap-16 justify-center items-end w-full">
          {TABS.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`relative text-3xl font-bold px-2 pb-2 transition-all duration-200 focus:outline-none
                ${activeTab === idx ? 'gradient-text' : 'text-gray-400 hover:text-white'}
              `}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {tab.label}
              {/* Bold underline for active tab */}
              {activeTab === idx && (
                <div className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
        {/* Base line */}
        <div className="w-full h-[1px] bg-white/20 mt-2" />
      </div>
    </section>
  );
}

// Add this to your global CSS (e.g., index.css or a global styles file):
// .gradient-text {
//   background: linear-gradient(90deg, #2196f3, #e040fb, #ff9800);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   text-fill-color: transparent;
// }
