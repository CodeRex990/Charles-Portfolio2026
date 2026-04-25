import { Navbar } from "./layout/Navbar"
import { Hero } from "./sections/Hero"
import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Gallery } from "./sections/Gallery"
import { Tools } from "./sections/tools"
import { useEffect } from "react"; // Added this import
import { Footer } from "./layout/Footer"



function App() {
  //   useEffect(() => {
  //   document.title = "Charles Eduard Español";
  // }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Tools />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App
