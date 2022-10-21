import './Skills.css';
import { sectionContext } from '../../App';
import { useContext, useEffect, useRef } from 'react';
import technologies from './section-technologies.js';
import tools from './section-tools.js';
import SkillsSection from './SkillsSection.jsx';
function Skills(){
  const { observer } = useContext(sectionContext);
  const skillsElement = useRef(null);
  useEffect(()=>{ skillsElement ? observer.observe(skillsElement.current) : null},[skillsElement])
  return(
    <section className="skills-wrapper flex-column-center" ref={skillsElement}>
      
      <div className="marquee-container marquee-up">
        <div className="marquee-text marquee-up-first">&nbsp;\ HTML \ CSS \ JAVASCRIPT \ REACT</div>
        <div className="marquee-text marquee-up-second">&nbsp;\ HTML \ CSS \ JAVASCRIPT \ REACT</div>
      </div>

      <div className="skills-main-wrapper">
        <SkillsSection title="Technologies" data={technologies} />
        <div className="skills-line"></div>
        <SkillsSection title="Tools" data={tools} />

      </div>

      <div className="marquee-container marquee-down">
        <div className="marquee-text marquee-down-first">&nbsp;/ GIT / FIGMA / VITE / VERCEL</div>
        <div className="marquee-text marquee-down-second">&nbsp;/ GIT / FIGMA / VITE / VERCEL</div>
      </div>

    </section>
  )
}

export default Skills;