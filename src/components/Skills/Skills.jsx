import technologies from './section-technologies.js';
import SkillsSection from './SkillsSection.jsx';
import './Skills.css';
function Skills(){
  return(
    <section className="skills-wrapper flex-column-center">
      <div className="skills-text-band band-up">GIT | HTML | CSS | JAVASCRIPT | REACT | FIGMA | GIT | HTML | CSS | JAVASCRIPT | REACT | FIGMA</div>
      <SkillsSection title="Technologies" data={technologies} />
      <div className="skills-text-band band-down">GIT | HTML | CSS | JAVASCRIPT | REACT | FIGMA | GIT | HTML | CSS | JAVASCRIPT | REACT | FIGMA</div>
    </section>
  )
}

export default Skills;