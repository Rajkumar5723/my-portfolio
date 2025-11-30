"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TimelineEvent {
  date: string
  title: string
  color: string
  month: string
  year: string
}

export default function InteractiveTimeline({ events }: { events: TimelineEvent[] }) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 })

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(`${a.month} ${a.year}`)
    const dateB = new Date(`${b.month} ${b.year}`)
    return dateA.getTime() - dateB.getTime()
  })

  const handleEventHover = (index: number) => {
    setActiveEvent(index)
  }

  const handleEventLeave = () => {
    setActiveEvent(null)
  }

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  }

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div ref={timelineRef} className="relative py-10">
      {/* Timeline line */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 top-1/2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
        variants={lineVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      />

      {/* Timeline events */}
      <div className="relative flex justify-between items-center">
        {sortedEvents.map((event, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
            onMouseEnter={() => handleEventHover(index)}
            onMouseLeave={handleEventLeave}
          >
            {/* Event dot */}
            <motion.div
              className={`relative w-6 h-6 rounded-full ${event.color} border-4 border-[#0a0a14] z-10 cursor-pointer transition-transform duration-300 ${activeEvent === index ? "scale-150" : ""}`}
              variants={dotVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            />

            {/* Event content - alternating top/bottom */}
            <motion.div
              className={`absolute w-48 ${index % 2 === 0 ? "-top-32" : "top-10"} ${activeEvent === index ? "z-20" : "z-10"}`}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <div
                className={`bg-[#0f0f1a] p-4 rounded-lg shadow-lg transform transition-all duration-300 ${activeEvent === index ? "scale-110" : "scale-100"}`}
              >
                <h4 className="font-bold text-lg">{event.title}</h4>
                <p className={`${event.color.replace("bg-", "text-")}`}>{event.date}</p>
              </div>

              {/* Connector line */}
              <div
                className={`absolute left-1/2 w-0.5 ${index % 2 === 0 ? "h-10 -bottom-10" : "h-10 -top-10"} ${event.color} transform -translate-x-1/2`}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
