import './About.css';
import { sectionContext } from '../../App';
import { useContext, useEffect, useRef } from 'react';
import Category from './Category.jsx';
import developer from './category-developer.js';
import guyBehind from './category-guy-behind.js';
function About(){
  const { activeSection,observer } = useContext(sectionContext);
  const aboutElement = useRef(null);
  useEffect(()=>{ aboutElement ? observer.observe(aboutElement.current) : null},[aboutElement]);
  const isAboutSectionActive = activeSection === aboutElement.current;
  return(
    <section className="about-wrapper flex-column-center" ref={aboutElement}>
      <Category title="The developer" data={developer} isAboutSectionActive={isAboutSectionActive}/>
      <Category title="The guy behind" data={guyBehind} isAboutSectionActive={isAboutSectionActive}/>
    </section>
  )
}

export default About;