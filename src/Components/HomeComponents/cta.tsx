
import DotGrid from '../../Animations/DotGrid';

export default function CTA() {
    return (
        <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent relative overflow-hidden">
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <DotGrid
                    dotSize={3}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#FF94B4"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
                
                {/* Content within DotGrid */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="text-center max-w-4xl mx-auto px-6">
                        {/* Main Heading */}
                        <h2 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232] bg-clip-text text-transparent">
                            Ready to Build Something Amazing?
                        </h2>
                        
                        {/* Description */}
                        <p className="text-xl text-white/80 mb-8 leading-relaxed">
                            Let's collaborate on your next project. Whether it's AI-powered applications, 
                            secure web solutions, or innovative full-stack development, I'm here to bring your ideas to life.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                            {/* Primary CTA Button */}
                            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#3A29FF] via-[#FF94B4] to-[#FF3232]">
                                <button className="px-8 py-4 rounded-full bg-black text-white text-lg font-semibold hover:bg-gray-900 transition-all duration-300 flex items-center gap-3">
                                    <span>Start a Project</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>

                            {/* Secondary CTA Button */}
                            <button className="px-8 py-4 rounded-full border-2 border-white/20 text-white text-lg font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center gap-3">
                                <span>View My Work</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/60">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>ayushi.ghosh@example.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Kolkata, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#3A29FF]/20 to-[#FF94B4]/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#FF94B4]/20 to-[#FF3232]/20 rounded-full blur-xl"></div>
        </section>
    );
}
