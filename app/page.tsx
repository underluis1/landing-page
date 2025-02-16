import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <  Header />
      <main>
          <Hero /> 
        <About />
         <Projects />
         <Contact />
      </main>
    <Footer />
    </div>
  )
}

