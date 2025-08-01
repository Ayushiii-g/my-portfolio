import Aurora from '../../Animations/Aurora';
import TextType from '../../Animations/TextType';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';


export default function HeroSection() {
    return (
        <div className="relative w-full h-[650px] bg-black flex flex-col items-center justify-center overflow-hidden">
            {/* Aurora as background */}
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Aurora
                    colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                    blend={0.5}
                    amplitude={1.0}
                    speed={0.5}
                />
            </div>
            {/* Navbar at the top */}
            <div className="w-full z-20 flex justify-center pt-6">
                <Navbar />
            </div>
            {/* Hero content centered */}
            <div className="flex flex-col items-center justify-center flex-1 w-full z-10">
                <h1 className="text-6xl font-bold text-white mb-3 drop-shadow-lg text-center">Hello, This is Ayushi Ghosh.</h1>
                <TextType className='text-white text-2xl text-center'
                    text={["Welcome to my portfolio.", "Let me take you through my journey!"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
                {/* Glassmorphic social cards */}
                <div className="flex gap-8 mt-12 flex-wrap justify-center">
                    {/* LinkedIn Card */}
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-between px-6 py-5 w-56 h-36 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg text-white transition hover:bg-white/40 hover:scale-105 focus:outline-none cursor-pointer"
                    >
                        <div className="flex items-center gap-3 mb-1">
                            <FaLinkedin className="text-2xl" />
                            <span className="text-lg font-bold">LinkedIn</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <span className="text-base text-white/80 text-center">Connect with me to know more</span>
                        </div>
                        <div className="flex items-center justify-end w-full mt-2">
                            <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                        </div>
                    </a>
                    {/* GitHub Card */}
                    <a
                        href="https://github.com/your-github-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-between px-6 py-5 w-56 h-36 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg text-white transition hover:bg-white/40 hover:scale-105 focus:outline-none cursor-pointer"
                    >
                        <div className="flex items-center gap-3 mb-1">
                            <FaGithub className="text-2xl" />
                            <span className="text-lg font-bold">GitHub</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <span className="text-base text-white/80 text-center">Explore my projects and code</span>
                        </div>
                        <div className="flex items-center justify-end w-full mt-2">
                            <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                        </div>
                    </a>
                    {/* Resume Card */}
                    <a
                        href="/resume.pdf"
                        download
                        className="group flex flex-col items-center justify-between px-6 py-5 w-56 h-36 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg text-white transition hover:bg-white/40 hover:scale-105 focus:outline-none cursor-pointer"
                    >
                        <div className="flex items-center gap-3 mb-1">
                            <HiOutlineDocumentDownload className="text-2xl" />
                            <span className="text-lg font-bold">Resume</span>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <span className="text-base text-white/80 text-center">Download my latest resume</span>
                        </div>
                        <div className="flex items-center justify-end w-full mt-2">
                            <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
    );
}
