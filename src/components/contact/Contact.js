import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ytydu22', 'template_hq4q0pf', form.current, 'user_0y1Y5BpJ5wQ3QY1i3c8Qr')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <section id="contact">
      <h1>Contact</h1>
      <div className="container contact-container">
        <h2>Let's Connect!</h2>

        <form ref={form} onSubmit={sendEmail} >
          <fieldset>
            <legend className="text-light">Have a question or interested in discussing a project? Feel free to reach out and send me a message. I'm here to help and excited to hear from you!</legend>
            <div className="form-group">
              <label hidden htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label hidden htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label hidden htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </fieldset>
        </form>
        
      </div>
    </section>
  )
}

export default Contact