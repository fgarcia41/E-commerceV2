import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact-box">
        <form>
          <input type="text" className="input-field" placeholder="First Name" />
          <input type="text" className="input-field" placeholder="Last Name" />
          <input
            type="email"
            className="input-field"
            placeholder="Your Email"
          />
          <textarea
            type="text"
            className="input-field textarea-field"
            placeholder="Tell us something.."
          ></textarea>
          <button type="button" className="btn">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
