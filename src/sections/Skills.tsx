function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "PHP",
    "Symfony",
    "JavaScript",
    "TypeScript",
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="section-label">Skills</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
