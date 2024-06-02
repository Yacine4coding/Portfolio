
import "./Style/Skills.css"
import data from '../data.json' 

export const Skills = () => {
  const { infos } = data
  return (
    <div className="skills-Contianer"  style={{ userSelect: 'none' }} >
      {infos.Skills.map((skill, i) =>(
          <span title={skill.status} key={i} >{skill.name}</span>
      ))}
    </div>

  )
}

