"use client"

import { useState } from "react"
import { Mail, Phone, Linkedin, Github, ExternalLink, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to a backend service
    setFormData({ name: "", email: "", message: "" })
  }

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "naren_karthik@outlook.com",
      href: "mailto:naren_karthik@outlook.com",
      color: "text-red-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9655856365",
      href: "tel:+919655856365",
      color: "text-green-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/narenkarthikx",
      href: "https://linkedin.com/in/narenkarthikx",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/narenkarthikx",
      href: "https://github.com/narenkarthikx",
      color: "text-slate-300",
    },
  ]

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or want to discuss ideas? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-300 mb-8">
                Whether you're interested in collaborating on a project, discussing technology trends, or just saying
                hello – feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-slate-800/50 border border-cyan-500/20 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all"
                  >
                    <div
                      className={`p-3 bg-slate-700 rounded-lg ${link.color} group-hover:bg-slate-600 transition-all`}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-400">{link.label}</p>
                      <p className="text-white font-semibold hover:text-cyan-400 transition-colors">{link.value}</p>
                    </div>
                    <ExternalLink size={20} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
