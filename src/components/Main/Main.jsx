import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import './Main.css';

function Main(){

  return(
    <main className="flex-column-center main-wrapper">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main;