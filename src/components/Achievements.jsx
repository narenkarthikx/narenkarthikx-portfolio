import { Trophy, Award, Zap, Users } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "1st Prize",
      subtitle: "Paper Presentation",
      description: 'Won 1st Prize for "Blockchain-Based Voting System" at MITILENCE 2024',
      year: "2024",
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      accentColor: "text-yellow-400",
    },
    {
      icon: Award,
      title: "2nd Prize",
      subtitle: "Inter-College Code Debugging",
      description: "Secured 2nd Prize in Inter-College Code Debugging competition at MECHATRONZ 2024",
      year: "2024",
      color: "from-gray-400/20 to-slate-500/20",
      borderColor: "border-gray-400/30",
      accentColor: "text-gray-300",
    },
    {
      icon: Zap,
      title: "Quantum Echo",
      subtitle: "Quantum Game Jam 2025",
      description: "Developed Quantum Echo prototype, showcasing quantum computing concepts through interactive gaming",
      year: "2025",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      accentColor: "text-cyan-400",
    },
    {
      icon: Users,
      title: "Committee Member",
      subtitle: "Eldrida Innovators Club",
      description: "Served as Chair Committee Member, organized technical and cultural events serving 160+ students",
      year: "2024",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
    },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Recognition</h2>
          <p className="text-slate-400 text-lg">
            Recognitions and milestones that highlight my contributions and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${achievement.color} border ${achievement.borderColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-slate-800/50 rounded-lg ${achievement.accentColor}`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/70 ${achievement.accentColor}`}
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <p className={`${achievement.accentColor} font-semibold text-sm mb-2`}>{achievement.subtitle}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
