function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-column footer-profile">
          <h3>Thaer Issa</h3>
          <p>Junior Software Developer</p>
          <p>Berlin, Deutschland</p>
        </div>

        <div className="footer-column">
          <h4>Kontakt</h4>

          <a href="mailto:info@thaerpulse.com">
            info@thaerpulse.com
          </a>

          <a href="tel:+4917647063260">
            +49 176 47063260
          </a>
        </div>

        <div className="footer-column">
          <h4>Links</h4>

          <div className="footer-links">
            <a
              href="https://github.com/Thaer455"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/thaer-issa-2039bb409/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Thaer Issa</p>
      </div>
    </footer>
  );
}

export default Footer;
