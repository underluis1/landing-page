
"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-10 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src="./ghost.svg" alt="Ghost" className="w-[50px] h-[40px]"/>
        
        <ul className="flex space-x-6">
          {["About", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

