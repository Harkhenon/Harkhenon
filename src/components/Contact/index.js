import React from 'react'
import { Form } from 'semantic-ui-react';

const Contact = () => {
  return (
    <section id="contact">
      <p className="section-title">Contact</p>
      <p>You can meet me at Toulouse - France</p>
      <p>E-Mail: isoka33@gmail.com</p>
      <p>Mobile: 06.01.67.24.09</p>
      <Form inverted>
        <Form.Field>
          <label>Your email</label>
          <Form.Input type="email" name="youremail" />
        </Form.Field>
        <Form.Field>
          <label>Message title</label>
          <Form.Input type="text" name="messagetitle" />
        </Form.Field>
        <Form.Field>
          <label>Your message</label>
          <Form.TextArea name="yourmessage" />
        </Form.Field>
      </Form>
    </section>
  )
}

export default Contact;
