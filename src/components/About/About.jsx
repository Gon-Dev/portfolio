import './About.css';
import { sectionContext } from '../../App';
import { useContext, useEffect, useRef } from 'react';
import Category from './Category.jsx';
import developer from './category-developer.js';
import guyBehind from './category-guy-behind.js';
function About(){
  const { observer } = useContext(sectionContext);
  const aboutElement = useRef(null);
  useEffect(()=>{ aboutElement ? observer.observe(aboutElement.current) : null},[aboutElement]);
  
  return(
    <section className="about-wrapper flex-column-center" ref={aboutElement}>
      <Category title="The developer" data={developer} />
      <Category title="The guy behind" data={guyBehind} />
    </section>
  )
}

export default About;