import technologies from './section-technologies.js';
import tools from './section-tools.js';
import SkillsSection from './SkillsSection.jsx';
import './Skills.css';
function Skills(){
  return(
    <section className="skills-wrapper flex-column-center">
      
      <div className="marquee-container">
        <div className="marquee-text marquee-up-first">&nbsp;\ HTML \ CSS \ JAVASCRIPT \ REACT</div>
        <div className="marquee-text marquee-up-second">&nbsp;\ HTML \ CSS \ JAVASCRIPT \ REACT</div>
      </div>

      <div className="skills-main-wrapper">
        <SkillsSection title="Technologies" data={technologies} />
        <div className="skills-line"></div>
        <SkillsSection title="Tools" data={tools} />

      </div>

      <div className="marquee-container">
        <div className="marquee-text marquee-down-first">&nbsp;/ GIT / FIGMA / VITE / VERCEL</div>
        <div className="marquee-text marquee-down-second">&nbsp;/ GIT / FIGMA / VITE / VERCEL</div>
      </div>

    </section>
  )
}

export default Skills;