function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-content">
          <p className="section-label">Contact</p>

          <h2>
            Let’s build something
            <span>great together.</span>
          </h2>

          <p className="contact-description">
            I’m currently open to new opportunities and interesting projects.
            If you’d like to get in touch, feel free to reach out.
          </p>

          <div className="contact-actions">
            <a
              className="contact-primary"
              href="mailto:issathaer7@gmail.com"
            >
              Send me an email
              <span>↗</span>
            </a>

            <a
              className="contact-secondary"
              href="https://www.linkedin.com/in/thaer-issa-2039bb409/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              className="contact-secondary"
              href="https://github.com/Thaer455"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="contact-decoration" aria-hidden="true">
          <div className="contact-orb contact-orb-one"></div>
          <div className="contact-orb contact-orb-two"></div>
          <div className="contact-grid"></div>
          <span>TI</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
