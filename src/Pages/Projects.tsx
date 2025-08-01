import React from 'react';
import ProjectTabs from '../Components/ProjectComponents/ProjectTabs';
import ProjectHero from '../Components/ProjectComponents/ProjectHero';
import ProjectStats from '../Components/ProjectComponents/ProjectStats';
import Navbar from '../Components/HomeComponents/Navbar';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Garura - Secure Interview Hosting Platform",
    year: "2025",
    description: "A secure interview hosting platform designed to maintain integrity during remote interviews.",
    technologies: ["Electron", "Next.js", "TypeScript", "Tailwind CSS", "Windows PowerShell"],
    features: [
      "Developed as part of a 4-member team for the Hack4Bengal 4.0 In-Person Hackathon",
      "Created a locked-down video interview environment that blocks blacklisted applications (e.g., Discord, OBS) to ensure integrity",
      "Implemented hardware-level monitoring to terminate sessions on PrintScreen attempts and regularly clear the clipboard",
      "Designed a 'three-strikes' system for suspicious key usage and generated audit logs of running processes every 10 minutes"
    ],
    achievements: ["Hack4Bengal 4.0 Winner", "Advanced Security Implementation", "Real-time Monitoring"],
    category: "Security",
    image: "🔒",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Assessly - AI Powered Grading System",
    year: "2025",
    description: "An AI-powered grading system that automates the evaluation process using advanced machine learning.",
    technologies: ["React (TypeScript)", "Node.js", "Tailwind CSS", "MongoDB", "Gemini 2.0 Flash"],
    features: [
      "Integrated Gemini 2.0 Flash model for OCR and automated grading workflows",
      "Built secure nonce-based assignment links and real-time dashboards",
      "Developed for Google Solution Challenge 2025; reduced evaluation time by 85%",
      "Implemented automated grading with high accuracy and detailed feedback"
    ],
    achievements: ["Google Solution Challenge 2025", "85% Time Reduction", "AI Integration"],
    category: "AI/ML",
    image: "🤖",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Hate Speech Detection",
    year: "2025",
    description: "A deep learning-based system for detecting and classifying hate speech in text content.",
    technologies: ["Deep Learning", "LSTM", "BiRNN", "Seq2Seq", "GRU", "NLP"],
    features: [
      "Developed a deep learning-based system to classify text as safe or unsafe",
      "Achieved 89% accuracy in detecting NSFW speech",
      "Compared the results of different models to determine which performs better at various levels of toxicity",
      "Implemented multiple neural network architectures for comprehensive analysis"
    ],
    achievements: ["89% Accuracy", "Multi-Model Comparison", "Advanced NLP"],
    category: "AI/ML",
    image: "🛡️",
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    title: "Customer Review Sentiment Analysis",
    year: "2024",
    description: "A sentiment analysis system for classifying customer reviews using machine learning techniques.",
    technologies: ["XGBoost", "NLP", "Text Preprocessing", "TF-IDF", "Feature Engineering"],
    features: [
      "Developed and deployed a sentiment analysis model using XGBoost to classify user reviews as positive, negative, or neutral",
      "Improved classification accuracy over baseline models",
      "Achieved an accuracy score of 91, demonstrating the model's effectiveness in real-world customer feedback scenarios",
      "Implemented comprehensive text preprocessing and feature engineering pipeline"
    ],
    achievements: ["91% Accuracy", "Production Deployment", "Real-world Application"],
    category: "AI/ML",
    image: "📊",
    color: "from-green-500 to-teal-500"
  }
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-black">
      {/* Hero Section */}
      <ProjectHero />
      
      {/* Stats Section */}
      {/* <ProjectStats projects={PROJECTS_DATA} /> */}
      
      {/* Project Tabs */}
      <ProjectTabs projects={PROJECTS_DATA} />
    </div>
  );
}
