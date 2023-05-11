import React, { Component } from "react"

class ContactUs extends Component {
  render() {
    return (
      <div id="contact">
        <h1>Contact Me</h1>
        <h2>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/mohammed-ali-960664260/">
            Mohammed T Ali
          </a>
        </h2>
        <br />
        <h2>Email Me Below</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="email" />
          <a href="mailto:tasi@live.com.au?subject=Contact from Website">
            <button type="button" className="submit">
              Send
            </button>
          </a>
        </form>
      </div>
    )
  }
}

export default ContactUs
