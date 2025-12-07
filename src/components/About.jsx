import { CheckCircle } from "lucide-react"

export default function About() {
  const highlights = [
    "Full-stack development with React & Python",
    "Database design & data engineering",
    "Backend systems & REST APIs",
    "Team leadership & project management",
    "Quantum computing exploration",
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a software developer with a strong foundation in data engineering and backend systems. My passion lies
              in building scalable, data-driven applications that make a real impact.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Currently pursuing my B.Tech in Computer & Communication Engineering at Sri Manakula Vinayagar Engineering
              College with a CGPA of 8.63. I've worked as a tech lead at QWorld and an intern at VPS Codebuilders,
              leading teams and architecting solutions.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <p className="text-cyan-400 text-sm font-semibold mb-2">📍 Location</p>
              <p className="text-white text-lg">Puducherry, India</p>
            </div>

            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <p className="text-cyan-400 text-sm font-semibold mb-2">🎓 Education</p>
              <p className="text-white text-lg">B.Tech - Computer & Communication Engineering</p>
              <p className="text-slate-400">Sri Manakula Vinayagar Engineering College</p>
            </div>

            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <p className="text-cyan-400 text-sm font-semibold mb-2">💼 Currently</p>
              <p className="text-white text-lg">B.Tech Student & Developer</p>
              <p className="text-slate-400">Working on AI and Quantum projects</p>
            </div>

            <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <p className="text-cyan-400 text-sm font-semibold mb-2">📊 Interest</p>
              <p className="text-white text-lg">Data Engineering & Quantum Computing</p>
              <p className="text-slate-400">Building intelligent systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
