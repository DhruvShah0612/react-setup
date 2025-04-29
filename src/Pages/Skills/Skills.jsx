import './Skills.css'
import skillsData from './Skills.json'

const Skills = () => {
  return (
    <section className="skills" id="skills">

      <h2 className="heading"><i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span></h2>

      <div className="container">
        <div className="row">

          {skillsData.map((skill, index) => (
            <div className="bar" key={index}>
              <div className="info">
                <img src={skill.icon} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills
