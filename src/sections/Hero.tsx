import { useLanguage } from "../i18n";
import profileImage from "../assets/profile.jpg";

function Hero() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            {isGerman
              ? "Junior Softwareentwickler · IT-Support · Windows Server"
              : "Junior Software Developer · IT Support · Windows Server"}
          </p>

          <h1>
            {isGerman ? "Ich entwickle und unterstütze" : "I build and support"}
            <span>
              {isGerman ? "digitale Lösungen." : "digital solutions."}
            </span>
          </h1>

          <p className="hero-description">
            {isGerman
              ? "Ich bin Thaer Issa, Junior Softwareentwickler mit Erfahrung in der Anwendungsentwicklung, Windows-Server-Administration sowie im 1st- und 2nd-Level-IT-Support. Ich entwickle zuverlässige Software und verstehe gleichzeitig die Systeme dahinter."
              : "I’m Thaer Issa, a Junior Software Developer with experience in application development, Windows Server administration, and 1st and 2nd level IT support. I enjoy building reliable software while also understanding and supporting the systems behind it."}
          </p>

          <div className="hero-actions">
            <a href="#projects">
              {isGerman ? "Meine Projekte" : "View my work"}
            </a>

            <a href="#contact">
              {isGerman ? "Kontakt aufnehmen" : "Get in touch"}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <img
              src={profileImage}
              alt="Thaer Issa"
              className="hero-profile-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
