import './Contact.css';
import { sectionContext } from '../../App';
import { useContext, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
function Contact(){
  const { observer } = useContext(sectionContext);
  const contactElement = useRef(null);
  useEffect(()=>{ contactElement ? observer.observe(contactElement.current) : null},[contactElement]);
  return(
    <section className="contact-wrapper flex-row-center" ref={contactElement}>
      <ContactForm />
    </section>
  )
}

export default Contact;