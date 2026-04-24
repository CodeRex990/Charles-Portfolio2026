import { Navbar } from "./layout/Navbar"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Gallery } from "./sections/Gallery"
import { Tools } from "./sections/tools"



function App() {
  
  return ( <div className="min-h-screen overflow-x-hidden"> <Navbar />
  <main>
    <Navbar />
  </main>
    <Hero  />
    <About />
    <Projects />
    <Experience />
    <Tools />
    <Gallery />
  </div>

  )
}

export default App
