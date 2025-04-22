"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Skill {
  name: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

export default function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories: SkillCategory[] = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "SQL" },
        { name: "R" },
        { name: "C" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Flask" },
      ],
    },
    {
      name: "Machine Learning",
      skills: [{ name: "TensorFlow" }, { name: "PyTorch" }, { name: "Scikit-learn" }, { name: "Keras" }],
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
    },
    {
      name: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "SQLite" }],
    },
    {
      name: "Big Data",
      skills: [{ name: "Apache Spark" }, { name: "Hadoop" }, { name: "Kafka" }],
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
    },
    {
      name: "Web Technologies",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Flask" },
      ],
    },
    {
      name: "MLOps",
      skills: [{ name: "MLflow" }, { name: "Kubeflow" }, { name: "DVC" }],
    },
    {
      name: "Modern AI Techniques",
      skills: [{ name: "Transformers" }, { name: "GANs" }, { name: "Reinforcement Learning" }, { name: "LLMs" }],
    },
  ]

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null)
    } else {
      setActiveCategory(categoryName)
    }
  }

  const getActiveCategory = () => {
    return categories.find((category) => category.name === activeCategory)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wider">Expertise</h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.name}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-6 py-3 rounded-full text-white transition-colors ${
              activeCategory === category.name ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Skills Display Area */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-700/50 rounded-lg p-8 mb-12"
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {getActiveCategory()?.skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  className="bg-gray-800 text-white px-4 py-2 rounded"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

