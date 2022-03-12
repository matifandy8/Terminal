import React, { useEffect, useState } from "react";

export interface Project {
  id: number;
  name: string;
  technologies: string;
  subtitle: string;
  image: string;
  github: string;
  demo: string;
  used?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>();
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/matifandy8/nextjs-portfolio/projects"
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log(projects);

  return (
      <div className="projects">    
        {projects?.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.subtitle}</p>
            <div className="project__image">
              <img src={project.image} alt={project.name} />
              </div>
              <div className="project__links">
                <a href={project.github}>Github</a>
                <a href={project.demo}>Demo</a>
              </div>
          </div>
        ))}
      </div>
  );
};

export default Projects;
