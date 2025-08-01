import Threads from "../../Animations/Threads";

const EDUCATION_DATA = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "University of Engineering and Management, Kolkata",
        years: "2022 – 2026",
        performance: "GPA: 9.13 (Till 5th Semester)",
        courses: ["Data Structures and Algorithms", "Operating Systems", "DBMS", "OOP in Java"],
        icon: "🎓",
        status: "current"
    },
    {
        degree: "AISSCE (Class XII)",
        institution: "Delhi Public School, Ruby Park, Kolkata",
        years: "2020 – 2022",
        performance: "Scored: 87%",
        courses: ["Science Stream", "Mathematics", "Physics", "Chemistry"],
        icon: "📚",
        status: "completed"
    },
    {
        degree: "AISSE (Class X)",
        institution: "Narayana Schools, Maheshtala",
        years: "2017 – 2020",
        performance: "Scored: 97%",
        courses: ["All Subjects", "Mathematics", "Science", "English"],
        icon: "🏫",
        status: "completed"
    }
];

export default function Education() {
    return (
        <section className="w-full flex flex-col items-center justify-center  bg-transparent">
            {/* Threads Animation */}
            <div style={{ width: '100%', height: '400px', position: 'relative' }}>
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            </div>
            
            {/* Heading below threads */}
            <div className="text-center mb-16 mt-8">
                <h2 className="text-5xl font-bold text-white mb-4">
                    Education Journey
                </h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    My academic path from foundation to specialized engineering
                </p>
            </div>

            {/* Education Roadmap */}
            <div className="w-full max-w-6xl relative">
                {/* Central timeline line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3A29FF] via-[#FF94B4] to-[#FF3232] transform -translate-x-1/2"></div>

                <div className="space-y-12">
                    {EDUCATION_DATA.map((education, index) => (
                        <div key={index} className="relative">
                            {/* Timeline dot */}
                            <div className="absolute left-1/2 top-6 w-8 h-8 rounded-full bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] flex items-center justify-center shadow-lg z-10 transform -translate-x-1/2">
                                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                                    <span className="text-sm">{education.icon}</span>
                                </div>
                            </div>

                            {/* Education card - alternating left and right */}
                            <div className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} ${index % 2 === 0 ? 'pr-16' : 'pl-16'} w-5/12 group`}>
                                <div className="bg-black rounded-2xl p-4 border border-gray-700/50 shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
                                    {/* Content with gradient border on hover */}
                                    <div className="relative bg-black rounded-xl p-3 border border-transparent hover:border-transparent transition-all duration-300">
                                        {/* Gradient border on hover - only around content */}
                                        <div className={`absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                                            <div className="w-full h-full bg-black rounded-xl"></div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-3">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
                                                    <p className="text-base text-[#FF94B4] font-semibold mb-1">{education.institution}</p>
                                                    <p className="text-white/60 text-xs">{education.years}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${education.status === 'current'
                                                        ? 'bg-gradient-to-r from-[#3A29FF] to-[#FF94B4] text-white'
                                                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                    }`}>
                                                        {education.status === 'current' ? 'Current' : 'Completed'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Performance */}
                                            <div className="mb-3">
                                                <p className="text-base font-semibold text-white">{education.performance}</p>
                                            </div>

                                            {/* Relevant Courses */}
                                            <div>
                                                <h4 className="text-xs font-semibold text-white/80 mb-2 uppercase tracking-wide">Relevant Courses</h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {education.courses.map((course, courseIndex) => (
                                                        <span 
                                                            key={courseIndex}
                                                            className="text-xs bg-gradient-to-r from-[#3A29FF]/20 to-[#FF94B4]/20 text-white px-2 py-1 rounded-full border border-[#3A29FF]/30"
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Roadmap end indicator */}
                <div className="mt-8 flex justify-center">
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#FF3232] to-[#3A29FF] animate-pulse"></div>
                        <span className="text-white/60 text-sm">Future Goals</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
