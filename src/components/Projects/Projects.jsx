import Carousel from './Carousel.jsx';
import projectsData from './projectsData.js';
import './Projects.css';

function Projects(){
  return(
    <section className="projects-section-wrapper flex-row-center">
      <Carousel data={projectsData} />
    </section>
  )
}

export default Projects;