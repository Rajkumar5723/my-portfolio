"use client"

import { motion } from "framer-motion"

interface DroppingNameProps {
  name: string
}

export default function DroppingName({ name }: DroppingNameProps) {
  const letterVariants = {
    initial: { y: -100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  }

  return (
    <div className="inline-block">
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className="inline-block text-6xl md:text-8xl font-bold font-signature"
          whileHover={{
            y: -10,
            transition: { duration: 0.2 },
          }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  )
}
