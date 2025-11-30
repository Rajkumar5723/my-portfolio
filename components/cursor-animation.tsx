"use client"

import { useEffect, useState } from "react"

export default function CursorAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    window.addEventListener("mousemove", updateCursorPosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", () => setHidden(true))
    window.addEventListener("mouseenter", () => setHidden(false))

    handleLinkHoverEvents()

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", () => setHidden(true))
      window.removeEventListener("mouseenter", () => setHidden(false))

      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", () => setLinkHovered(true))
        el.removeEventListener("mouseleave", () => setLinkHovered(false))
      })
    }
  }, [])

  const cursorClasses = `
    fixed pointer-events-none z-50 transition-transform duration-150
    mix-blend-difference
    ${hidden ? "opacity-0" : "opacity-100"}
    ${clicked ? "scale-75" : "scale-100"}
    ${linkHovered ? "scale-150" : "scale-100"}
  `

  return (
    <>
      {/* Main cursor - larger circle with cyan border */}  
      <div
        className={`${cursorClasses} w-8 h-8 rounded-full`}
        style={{
          border: "2px solid #22d3ee",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease, left 0.1s ease-out, top 0.1s ease-out",
          boxShadow: "0 0 15px #22d3ee88", // slightly transparent glow
        }}
      />

      {/* Secondary cursor - smaller circle with same cyan fill */}
      <div
        className={`${cursorClasses} w-3 h-3 rounded-full`}
        style={{
          backgroundColor: "#22d3ee",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.05s ease, left 0.01s linear, top 0.01s linear",
          boxShadow: "0 0 10px #22d3eeaa",
        }}
      />
    </>
  )
}
