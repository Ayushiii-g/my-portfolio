
import React from 'react';
import LightRays from '../../Animations/LightRays';
import Navbar from '../HomeComponents/Navbar';

export default function ProjectHero() {
  return (
    <section className="relative w-full h-[600px] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* LightRays Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-6">
        <Navbar />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-20">
        <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232] bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-2xl text-white/90 mb-8 leading-relaxed">
          Exploring the intersection of AI, security, and full-stack development
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-white/80">
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">AI/ML</span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Security</span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Full-Stack</span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Deep Learning</span>
        </div>
      </div>
    </section>
  );
} 