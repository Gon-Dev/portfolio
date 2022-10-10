import './About.css';
import Category from './Category.jsx';
import developer from './category-developer.js';
import guyBehind from './category-guy-behind.js';

function About(){
  
  
  return(
    <section className="about-wrapper flex-column-center">
      <Category title="The developer" data={developer} />
      <Category title="The guy behind" data={guyBehind} />
    </section>
  )
}

export default About;