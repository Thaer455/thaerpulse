function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            Junior Software Developer · Berlin
          </p>

          <h1>
            I build
            <span>digital products.</span>
          </h1>

          <p className="hero-description">
            I’m Thaer Issa, a Junior Software Developer focused on building
            clean, reliable and user-friendly web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects">View my work</a>
            <a href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-content">
              <strong>TI</strong>
              <span>Software Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
