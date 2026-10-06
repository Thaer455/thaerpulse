function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-label">Contact</p>

          <h2>
            Let’s talk.
            <span>I’d love to hear from you.</span>
          </h2>

          <p>
            Have a question, an opportunity, or a project in mind?
            Feel free to send me a message.
          </p>
        </div>

        <form className="contact-form">
          <div className="contact-form-row">
            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={7}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send message
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;