

const ProjectCard = ( { project } ) => {
    
  const { Name, tech, picture, link } = project;

  return (
    <a href={link} className="block">
      <img
        alt=""
        src={picture}
        className="h-66 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-62Pr lg:h-74"
      />
    
      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">{Name}</strong>
    
        <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
    
        <p className="mt-0.5 opacity-50 sm:mt-0">{tech}</p>
      </div>
    </a>
  )
}

export default ProjectCard



