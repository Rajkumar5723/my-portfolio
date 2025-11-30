"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let timeout: NodeJS.Timeout

    // Start with a shorter delay
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          // Increase the speed by using a larger increment
          const newProgress = prevProgress + Math.random() * 5

          if (newProgress >= 100) {
            clearInterval(interval)
            setIsComplete(true)

            // Add a shorter delay before calling onLoadingComplete
            setTimeout(() => {
              onLoadingComplete()
            }, 300)

            return 100
          }

          return newProgress
        })
      }, 50) // Reduced interval time from 100ms to 50ms
    }, 300) // Reduced initial delay from 500ms to 300ms

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center z-50 ${
        isComplete ? "opacity-0 pointer-events-none transition-opacity duration-300" : ""
      }`}
    >
      <div className="w-16 h-16 border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-500 border-l-transparent rounded-full animate-spin mb-8"></div>

      <h1 className="text-purple-400 text-2xl font-medium mb-8">Rajkumar</h1>

      <div className="w-64 h-2 bg-gray-800 rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-gray-400 text-sm">Loading portfolio... {Math.floor(progress)}%</p>
    </div>
  )
}
