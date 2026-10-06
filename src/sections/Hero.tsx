function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            Junior Software Developer · IT Support · Windows Server
          </p>

          <h1>
            I build and support
            <span>digital solutions.</span>
          </h1>

          <p className="hero-description">
            I’m Thaer Issa, a Junior Software Developer with experience in
            application development, Windows Server administration, and 1st
            and 2nd level IT support. I enjoy building reliable software while
            also understanding and supporting the systems behind it.
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
