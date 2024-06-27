import ProjectCard from "../components/project-card/ProjectCard";

import { projectsList } from "../helpers/projectsList";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projectsList.map((project, id) => {
            return (
              <ProjectCard
                id={id}
                title={project.title}
                img={project.img}
                key={project.id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
