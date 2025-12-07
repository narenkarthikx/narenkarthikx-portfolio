"use client"
import { ArrowRight, Code2, Brain, Database, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen pt-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect hover:border-cyan-500/50 transition-all">
                <Sparkles size={16} className="text-cyan-400" />
                <span className="text-cyan-300 text-base font-medium">Software Developer & Data Engineer</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-6xl sm:text-7xl font-black text-white leading-tight">
                  Naren <br />
                  <span className="gradient-text text-6xl sm:text-7xl">Karthik</span>
                </h1>
              </div>

              <p className="text-xl text-slate-300 max-w-lg">
                Building data-driven systems, quantum solutions, and AI-powered applications that solve real-world
                problems and scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-xl"></div>
                <div className="absolute inset-0.5 bg-background rounded-lg group-hover:inset-1 transition-all"></div>
                <div className="relative flex items-center justify-center gap-2">
                  View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 rounded-xl font-semibold glow-border hover:border-cyan-400 transition-all"
              >
                <span className="text-cyan-300 group-hover:text-cyan-200">Get In Touch</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {[
                { icon: Database, label: "Expertise", value: "Data & Backend" },
                { icon: Brain, label: "Focus", value: "AI & Quantum" },
                { icon: Code2, label: "Role", value: "Tech Lead" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group glass-effect p-4 rounded-lg hover:border-cyan-400 transition-all hover:scale-105 transform"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/30 to-violet-500/30 rounded-lg">
                      <item.icon className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white font-bold text-base">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - 3D-like Visual */}
          <div
            className={`hidden lg:block transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-2xl blur-2xl"></div>
              <div
                className="relative glass-effect rounded-2xl p-12 border-2 border-transparent"
                style={{
                  backgroundImage: `linear-gradient(rgba(21, 26, 59, 0.7), rgba(21, 26, 59, 0.7)), linear-gradient(135deg, rgba(0, 217, 255, 0.3), rgba(124, 58, 237, 0.3))`,
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <div className="animate-float space-y-6">
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                    <Code2 size={40} className="text-cyan-400" />
                    <div>
                      <p className="text-cyan-300 font-bold text-lg">Full Stack</p>
                      <p className="text-slate-400 text-base">Python • React • PostgreSQL</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-xl border border-violet-500/20">
                    <Brain size={40} className="text-violet-400" />
                    <div>
                      <p className="text-violet-300 font-bold text-lg">AI & ML</p>
                      <p className="text-slate-400 text-base">TensorFlow • Scikit-learn</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl border border-pink-500/20">
                    <Sparkles size={40} className="text-pink-400" />
                    <div>
                      <p className="text-pink-300 font-bold text-lg">Quantum</p>
                      <p className="text-slate-400 text-base">Qiskit • Quantum Algorithms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
