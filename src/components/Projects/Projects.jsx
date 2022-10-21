import './Projects.css';
import { sectionContext } from '../../App';
import { useContext, useEffect, useRef } from 'react';
import Carousel from './Carousel.jsx';
import projectsData from './projectsData.js';

function Projects(){
  const { observer } = useContext(sectionContext);
  const projectsElement = useRef(null);
  useEffect(()=>{ projectsElement ? observer.observe(projectsElement.current) : null},[projectsElement])
  return(
    <section className="projects-wrapper flex-row-center" ref={projectsElement}>
      <Carousel data={projectsData} />
    </section>
  )
}

export default Projects;