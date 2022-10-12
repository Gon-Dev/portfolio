import technologies from './section-technologies.js';
import tools from './section-tools.js';
import SkillsSection from './SkillsSection.jsx';
import './Skills.css';
function Skills(){
  return(
    <section className="skills-wrapper flex-column-center">
      <div className="marquee-wrapper flex-row-center band-up">
        <p className="marquee-text"> HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | HTML | CSS | JAVASCRIPT | REACT | </p>
      </div>
      <SkillsSection title="Technologies" data={technologies} />
      <div className="skills-line"></div>
      <SkillsSection title="Tools" data={tools} />
      <div className="marquee-wrapper flex-row-center band-down">
        <p className="marquee-text"> GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT | FIGMA | VITE | VERCEL | GIT |  </p>
      </div>
    </section>
  )
}

export default Skills;