import React from 'react'

const Contact = () => (
  <div className="contact">
    <h3 className="contact_text">Get in touch</h3>
    <form
      name="contact-form"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
      <fieldset>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" />
        <input type="submit" value="send" />
      </fieldset>
    </form>
  </div>
)

export default Contact