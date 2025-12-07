"use client"

import { useState } from "react"
import Navigation from "@/src/components/Navigation"
import Hero from "@/src/components/Hero"
import About from "@/src/components/About"
import Projects from "@/src/components/Projects"
import Skills from "@/src/components/Skills"
import Experience from "@/src/components/Experience"
import Achievements from "@/src/components/Achievements"
import Contact from "@/src/components/Contact"
import Footer from "@/src/components/Footer"

export default function Home() {
  const [activeNav, setActiveNav] = useState("home")

  return (
    <>
      <Navigation activeNav={activeNav} setActiveNav={setActiveNav} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
