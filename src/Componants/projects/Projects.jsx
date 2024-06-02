
import data from "../../data.json"
import ProjectCard from "./ProjectCard"
import "../Style/projects.css"

export const Projects = () => {
  
  const { Projects } = data.infos;

  return (
    <div className="Project_container"  style={{ userSelect: 'none' }} >
      <h1>My Portfolio</h1>
      <div className="project-cards">
        {Projects.map((project,i) => (
          <ProjectCard project={project} key={i} />
        ))}
       
      </div>
    </div>
  )
}
