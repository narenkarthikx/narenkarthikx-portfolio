import { Calendar, MapPin, TrendingUp } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Tech Lead",
      company: "QWorld",
      type: "Internship",
      period: "June - September 2025",
      location: "Remote",
      highlights: [
        "Led a 7-member development team",
        "Developed educational escape-room game with quantum concepts",
        "Backend with Flask, Supabase, Google Auth",
        "Increased engagement by 30%",
      ],
      tech: ["React", "Flask", "Supabase", "Google Auth", "GitHub"],
      impact: "30% increase in user engagement",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
    },
    {
      title: "Software Intern",
      company: "VPS Codebuilders Pvt. Ltd",
      type: "Internship",
      period: "August - October 2023",
      location: "Puducherry",
      highlights: [
        "Enhanced Ed-tech Admin Platform backend",
        "Optimized MongoDB schema design",
        "Implemented secure JWT authentication",
        "Reduced API response time by 25%",
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "GitHub"],
      impact: "25% improvement in response time",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
    },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-lg">My journey in software development and technical leadership</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${exp.gradient} border ${exp.borderColor} rounded-xl p-8 hover:border-opacity-100 transition-all duration-300 group overflow-hidden`}
            >
              {/* Animated glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-2xl pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${exp.gradient})` }}
              ></div>

              {/* Timeline Connector */}
              {index !== experiences.length - 1 && (
                <div
                  className={`absolute left-8 top-full w-1 h-8 bg-gradient-to-b from-${exp.accentColor}/50 to-transparent`}
                ></div>
              )}

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left - Timeline Dot */}
                <div className="md:col-span-1">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-4 h-4 rounded-full ${exp.accentColor.replace("text", "bg")} mt-2 flex-shrink-0 relative z-10 shadow-lg`}
                    ></div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className={exp.accentColor + " font-semibold text-base"}>{exp.company}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-blue-300 text-sm rounded-full font-semibold border border-blue-500/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Middle - Details */}
                <div className="md:col-span-2">
                  <div className="space-y-4">
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-base text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={exp.accentColor} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className={exp.accentColor} />
                        {exp.location}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <p className={`text-base font-semibold ${exp.accentColor} mb-2`}>Key Contributions:</p>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-base text-slate-300 flex items-start gap-2">
                            <span className={exp.accentColor + " mt-1"}>✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="flex items-center gap-2 pt-2">
                      <TrendingUp size={16} className="text-green-400" />
                      <span className="text-base text-green-400 font-semibold">{exp.impact}</span>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 text-sm rounded border border-slate-500/30 hover:border-current hover:text-white transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
