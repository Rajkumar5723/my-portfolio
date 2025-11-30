"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white flex flex-col items-center justify-center font-poppins">
      <motion.div
        className="w-20 h-20 border-4 border-t-purple-500 border-r-blue-500 border-b-cyan-500 border-l-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <motion.h2
        className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-poppins"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Loading Projects
      </motion.h2>

      <motion.div
        className="mt-4 flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-purple-500"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      <motion.p
        className="mt-6 text-gray-400 font-inter text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Preparing amazing projects for you...
      </motion.p>
    </div>
  )
}
