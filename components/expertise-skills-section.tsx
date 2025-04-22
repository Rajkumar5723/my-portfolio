"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
  position: {
    row: number
    col: number
  }
}

export default function ExpertiseSkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [modernAIHovered, setModernAIHovered] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const categories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [{ name: "Python" }, { name: "SQL" }, { name: "R" }, { name: "C" }, { name: "Java" }],
      position: { row: 0, col: 0 },
    },
    {
      name: "Machine Learning",
      skills: [{ name: "TensorFlow" }, { name: "PyTorch" }, { name: "Scikit-learn" }, { name: "Keras" }],
      position: { row: 0, col: 1 },
    },
    {
      name: "Data Analysis & Visualization",
      skills: [
        { name: "Pandas" },
        { name: "NumPy" },
        { name: "Power BI" },
        { name: "Tableau" },
        { name: "Matplotlib" },
        { name: "Seaborn" },
      ],
      position: { row: 0, col: 2 },
    },
    {
      name: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "SQLite" }],
      position: { row: 1, col: 0 },
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "Microsoft Azure" },
        { name: "Git" },
        { name: "Hugging Face" },
        { name: "AWS" },
        { name: "Docker" },
      ],
      position: { row: 1, col: 1 },
    },
    {
      name: "Big Data",
      skills: [{ name: "Apache Spark" }, { name: "Hadoop" }, { name: "Kafka" }],
      position: { row: 1, col: 2 },
    },
    {
      name: "Web Technologies",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }, { name: "Flask" }],
      position: { row: 2, col: 0 },
    },
    {
      name: "MLOps",
      skills: [{ name: "MLflow" }, { name: "CI/CD Pipelines" }, { name: "Containerization" }],
      position: { row: 2, col: 1 },
    },
    {
      name: "Modern AI Techniques",
      skills: [
        { name: "Llama LLM" },
        { name: "Generative AI" },
        { name: "Prompt Engineering" },
      ],
      position: { row: 2, col: 2 },
    },
  ]

  // Group categories by row
  const getRowCategories = (rowIndex: number) => {
    return categories
      .filter((category) => category.position.row === rowIndex)
      .sort((a, b) => a.position.col - b.position.col)
  }

  const row0 = getRowCategories(0)
  const row1 = getRowCategories(1)
  const row2 = getRowCategories(2)

  // Special handling for Modern AI Techniques
  const handleModernAIHover = () => {
    setHoveredCategory("Modern AI Techniques")
    setModernAIHovered(true)
  }

  const handleModernAILeave = () => {
    setHoveredCategory(null)
    setModernAIHovered(false)
  }

  if (!isClient) {
    return null
  }

  const renderCategory = (category: SkillCategory) => {
    const isModernAI = category.name === "Modern AI Techniques"
    const isHovered = isModernAI ? modernAIHovered : hoveredCategory === category.name

    return (
      <div key={category.name} className="relative">
        {isHovered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-700 rounded-lg p-4 flex flex-wrap gap-2 justify-center items-center min-h-[60px] min-w-[240px] md:min-w-[200px]"
            onMouseEnter={isModernAI ? handleModernAIHover : () => setHoveredCategory(category.name)}
            onMouseLeave={isModernAI ? handleModernAILeave : () => setHoveredCategory(null)}
          >
            {category.skills.map((skill) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-800 text-white px-3 py-1 rounded"
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          <motion.div
            onMouseEnter={isModernAI ? handleModernAIHover : () => setHoveredCategory(category.name)}
            onMouseLeave={isModernAI ? handleModernAILeave : () => setHoveredCategory(null)}
            className="px-6 py-3 rounded-full bg-gray-800 text-white min-w-[240px] md:min-w-[200px] flex justify-center items-center"
            whileHover={{ scale: 1.05 }}
          >
            {category.name}
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-20">
      <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wider">EXPERTISE</h2>

      <div className="space-y-4 px-4">
        {/* Row 0 */}
        <div className="flex flex-wrap justify-center gap-4">{row0.map(renderCategory)}</div>

        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-4">{row1.map(renderCategory)}</div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-4">{row2.map(renderCategory)}</div>
      </div>
    </div>
  )
}

