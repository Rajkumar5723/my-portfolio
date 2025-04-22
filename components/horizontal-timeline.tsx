"use client"

import { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

interface TimelineEvent {
  date: string
  title: string
  color: string
  month: string
  year: string
  position: "top" | "bottom"
  description?: string
  image?: string
}

export default function HorizontalTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const [activeEvent, setActiveEvent] = useState<number | null>(null)
  const [isTouched, setIsTouched] = useState<boolean>(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const events: TimelineEvent[] = [
    {
      date: "May 2022",
      title: "Completed 12th Grade",
      color: "bg-purple-500",
      month: "May",
      year: "2022",
      position: "top",
      description:
        "Graduated high school with distinction in science and mathematics.",
    },
    {
      date: "Oct 2022",
      title: "Enrolled in College",
      color: "bg-purple-600",
      month: "Oct",
      year: "2022",
      position: "bottom",
      description:
        "Began B.Tech in Artificial Intelligence & Data Science at Sri Manakula Vinayagar Engineering College.",
    },
    {
      date: "Dec 2022",
      title: "Started Learning Programming",
      color: "bg-pink-500",
      month: "Dec",
      year: "2022",
      position: "top",
      description:
        "Dove into programming fundamentals, algorithms, and data structures.",
    },
    {
      date: "Jan 2023",
      title: "Mastered HTML/CSS/JS",
      color: "bg-orange-500",
      month: "Jan",
      year: "2023",
      position: "bottom",
      description:
        "Wrapped up core web‑development skills with HTML5, CSS3, and JavaScript.",
    },
    {
      date: "May 2023",
      title: "Ventured into Machine Learning",
      color: "bg-cyan-500",
      month: "May",
      year: "2023",
      position: "top",
      description:
        "Explored supervised ML algorithms and model‑evaluation techniques.",
    },
    {
      date: "Aug 2023",
      title: "Built with Flask & MERN Stack",
      color: "bg-blue-500",
      month: "Aug",
      year: "2023",
      position: "bottom",
      description:
        "Created REST APIs and full‑stack apps using Flask, Node.js, Express, and MongoDB.",
    },
    {
      date: "Feb 2024",
      title: "Data‑Viz with Tableau & Power BI",
      color: "bg-cyan-400",
      month: "Feb",
      year: "2024",
      position: "top",
      description:
        "Designed interactive dashboards and storytelling visuals for data insights.",
    },
    {
      date: "Jun 2024",
      title: "Dived into Cloud Computing",
      color: "bg-green-500",
      month: "Jun",
      year: "2024",
      position: "bottom",
      description:
        "Studied core AWS and Azure services, focusing on scalable, serverless patterns.",
    },
    {
      date: "Jul 2024",
      title: "Applied AI & Data Science in Industry",
      color: "bg-purple-400",
      month: "Jul",
      year: "2024",
      position: "top",
      description:
        "Started building real‑world AI/Data‑Science projects for corporate use‑cases.",
    },
  ]

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
        duration: 0.3,
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
        duration: 0.3,
      },
    }),
  }

  const handleEventClick = (index: number) => {
    if (activeEvent === index) {
      setActiveEvent(null)
      setIsTouched(false)
    } else {
      setActiveEvent(index)
      setIsTouched(true)
    }
  }

  return (
    <div className="py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-poppins">Timeline</h2>
        <p className="text-gray-400 font-poppins">Follow my learning journey through the years</p>
      </div>

      <div ref={timelineRef} className="relative max-w-6xl mx-auto py-10">
        {/* Timeline line */}
        <motion.div
          className="absolute h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 top-1/2 left-0 right-0 transform -translate-y-1/2"
          variants={lineVariants}
          initial="hidden"
          animate={controls}
        />

        {/* Timeline events */}
        <div className="relative flex justify-between">
          {events.map((event, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Event dot */}
              <motion.div
                className={`w-4 h-4 rounded-full ${event.color} z-10 relative cursor-pointer`}
                variants={dotVariants}
                custom={index}
                initial="hidden"
                animate={controls}
                whileHover={{ scale: 1.5 }}
                onClick={() => handleEventClick(index)}
              />

              {/* Event title and date */}
              <motion.div
                className={`absolute w-32 ${event.position === "top" ? "-top-24" : "top-6"} text-center`}
                variants={textVariants}
                custom={index}
                initial="hidden"
                animate={controls}
              >
                <div className="text-sm font-medium font-poppins">{event.title}</div>
                <div className={`text-sm ${event.color.replace("bg-", "text-")} font-inter`}>{event.date}</div>
              </motion.div>

              {/* Detailed event card on click/touch */}
              <AnimatePresence>
                {activeEvent === index && (
                  <motion.div
                    className={`absolute ${
                      index % 2 === 0 ? "top-16" : "-top-48"
                    } w-64 bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg border border-${event.color.replace(
                      "bg-",
                      "",
                    )}/50 z-20 shadow-lg`}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-bold text-lg ${event.color.replace("bg-", "text-")} font-poppins`}>
                        {event.title}
                      </h4>
                      {event.image && (
                        <div className="relative w-10 h-10 ml-2">
                          <Image
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-2 font-poppins">{event.description}</p>
                    <div className="text-right">
                      <span className={`text-sm ${event.color.replace("bg-", "text-")} font-inter`}>{event.date}</span>
                    </div>

                    {/* Triangle pointer */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "-top-2" : "-bottom-2"
                      } left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent ${
                        index % 2 === 0
                          ? `border-b-[8px] border-b-${event.color.replace("bg-", "")}/50`
                          : `border-t-[8px] border-t-${event.color.replace("bg-", "")}/50`
                      }`}
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 font-inter text-sm">
        {isTouched
          ? "Click on a point to close details"
          : "Hover or click on the timeline points to explore my learning journey"}
      </div>
    </div>
  )
}