import './App.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
