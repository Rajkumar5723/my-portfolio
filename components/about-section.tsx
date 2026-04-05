"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Database, Server, Code } from "lucide-react"
import type { JSX } from "react"

interface AboutCardProps {
  title: string
  description: string
  icon: JSX.Element
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  color: string
  hoverBorderColor: string
  hoverGradient: string
  iconColor: string
}

function AboutCard({
  title,
  description,
  icon,
  isActive,
  onMouseEnter,
  onMouseLeave,
  color,
  hoverBorderColor,
  hoverGradient,
  iconColor,
}: AboutCardProps) {
  return (
    <motion.div
      className="bg-[#0f0f1a] p-6 rounded-2xl relative overflow-hidden transition-all duration-300"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isActive ? hoverBorderColor : "transparent",
        background: isActive ? hoverGradient : "#0f0f1a",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-4">
        <motion.div
          className={`${color} p-3 rounded-2xl`}
          animate={{
            backgroundColor: isActive ? iconColor : "rgba(26, 26, 46, 1)",
          }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <div>
          <motion.h3
            className="text-xl font-bold mb-2"
            animate={{
              color: isActive
                ? hoverBorderColor.replace("rgba(", "rgb(").replace(", 0.5)", ")")
                : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>

      {isActive && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${hoverBorderColor.replace(", 0.5)", ", 0.8)" )}, transparent 70%)`,
            zIndex: 0,
          }}
        />
      )}
    </motion.div>
  )
}

interface SummaryParagraphProps {
  text: string
  isActive: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  borderColor: string
  glowColor: string
}

function SummaryParagraph({
  text,
  isActive,
  onMouseEnter,
  onMouseLeave,
  borderColor,
  glowColor,
}: SummaryParagraphProps) {
  return (
    <motion.div
      className="bg-[#0f0f1a] p-6 rounded-2xl relative overflow-hidden transition-all duration-300"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: isActive ? borderColor : "transparent",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      {isActive && (
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
            zIndex: 0,
          }}
        />
      )}
      <p className="text-gray-300 relative z-10">{text}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [activeParagraph, setActiveParagraph] = useState<number | null>(null)

  const cards = [
    {
      title: "Backend Development",
      description: "Designing scalable and efficient server-side applications using Flask, Docker, MongoDB, Nginx, and CI/CD pipelines.",
      icon: <Server className="w-8 h-8" />,
      color: "bg-purple-900/50",
      hoverBorderColor: "rgba(139, 92, 246, 0.5)",
      hoverGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(30, 27, 75, 0.1))",
      iconColor: "rgba(139, 92, 246, 0.3)",
    },
    {
      title: "Machine Learning",
      description: "Building, training, and deploying machine learning models using PyTorch, TensorFlow, Scikit-learn, and MLflow for real-world applications.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-cyan-900/50",
      hoverBorderColor: "rgba(6, 182, 212, 0.5)",
      hoverGradient: "linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(21, 94, 117, 0.1))",
      iconColor: "rgba(6, 182, 212, 0.3)",
    },
    {
      title: "API Development",
      description: "Creating secure, high-performance RESTful APIs and real-time communication layers using Flask, FastAPI, and Socket.IO.",
      icon: <Code className="w-8 h-8" />,
      color: "bg-purple-900/50",
      hoverBorderColor: "rgba(139, 92, 246, 0.5)",
      hoverGradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(30, 27, 75, 0.1))",
      iconColor: "rgba(139, 92, 246, 0.3)",
    },
  ]

  const paragraphs = [
    {
      text: "I'm a B.Tech. student in Artificial Intelligence & Data Science at Sri Manakula Vinayagar Engineering College, eager to blend academic knowledge with hands-on projects. My interests range from speech and audio processing to large-scale data analytics and cloud deployments.",
      borderColor: "rgba(139, 92, 246, 0.5)",
      glowColor: "rgba(139, 92, 246, 0.3)",
    },
    {
      text: "Between lectures, you'll find me competing in hackathons, publishing AI research, and contributing to open-source communities. Outside of tech, I enjoy exploring new research avenues, writing on Medium, and engaging in data-driven social impact initiatives.",
      borderColor: "rgba(6, 182, 212, 0.5)",
      glowColor: "rgba(6, 182, 212, 0.3)",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-16"></div>
        </motion.div>

        <motion.div className="text-center max-w-3xl mx-auto mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-lg text-gray-300">
            I'm a Data Scientist & AI Developer with a strong backend focus, passionate about building robust and scalable applications.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div className="flex items-center mb-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h2 className="text-2xl font-bold">Professional</h2>
            <span className="text-2xl font-bold text-cyan-400 ml-2">Summary</span>
            <div className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 ml-4 flex-grow"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">{paragraphs.map((paragraph, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
                <SummaryParagraph text={paragraph.text} isActive={activeParagraph === index} onMouseEnter={() => setActiveParagraph(index)} onMouseLeave={() => setActiveParagraph(null)} borderColor={paragraph.borderColor} glowColor={paragraph.glowColor} />
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}>
                <AboutCard title={card.title} description={card.description} icon={card.icon} isActive={activeCard === index} onMouseEnter={() => setActiveCard(index)} onMouseLeave={() => setActiveCard(null)} color={card.color} hoverBorderColor={card.hoverBorderColor} hoverGradient={card.hoverGradient} iconColor={card.iconColor} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
