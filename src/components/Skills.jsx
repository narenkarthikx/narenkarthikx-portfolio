import { Code2, Database, Zap, Terminal, Cpu, BookOpen } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "JavaScript", "SQL", "Java"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: Terminal,
      title: "Backend & ETL",
      skills: ["Flask", "REST APIs", "Node.js", "Express.js", "SQLAlchemy"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["Supabase", "PostgreSQL", "MySQL", "MongoDB", "MS SQL Server"],
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-500/10 to-red-500/10",
      borderColor: "border-pink-500/30",
    },
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "React Native", "TailwindCSS", "Responsive Design"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: Zap,
      title: "Data & ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Data Modeling"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Cpu,
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "JWT Auth"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30",
    },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-lg">A comprehensive toolkit for building scalable, data-driven solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${category.bgColor} border ${category.borderColor} rounded-xl p-8 hover:border-opacity-100 transition-all duration-300 group overflow-hidden`}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${category.color})` }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 bg-gradient-to-br ${category.bgColor} rounded-lg group-hover:shadow-lg transition-all`}
                    >
                      <Icon
                        className="text-white"
                        size={28}
                        style={{ filter: `drop-shadow(0 0 8px rgba(255,255,255,0.5))` }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-3 group/skill">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/skill:w-3 transition-all shadow-lg flex-shrink-0`}
                        ></div>
                        <span className="text-slate-300 group-hover/skill:text-white transition-colors text-base">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { org: "IT Specialist", cert: "JavaScript and Databases", color: "from-cyan-500" },
              { org: "Microsoft", cert: "Azure Data Fundamentals", color: "from-blue-500" },
              { org: "NPTEL", cert: "Database Management System", color: "from-purple-500" },
              { org: "NPTEL", cert: "Joy of Computing using Python", color: "from-pink-500" },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${item.color}/10 to-transparent border border-current/30 rounded-lg p-4 flex items-center gap-3 hover:border-opacity-100 transition-all duration-300 group`}
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color}/20 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-current/50 transition-all`}
                >
                  <BookOpen className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{item.org}</p>
                  <p className="text-white font-semibold">{item.cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}