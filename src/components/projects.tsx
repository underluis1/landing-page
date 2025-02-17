"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  { id: 1, title: "Landing Ristoranti", description: "Moderna landing page per ristoranti" , img: "/Project1.png?height=200&width=400" , link: "https://restaurants-landing.netlify.app/"},
  { id: 2, title: "Project 2", description: "A brief description of Project 2" , img:"/Placeholder.webp?height=200&width=400" , link: "https://raffaelelugibello.it"},
  { id: 3, title: "Project 3", description: "A brief description of Project 3" , img:"/Placeholder.webp?height=200&width=400" , link: "https://raffaelelugibello.it" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              onClick={() => window.open(project.link)}

            >
              <Image
                src={project.img}
                width={400}
                height={200}
                alt={project.title}
                className="w-full h-48 object-cover"
                
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

