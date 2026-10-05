const projects = [
  {
    number: "01",
    title: "Algorithm Visualizer",
    description:
      "An interactive web application for visualizing algorithms and data structures step by step, with a dedicated frontend, backend and database architecture.",
    technologies: ["React", "TypeScript", "Java", "Spring Boot"],
    link: "https://github.com/Thaer455/algorithm-visualizer",
  },
  {
    number: "02",
    title: "Smart Task Manager",
    description:
      "A web-based task management application for organizing projects and tasks with a structured dashboard and task workflow.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    link: "https://github.com/Thaer455/smart-task-manager",
  },
  {
    number: "03",
    title: "Intranet Kochbuch",
    description:
      "A web-based intranet recipe platform with user registration, JWT authentication, recipe management, protected routes and profile management.",
    technologies: ["React", "Vite", "PHP", "REST API"],
    link: "https://github.com/Thaer455/Intranet-Kochbuch-issa",
  },
  {
    number: "04",
    title: "ShareEmp Ltd",
    description:
      "A Java-based software project developed as part of my programming portfolio and focused on object-oriented application development.",
    technologies: ["Java", "OOP"],
    link: "https://github.com/Thaer455/ShareEmp-Ltd",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Things I’ve built.</h2>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
                <span>↗</span>
              </a>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
