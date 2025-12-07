"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation({ activeNav, setActiveNav }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (id) => {
    setActiveNav(id)
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-purple-900/30 to-slate-950 backdrop-blur-xl"></div>
      <div className="absolute inset-0 border-b border-transparent bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b-cyan-500/30"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            NK
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 relative group ${
                  activeNav === item.id ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    activeNav === item.id
                      ? "bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 opacity-100"
                      : "bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-100"
                  }`}
                ></div>
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors relative z-10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-semibold text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
