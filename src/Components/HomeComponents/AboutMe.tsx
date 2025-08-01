

export default function AboutMe() {
  return (
    <section className="w-full flex justify-center py-5 bg-transparent">
      <div className="w-full max-w-6xl flex flex-row items-center justify-center gap-12 px-4">
        {/* Left: Profile image placeholder with gradient */}
        <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-400 to-blue-400 flex items-center justify-center shadow-xl border border-white/20">
          {/* Replace this div with your image later */}
          <span className="text-white text-xl font-semibold opacity-80">Your Photo Here</span>
        </div>
        {/* Right: About Me card */}
        <div className="flex-1 h-80 bg-white/15 backdrop-blur-md rounded-3xl shadow-xl px-5 py-10 flex flex-col items-center border border-white/20 overflow-y-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-lg text-white/80 mb-1 text-center">
            Hello! I'm Ayushi Ghosh, a Computer Science student driven by a deep-seated curiosity for creating technology that is intelligent, interactive, and inherently secure. My academic journey has been a focused exploration into the three domains I am most passionate about: Artificial Intelligence, Full-Stack Development, and Cybersecurity.<br/><br/>
            
          </p>
          <ul className="flex flex-wrap justify-center gap-4 ">
            <li className="bg-white/30 px-5 py-2 rounded-full text-white font-semibold text-base shadow-sm border border-white/20">Artificial Intelligence</li>
            <li className="bg-white/30 px-5 py-2 rounded-full text-white font-semibold text-base shadow-sm border border-white/20">Full-Stack Development</li>
            <li className="bg-white/30 px-5 py-2 rounded-full text-white font-semibold text-base shadow-sm border border-white/20">Cybersecurity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
