import './Experience.css'

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <h2 className="heading"><i className="fas fa-briefcase"></i> Experience </h2>

      <div className="timeline">

        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>Self Employed</h2>
            </div>
            <div className="desc">
              <h3>Full Stack Developer</h3>
              <p>Oct 2021 - present</p>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>Mapstreak Flyseas</h2>
            </div>
            <div className="desc">
              <h3>Web Developer | Internship</h3>
              <p>June 2021 - Dec 2021</p>
            </div>
          </div>
        </div>

        <div className="container right">
          <div className="content">
            <div className="tag">
              <h2>The Spark Foundation</h2>
            </div>
            <div className="desc">
              <h3>Website Developer | Internship</h3>
              <p>May 2021 - June 2021</p>
            </div>
          </div>
        </div>

        <div className="container left">
          <div className="content">
            <div className="tag">
              <h2>WonderingBlog</h2>
            </div>
            <div className="desc">
              <h3>Web Development & SEO | Internship</h3>
              <p>March 2021 - April 2021</p>
            </div>
          </div>
        </div>
      </div>
      
    </section >
  )
}

export default Experience
