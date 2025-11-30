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
import InteractiveProjectCard from "@/components/interactive-project-card"
import InteractiveContact from "@/components/interactive-contact"
import DroppingName from "@/components/dropping-name"
import AnimatedHeroTitle from "@/components/animated-hero-title"
import InteractiveDescription from "@/components/interactive-description"
import PublicationCard from "@/components/publication-card"
import AchievementsGrid from "@/components/achievements-grid"
import EnhancedExperienceCard from "@/components/enhanced-experience-card"
import EducationHighlight from "@/components/education-highlight"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    publications: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    expertise: useRef<HTMLDivElement>(null),
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

  const projects = [
    {
      id: 1,
      title: "VibeCheckHQ – Multi-Platform Influencer Sentiment Insights",
      description:
        "Uses BERT, XLNet, RoBERTa, and Llama-based feedback to classify multi-emotion sentiments across social media platforms.",
      image: "/images/Vibe.png",
      technologies: ["BERT", "XLNet", "RoBERTa", "Llama LLM", "BeautifulSoup", "Selenium"],
      category: "Data",
      link: "/projects/1",
      github: "https://github.com/Rajkumar5723/VibeCheckHQ",
    },
    {
      id: 2,
      title: "Smart BPM – AI Prioritizer",
      description:
        "Automates speech classification and sentiment analysis for BPO workflows. By automatically prioritizing urgent tickets and escalating critical cases, it cuts customer resolution times.",
      image: "/images/BPO.png?height=400&width=600",
      technologies: ["Sentiment Analysis", "NLP", "Workflow Automation", "Python", "Flask"],
      category: "AI",
      link: "/projects/3",
      github: "https://github.com/Rajkumar5723/SmartBPM",
    },
    {
      id: 5,
      title: "Book Popularity Insights – Web Scraping & Analytics",
      description:
        "A data-driven platform that monitors book sales and popularity trends across leading eBook sites. BeautifulSoup and Selenium handle daily web scraping, while Pandas organizes the data.",
      image: "/images/book.jpg?height=400&width=600",
      technologies: ["Web Scraping", "Data Visualization", "Pandas", "Tableau"],
      category: "Data",
      link: "/projects/5",
      github: "https://github.com/Rajkumar5723/BookInsights",
    },
  ]

  const allExperience = [
    {
      id: 1,
      title: "Data Scientist Intern",
      company: "CloudCouch",
      period: "Aug 2025 – Present",
      location: "Hyderbad",
      highlights: [
        "Building end-to-end ML-integrated web applications for partner companies",
        "Developing LLM-powered automation systems, enhancing productivity and reducing manual workflows",
        "Designing and deploying cloud-ready AI models using Python, FastAPI, and Google Cloud",
        "Supporting teams in integrating real-time analytics, NLP pipelines, and model-serving APIs",
      ],
    },
    {
      id: 2,
      title: "Data Scientist Intern",
      company: "Poclain Hydraulics",
      period: "Aug 2024 – May 2025",
      location: "Puducherry",
      highlights: [
        "Developed YOLO-based defect detection models to automate hydraulic component inspection",
        "Achieved 40% faster assembly quality checks by optimizing the ML pipeline and OpenCV processing",
        "Improved product fitting accuracy by 25% through predictive analytics and statistical modeling",
        "Reduced production anomalies and costs by 30% through early-detection systems",
        "Built internal dashboards and monitoring tools for real-time quality insights",
      ],
    },
  ]

  const publications = [
  {
    type: "patent" as const,
    title: "Assembly Analyzer — AI-driven Industrial Inspection System",
    year: 2025,
    description:
      "Designed an AI-powered inspection system combining computer-vision object detection and rule-based validation to identify missing components, misalignments, and quality defects in real time. Built for deployment in industrial manufacturing units to improve reliability and reduce manual errors.",
  },
  {
    type: "publication" as const,
    title:
      "Hybrid AI Model for Floorplan Design: Integrating Soil Suitability, Foundation Selection & Builder Ranking",
    venue:
      "ETMIS 2025 – Int. Conference on Emerging Technologies for Multidisciplinary Sciences (Coal City University, Nigeria)",
    year: 2025,
    description:
      "Proposed a hybrid generative + rule-based AI approach for automated floorplan and structural design, incorporating soil suitability analysis, foundation selection criteria, and builder ranking logic.",
  },
  {
    type: "publication" as const,
    title: "Neural Language Model Foundations",
    venue: "Book Chapter – Wiley–Scrivener Publishing",
    year: 2025,
    description:
      "Authored a comprehensive chapter covering modern transformer architectures, contextual embeddings, attention mechanisms, and their application in real-world natural language processing systems.",
  },
  {
    type: "publication" as const,
    title: "Multimodal Speech Interaction",
    venue: "Book Chapter – Wiley–Scrivener Publishing",
    year: 2025,
    description:
      "Contributed a chapter exploring multimodal speech-based AI interfaces, combining acoustic processing, emotion recognition, and real-time conversational models for accessibility and human-computer interaction applications.",
  }
]


  const achievements = [
    {
      title: "Winner – National Hackathon 2024",
      rank: "1st Place",
      description: "Developed an IBM-focused AI-powered sentiment analysis platform using deep learning + Flask.",
    },
    {
      title: "Top 50 – EcoAI Challenge 2023",
      rank: "Top 50/Thousands",
      description: "Recognized for designing a sustainable AI solution for environmental analytics by IIM Ahmedabad.",
    },
    {
      title: "Top 5 – Data Quezt 2024",
      rank: "Top 5/500+",
      description: "Ranked among 500+ participants in an advanced analytics competition at Vivekanand College.",
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

            <InteractiveDescription text="I build AI systems that turn raw data into intelligent, accessible, and scalable solutions. My expertise spans machine learning, NLP, computer vision, and cloud-native AI, with a strong focus on speech technologies, automation, and real-time analytics." />

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-inter rounded-2xl"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-inter rounded-2xl"
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

          <div className="max-w-2xl mx-auto space-y-8">
            {allExperience.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={0.1 * index}>
                <EnhancedExperienceCard
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  highlights={exp.highlights}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <HorizontalTimeline />
      </section>

      {/* Publications & Patents + Achievements Section */}
      <section ref={sectionRefs.publications} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Publications & Patents */}
            <div>
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-blue-400"></span> Publications & Patents
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              </div>

              <p className="text-gray-300 mb-8">
                Research contributions and patented innovations in AI and machine learning.
              </p>

              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <ScrollReveal key={index} delay={0.1 * index}>
                    <PublicationCard
                      title={pub.title}
                      type={pub.type}
                      venue={pub.venue}
                      year={pub.year}
                      description={pub.description}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: Achievements */}
            <div>
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-yellow-400"></span> Achievements
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              </div>

              <p className="text-gray-300 mb-8">
                Recognitions and awards for innovation, research, and competitive excellence.
              </p>

              <ScrollReveal>
                <AchievementsGrid achievements={achievements} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={sectionRefs.education} className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Education" />

          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <p className="text-lg text-gray-300">Academic foundation and key areas of expertise.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <EducationHighlight
              degree="B.Tech in Artificial Intelligence & Data Science"
              institution="Sri Manakula Vinayagar Engineering College"
              period="2022 – Present"
              cgpa="7.52 / 10"
              focusAreas={[
                "Machine Learning & Deep Learning",
                "Data Structures & Algorithms",
                "Computer Vision & NLP",
                "Cloud Computing & MLOps",
                "Big Data & Analytics",
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={sectionRefs.skills} className="py-20">
        <TechIconsGrid />
      </section>

      {/* Expertise Section */}
      <section ref={sectionRefs.expertise} className="py-20">
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
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 font-inter rounded-2xl">
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

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400"></div>
      </footer>
    </main>
  )
}
