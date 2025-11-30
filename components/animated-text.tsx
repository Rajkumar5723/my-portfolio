"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  type?: "word" | "character"
  hoverEffect?: boolean
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  type = "character",
  hoverEffect = true,
}: AnimatedTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getAnimationVariants = () => {
    if (type === "word") {
      return {
        hidden: { y: -100, opacity: 0 },
        visible: (i: number) => ({
          y: 0,
          opacity: 1,
          transition: {
            delay: delay + i * duration,
            duration: 0.5,
            ease: "easeOut",
          },
        }),
      }
    }

    return {
      hidden: { y: -100, opacity: 0 },
      visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: delay + i * duration,
          duration: 0.5,
          ease: "easeOut",
        },
      }),
    }
  }

  const renderText = () => {
    if (type === "word") {
      const words = text.split(" ")
      return (
        <div className={`flex flex-wrap ${className}`}>
          {words.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={getAnimationVariants()}
              initial="hidden"
              animate="visible"
              className="mr-2 inline-block"
              onMouseEnter={() => hoverEffect && setHoveredIndex(index)}
              onMouseLeave={() => hoverEffect && setHoveredIndex(null)}
              style={{
                color: hoveredIndex === index ? `hsl(${(index * 30) % 360}, 80%, 60%)` : "inherit",
                transition: "color 0.3s ease",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      )
    }

    return (
      <div className={`inline-block ${className}`}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={getAnimationVariants()}
            initial="hidden"
            animate="visible"
            className="inline-block"
            onMouseEnter={() => hoverEffect && setHoveredIndex(index)}
            onMouseLeave={() => hoverEffect && setHoveredIndex(null)}
            style={{
              color: hoveredIndex === index ? `hsl(${(index * 15) % 360}, 80%, 60%)` : "inherit",
              transition: "color 0.3s ease",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    )
  }

  return renderText()
}
