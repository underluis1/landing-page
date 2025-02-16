"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 max-w-3xl mx-auto text-center"
        >
         m a passionate full-stack developer with expertise in modern web technologies. I love creating efficient,
          scalable, and user-friendly applications that solve real-world problems. With a keen eye for design and a
          strong foundation in both front-end and back-end development, I bring ideas to life through clean,
          maintainable code.
        </motion.p>
      </div>
    </section>
  )
}

