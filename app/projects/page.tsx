"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import SectionTitle from "@/components/section-title"
import InteractiveProjectCard from "@/components/interactive-project-card"
import ScrollReveal from "@/components/scroll-reveal"
import CursorAnimation from "@/components/cursor-animation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const projects = [
    {
      id: 1,
      title: "VibeCheckHQ – Multi-Platform Influencer Sentiment Insights",
      description:
        "A social media sentiment and emotion analysis platform that collects user comments from YouTube, Instagram, Facebook, and Twitter. Uses an ensemble of transformer models (BERT, XLNet, RoBERTa) to detect standard sentiment classes and finer emotions.",
      image: "/images/Vibe.png?height=400&width=600",
      technologies: ["BERT", "XLNet", "RoBERTa", "Llama LLM", "NLP", "Python"],
      category: "Data",
      link: "/projects/1",
      github: "https://github.com/rajkumar5723/VibeCheckHQ",
    },
    {
      id: 2,
      title: "Smart BPM – AI Prioritizer",
      description:
        "Automates speech classification and sentiment analysis for BPO workflows. By automatically prioritizing urgent tickets and escalating critical cases, it cuts customer resolution times.",
      image: "/images/BPO.png?height=400&width=600",
      technologies: ["Sentiment Analysis", "NLP", "Workflow Automation", "Python", "Flask"],
      category: "AI",
      link: "/projects/2",
      github: "https://github.com/Rajkumar5723/SmartBPM",
    },
    {
      id: 3,
      title: "Automatic Annotation – Image Labeller",
      description:
        "A specialized system that auto-labels objects in images using YOLOv11-L, reaching 98% annotation accuracy. Drastically reduces manual labeling overhead for computer vision tasks.",
      image: "/images/Auto.png?height=400&width=600", // Update this if you have a new image
      technologies: ["Computer Vision", "Object Detection", "YOLO", "Python", "OpenCV"],
      category: "AI",
      link: "/projects/3",
      github: "https://github.com/Rajkumar5723/AnnotAIte",
    },
    {
      id: 4,
      title: "Cardionexus - Heart Disease Prediction",
      description:
        "An ensemble-based heart disease prediction model that employs Voting Classifier and Stacking methods for robust accuracy. Deployed with a Flask-powered dashboard.",
      image: "/images/heart.png?height=400&width=600", // Update this if you have a new image
      technologies: ["Healthcare", "Ensemble Learning", "Data Analytics", "Flask"],
      category: "Data",
      link: "/projects/4",
      github: "https://github.com/Rajkumar5723/CARDIONEXUS",
    },
    {
      id: 5,
      title: "Book Popularity Insights – Web Scraping & Analytics",
      description:
        "A data-driven platform that monitors book sales and popularity trends across leading eBook sites. BeautifulSoup and Selenium handle daily web scraping, while Pandas organizes the data.",
      image: "/images/book.jpg?height=400&width=600", // Update this if you have a new image
      technologies: ["Web Scraping", "Data Visualization", "Pandas", "Tableau"],
      category: "Data",
      link: "/projects/5",
      github: "https://github.com/Rajkumar5723/BookInsights",
    },
  ]  

  const filteredProjects = projects
    .filter((project) => activeFilter === "All" || project.category === activeFilter)
    .filter(
      (project) =>
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())),
    )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white font-poppins">
      <CursorAnimation />

      {/* Animated background gradient */}
      <div className="fixed inset-0 z-0 bg-[#0a0a14]">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a14]/80 backdrop-blur-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-400 font-signature">
            <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Rajkumar G
            </motion.span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-white/80 font-inter ${
                  item === "Projects"
                    ? "text-white border-b-2 border-gradient-to-r from-purple-500 to-blue-500"
                    : "text-white/60"
                }`}
              >
                <motion.span whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  {item}
                </motion.span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      <main className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Back button with animation */}
        <motion.div
          className="mb-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-inter"
          >
            <motion.div whileHover={{ x: -5 }} whileTap={{ x: 0 }}>
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </motion.div>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <SectionTitle title="My Projects" />
        </motion.div>

        <motion.div
          className="text-center max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ScrollReveal>
            <p className="text-lg text-gray-300 font-poppins">
              A showcase of my recent work and projects I&apos;ve been involved with.
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Search and filter controls */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center">
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="relative"
                >
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-800 border-gray-700 focus:border-purple-500 pr-8 font-inter"
                  />
                  {searchQuery && (
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      onClick={() => setSearchQuery("")}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSearch(!showSearch)}
              className="ml-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Projects grid with staggered animation */}
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, zIndex: 20 }}
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <InteractiveProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      technologies={project.technologies}
                      category={project.category}
                      link={project.link}
                      github={project.github}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-xl text-gray-400 mb-4 font-poppins">No projects found matching your criteria</p>
                  <Button
                    onClick={() => {
                      setActiveFilter("All")
                      setSearchQuery("")
                    }}
                    className="bg-purple-600 hover:bg-purple-700 font-inter"
                  >
                    Reset Filters
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading animation */}
        {!isLoaded && (
          <div className="flex justify-center items-center py-20">
            <div className="w-16 h-16 border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </main>

      {/* Floating action button to scroll to top */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg z-20 font-inter"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft className="w-5 h-5 transform rotate-90" />
      </motion.button>
    </div>
  )
}
