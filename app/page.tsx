"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ParticleBackground from "@/components/particle-background"
import SectionTitle from "@/components/section-title"
import HorizontalTimeline from "@/components/horizontal-timeline"
import CursorAnimation from "@/components/cursor-animation"
import TechIconsGrid from "@/components/tech-icons-grid"
import LoadingScreen from "@/components/loading-screen"
import ExpertiseSkillsSection from "@/components/expertise-skills-section"
import ScrollReveal from "@/components/scroll-reveal"
import AboutSection from "@/components/about-section"
import InteractiveExperienceCard from "@/components/interactive-experience-card"
import InteractiveProjectCard from "@/components/interactive-project-card"
import InteractiveContact from "@/components/interactive-contact"
import InteractiveKeyTechnologies from "@/components/interactive-key-technologies"
import InteractiveAchievementCard from "@/components/interactive-achievement-card"
import InteractiveEducationCard from "@/components/interactive-education-card"
import DroppingName from "@/components/dropping-name"
import AnimatedHeroTitle from "@/components/animated-hero-title"
import InteractiveDescription from "@/components/interactive-description"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [showMore, setShowMore] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop
          const height = ref.current.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section as keyof typeof sectionRefs]
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      })
    }
  }

  const technologies = ["Python", "TensorFlow", "PyTorch", "NLP", "Machine Learning", "Data Analysis", "Cloud"]

  const projects = [
  {
    id: 1,
    title: "VibeCheckHQ – Multi-Platform Influencer Sentiment Insights",
    description:
      "Uses BERT, XLNet, RoBERTa, and Llama-based feedback to classify multi-emotion sentiments across social media platforms.",
    image: "/images/Vibe.png",
    technologies: ["BERT", "XLNet", "RoBERTa", "Llama LLM","BeautifulSoup", "Selenium"],
    category: "Data",
    link: "/projects/1",
    github: "https://github.com/Rajkumar5723/VibeCheckHQ",
  },
  {
    id: 2,
    title: "VoxSign – Inclusive Speech-to-Sign System",
    description: "Real-time speech-to-text (including impaired speech) converting audio into ISL avatar animations.",
    image: "/images/Voxsign.png",
    technologies: ["Speech Processing", "NLP", "Deep Learning"],
    category: "AI",
    link: "/projects/2",
    github: "https://github.com/Rajkumar5723/VoxSign",
  },
  {
    id: 3,
    title: "Smart BPO – AI Comment Prioritizer",
    description: "NLP-based sentiment and urgency classification for BPO workflows.",
    image: "/images/BPO.png",
    technologies: ["Sentiment Analysis", "NLP", "Workflow Automation"],
    category: "AI",
    link: "/projects/3",
    github: "https://github.com/Rajkumar5723/SmartBPO",
  },
]


  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <main className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden">
      <ParticleBackground />
      <CursorAnimation />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-400 font-signature">
            Rajkumar G
          </Link>
          <nav className="hidden md:flex space-x-8">
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white/80 font-inter",
                  activeSection === section
                    ? "text-white border-b-2 border-gradient-to-r from-purple-500 to-blue-500"
                    : "text-white/60",
                )}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={sectionRefs.home} className="min-h-screen flex items-center relative pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 text-purple-400 mb-4">
              Hello, I&apos;m
            </div>
            <DroppingName name="Rajkumar" />
            <div className="h-1 w-3/4 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mb-4"></div>

            <AnimatedHeroTitle titles={["Data Scientist", "AI Developer", "ML Engineer"]} interval={3000} />

            <InteractiveDescription text="I create cutting-edge AI systems that transform raw data into actionable insights. With a background in machine learning, NLP, cloud-native AI, and MLOps, I strive to build innovative and inclusive applications—particularly in speech processing and accessibility." />

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-inter"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-inter"
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={sectionRefs.about} className="py-20">
        <AboutSection />
      </section>

      {/* Experience Section */}
      <section ref={sectionRefs.experience} className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Work Experience" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-lg text-gray-300">
                My professional journey and the experience I&apos;ve gained along the way.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-[1fr_2px_1fr] gap-8">
            <ScrollReveal direction="left">
              <InteractiveExperienceCard
                title="Data Analyst Intern"
                company="Poclain Hydraulics"
                period="Apr 2023 - Present"
                location="Remote"
                responsibilities={[
                  "Defect Detection with AI: Developed machine learning models that reduced manual inspection errors by 30%.",
                  "Predictive Analytics: Improved product fitting accuracy by 25% by applying data-driven insights.",
                  "Cost Optimization: Lowered production costs by 30% through anomaly detection and predictive maintenance.",
                  "Quality Control & Supply Chain: Fostered a data-driven culture, enabling proactive decision-making.",
                ]}
                showMore={showMore}
                onToggleShowMore={() => setShowMore(!showMore)}
              />
            </ScrollReveal>

            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-32 w-6 h-6 rounded-full bg-purple-500 border-4 border-[#0a0a14]"></div>
            </div>

            <div className="space-y-8">
              <ScrollReveal direction="right" delay={0.2}>
                <InteractiveKeyTechnologies technologies={technologies} />
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
              <InteractiveAchievementCard
              title="1st Place – National Hackathon 2024"
              description="Achieved first place at the National Hackathon 2024, organized by Arunai Engineering College, for addressing an IBM-sponsored problem statement. Developed a robust AI-powered sentiment analysis platform for social media using Flask and deep learning techniques."
              />

              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <InteractiveEducationCard
                  degree="B.Tech. in Artificial Intelligence & Data Science"
                  institution="Sri Manakula Vinayagar Engineering College"
                  period="2022 - Present"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <HorizontalTimeline />
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="py-20">
        <TechIconsGrid />
        <ExpertiseSkillsSection />
      </section>

      {/* Projects Section */}
      <section ref={sectionRefs.projects} className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="My Projects" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-lg text-gray-300">
                A showcase of my recent work and projects I&apos;ve been involved with.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={0.1 * index}>
                <InteractiveProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  category={project.category}
                  link={project.link}
                  github={project.github}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <ScrollReveal delay={0.3}>
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 font-inter">
                  View All Projects
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Get In Touch" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-lg text-gray-300">
                Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <InteractiveContact />
          </ScrollReveal>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Rajkumar G. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

