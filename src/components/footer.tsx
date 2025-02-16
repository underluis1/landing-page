"use client"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-300">© {new Date().getFullYear()} Raffaele Lugibello. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

