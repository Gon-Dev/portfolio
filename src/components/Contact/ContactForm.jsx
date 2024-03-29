import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUMessage] = useState("");

  const form = useRef(null);

  const isValidEmail = (inputEmail) => {
    return /\S+@\S+\.\S+/.test(inputEmail);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_os5jb98",
        "template_nus3pvf",
        form.current,
        "vJ4fi8PVi8sccLHu2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setUserName("");
    setUserEmail("");
    setUMessage("");
    form.current.reset();
  };

  const handleChange = (event) => {
    event.target.classList.contains("input-name") &&
      setUserName(event.target.value);
    event.target.classList.contains("input-email") &&
      setUserEmail(event.target.value);
    event.target.classList.contains("text-message") &&
      setUMessage(event.target.value);
  };

  return (
    <div className="contact-form-wrapper flex-column-center">
      <h3 className="form-title">
        Thank you for coming this far!
        <br />
        Please, feel free to leave a comment!
      </h3>
      <form
        onSubmit={handleSubmit}
        ref={form}
        className="form-container flex-column-center"
      >
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          className="form-input input-name"
          type="text"
          placeholder="Your name"
          value={userName}
          name="name"
          id="name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          className="form-input input-email"
          type="email"
          placeholder="youremail@gmail.com"
          value={userEmail}
          style={
            !isValidEmail(userEmail) && userEmail.length > 0
            ? { border: "red 1px solid" }
            : null
          }
          name="email"
          id="email"
        />

        {!isValidEmail(userEmail) && userEmail.length > 0 ? (
          <p className="email-error">
            Please insert {userEmail.length >= 1 ? "a valid" : "your"} email
          </p>
        ) : (
          <></>
          )}

          <label htmlFor="message">Message</label>
        <div className="form-textarea-container">
          <textarea
            onChange={handleChange}
            className="form-message text-message"
            value={userMessage}
            placeholder="Hey! Let's schedule a meeting"
            name="message"
            id="message"
          />
        </div>
        <button className="form-submit" type="submit">
          SEND
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
