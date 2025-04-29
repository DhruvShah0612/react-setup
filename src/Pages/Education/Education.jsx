import './Education.css'

const Education = () => {
  return (
    <section className="education" id="education">

      <h1 className="heading"><i className="fas fa-graduation-cap"></i> My <span>Education</span></h1>

      <p className="qoute">Education is not the learning of facts, but the training of the mind to think.</p>

      <div className="box-container">

        <div className="box">
          {/* <div className="image">
            <img draggable="false" src="./assets/images/educat/college.jpg" alt="" />
          </div> */}
          <div className="content">
            <h3>Bachelor of Computer Application</h3>
            <p>Noble University - Junagadh</p>
            <h4>2022-2025 | 5th Sem Pursuing (8.84 CGPA)</h4>
          </div>
        </div>

        <div className="box">
          {/* <div className="image">
            <img draggable="false" src="./assets/images/educat/school.jpg" alt="" />
          </div> */}
          <div className="content">
            <h3>HSC Commerce</h3>
            <p>Shri Madhav School - Bhesan</p>
            <h4>2022 | Completed (74.14%)</h4>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Education
