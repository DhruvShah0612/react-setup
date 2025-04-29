import './Projects.css'
import projectsData from './Projects.json'
// import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <section className="work" id="work">

      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

      <div className="box-container">

        {projectsData.map((project, index) => (
          <div className="box tilt" key={index}>
            <img draggable="false" src={project.projectImage} alt={project.projectTitle} />
            <div className="content">
              <div className="tag">
                <h3>{project.projectTitle}</h3>
              </div>
              <div className="desc">
                <p>{project.projectDescription}</p>
                <div className="btns">
                  <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> Explore More</a>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* <div className="viewall">
        <Link to="/all-projects" className="btn"><span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div> */}

    </section>
  )
}

export default Projects
