import { useState } from "react";

function ContactForm(){
  
  const [userName,setUserName] = useState("");
  const [userEmail,setUserEmail] = useState("");
  const [userDescription,setUserDescription] = useState("");

  const isValidEmail = (inputEmail) => {
    return /\S+@\S+\.\S+/.test(inputEmail);
  }

  const handleChange = (event) => {
    event.target.classList.contains("input-name") && setUserName(event.target.value);
    event.target.classList.contains("input-email") && setUserEmail(event.target.value);
    event.target.classList.contains("text-description") && setUserDescription(event.target.value);
  }

  return(
    <div className="contact-form-wrapper flex-column-center">
        <h3 className="form-title">
          Thank you for coming this far!
          <br />
          Please, feel free to leave a comment!
        </h3>
      <form action="" className="form-container flex-column-center">
        <input 
          onChange={handleChange} 
          className="form-input input-name" 
          type="text" 
          placeholder="Name" 
          value={userName} 
        />
        <input 
          onChange={handleChange} 
          className="form-input input-email" 
          type="email" 
          name="name" 
          placeholder="Email" 
          style={!isValidEmail(userEmail)  && userEmail.length > 0 ? {border: "red 1px solid"} : null}
        />

        {!isValidEmail(userEmail) && userEmail.length > 0
          ? <p className="email-error">
              Please insert {userEmail.length >= 1 ? "a valid" : "your"} email
            </p> 
          : <></>
        }

        <div className="form-textarea-container">
          <textarea onChange={handleChange} className="form-description text-description" name="description" id="description" placeholder="Description"></textarea>
        </div>
        <button className="form-submit" type="submit">SEND COMMENT</button>
      </form>

    </div>
  )
}

export default ContactForm;