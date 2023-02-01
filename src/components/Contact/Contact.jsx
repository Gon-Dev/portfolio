import './Contact.css';
import { sectionContext } from '../../App';
import { useContext, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import Particles from '../Particles/Particles';
function Contact(){
  const { observer } = useContext(sectionContext);
  const contactElement = useRef(null);
  useEffect(()=>{ contactElement ? observer.observe(contactElement.current) : null},[contactElement]);
  return(
    <section className="contact-wrapper flex-row-center" ref={contactElement}>
      <Particles particlesAmount={10}/>
      <ContactForm />
    </section>
  )
}

export default Contact;