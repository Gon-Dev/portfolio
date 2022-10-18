function ContactForm(){
  return(
    <div className="contact-form-wrapper flex-column-center">
        <h3 className="form-title">
          Thank you for coming this far!
          <br />
          Please, feel free to leave a comment!
        </h3>
      <form action="" className="form-container flex-column-center">
        <input className="form-input" type="text" placeholder="Name"/>
        <input className="form-input" type="email" name="" id="" placeholder="Email"/>
        <div className="form-textarea-container">
          <textarea className="form-description" name="" id="" placeholder="Description"></textarea>
        </div>
        <button className="form-submit" type="submit">SEND COMMENT</button>
      </form>

    </div>
  )
}

export default ContactForm;