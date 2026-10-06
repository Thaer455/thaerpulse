import { useLanguage } from "../i18n";

function About() {
  const { language } = useLanguage();
  const isGerman = language === "de";

  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="section-label">{isGerman ? "Über mich" : "About"}</p>

        <h2>
          {isGerman
            ? "Entwickler mit Leidenschaft für praktische Lösungen."
            : "Developer with a passion for building."}
        </h2>
      </div>

      <div className="about-content">
        <p>
          {isGerman
            ? "Ich bin ausgebildeter Fachinformatiker für Anwendungsentwicklung mit praktischer Erfahrung in Softwareentwicklung, IT-Support und Windows-Server-Administration."
            : "I’m a trained Fachinformatiker für Anwendungsentwicklung with practical experience in software development, IT support and Windows Server administration."}
        </p>

        <p>
          {isGerman
            ? "Ich löse gerne reale Probleme, entwickle praktische Softwarelösungen und unterstütze zuverlässige IT-Systeme. Dabei bringe ich Erfahrung in der Anwendungsentwicklung sowie im 1st- und 2nd-Level-IT-Support mit."
            : "I enjoy solving real-world problems, developing practical software solutions and supporting reliable IT systems. My experience includes application development as well as 1st and 2nd level IT support."}
        </p>

        <p>
          {isGerman
            ? "Meine Interessen liegen in der Frontend- und Backend-Entwicklung, Algorithmen, Datenbanken, sauberer Softwarearchitektur und moderner IT-Infrastruktur. Neue Technologien lerne ich am liebsten durch praktische Projekte."
            : "My main interests are frontend and backend development, algorithms, databases, clean software architecture and modern IT infrastructure. I enjoy learning new technologies by building and working with real-world systems."}
        </p>
      </div>
    </section>
  );
}

export default About;
