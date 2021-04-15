import React from "react"

const ContactForm = () => {
  return (
    <form
      className="contact_form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="full">
        <label>
          <input
            className="input"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
        </label>
      </div>
      <div className="full">
        <label>
          <input
            className="input"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
        </label>
      </div>

      <div className="full">
        <label>
          <textarea
            className="input"
            placeholder="Message"
            type="text"
            name="message"
          />
        </label>
      </div>
      <div className="full">
        <input className="btn-contact" type="submit" value="Send Message" />
      </div>
    </form>
  )
}

export default ContactForm
