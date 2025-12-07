"use client"

import { useState } from "react"
import { ExternalLink, Github, Trophy } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Learn Buddy",
      category: "AI Project",
      description:
        "Bridging the educational gap for government school students through AI-powered personalized learning experiences.",
      highlights: [
        "AI-powered learning recommendations",
        "Personalized educational content",
        "Real-time performance tracking",
        "Multi-language support",
      ],
      tech: ["Python", "React", "TensorFlow", "Flask", "PostgreSQL"],
      impact: "Helping bridge educational gaps for underserved students",
      status: "In Progress",
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderGradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "AI Expense Tracker",
      category: "AI Application",
      description: "Intelligent expense tracking system that analyzes bills and receipts through image recognition.",
      highlights: [
        "Image-based bill recognition",
        "Automatic expense categorization",
        "Real-time budget tracking",
        "Expense analytics dashboard",
      ],
      tech: ["Python", "OpenCV", "React", "MongoDB", "OCR APIs"],
      impact: "Automating expense tracking and financial insights",
      status: "Active",
      gradient: "from-violet-500/20 to-purple-500/20",
      borderGradient: "from-violet-500 to-purple-500",
    },
    {
      id: 3,
      title: "Quantum Escape Room",
      category: "Quantum Computing",
      description: "Educational escape-room game simplifying complex quantum concepts through interactive puzzles.",
      highlights: [
        "Interactive quantum puzzles",
        "Real-time player progress tracking",
        "Analytics dashboard",
        "30% increase in engagement",
      ],
      tech: ["React", "Flask", "Supabase", "Google Auth", "Quantum Algorithms"],
      impact: "Increased engagement by 30% while educating on quantum concepts",
      status: "Completed",
      gradient: "from-pink-500/20 to-rose-500/20",
      borderGradient: "from-pink-500 to-rose-500",
    },
    {
      id: 4,
      title: "GymSync",
      category: "Full-Stack Project",
      description: "Data-driven gym management system solving inefficiencies in manual tracking.",
      highlights: [
        "Secure authentication & PIN access",
        "Real-time analytics dashboards",
        "Revenue trend visualization",
        "Capacity management",
      ],
      tech: ["React", "Supabase", "TailwindCSS", "Real-time Analytics"],
      impact: "Streamlined gym operations with real-time insights",
      status: "Completed",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderGradient: "from-emerald-500 to-teal-500",
    },
  ]

  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From AI-powered learning platforms to quantum computing games, explore the projects I've built that push
            boundaries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className="group relative cursor-pointer perspective"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>

              <div
                className={`relative glass-effect rounded-2xl p-8 transition-all duration-500 group-hover:scale-105 transform ${hoveredProject === project.id ? "border-2 border-transparent animate-glow" : "border border-slate-700/50"}`}
                style={
                  hoveredProject === project.id
                    ? {
                        backgroundImage: `linear-gradient(rgba(21, 26, 59, 0.8), rgba(21, 26, 59, 0.8)), linear-gradient(135deg, ${project.gradient})`,
                        backgroundClip: "padding-box, border-box",
                      }
                    : {}
                }
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-bold ${project.status === "Completed" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50" : project.status === "In Progress" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50" : "bg-blue-500/20 text-blue-300 border border-blue-500/50"}`}
                  >
                    {project.status}
                  </span>
                  {project.status === "Completed" && <Trophy size={18} className="text-yellow-400" />}
                </div>

                <div className="inline-block mb-4">
                  <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                {selectedProject === project.id && (
                  <div className="space-y-6 mb-6 animate-slideInUp">
                    <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-lg border border-cyan-500/30">
                      <p className="text-base font-bold text-cyan-300 mb-2">Key Highlights</p>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-base text-slate-300 flex items-start gap-2">
                            <span className="text-cyan-400 mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-violet-500/10 to-pink-500/10 rounded-lg border border-violet-500/30">
                      <p className="text-base font-bold text-violet-300 mb-2">Impact</p>
                      <p className="text-base text-slate-300">{project.impact}</p>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-slate-700/50 to-slate-600/30 text-slate-300 border border-slate-600/50 group-hover:border-cyan-400/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <button className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 hover:from-cyan-500/40 hover:to-blue-500/40 transition-all border border-cyan-500/30 font-semibold text-sm">
                    <Github size={16} />
                    GitHub
                  </button>
                  <button className="group/link flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-300 hover:from-violet-500/40 hover:to-pink-500/40 transition-all border border-violet-500/30 font-semibold text-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
