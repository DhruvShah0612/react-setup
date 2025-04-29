import './Hire_Me.css'

const Hire_Me = () => {
    return (
        <section className="contact">

            <h1 className="heading"><i className="fas fa-headset"></i> Hire <span>Me</span></h1>

            <div className="container">

                <div className="content">

                    <div className="left">

                        <h2>Hire Me</h2>
                        <p className='text1'>To work in an organization where i can make the best use of my technical and analytical skills, upgrade myself and effectively contribute skills towords the goals of the organization while being resourceful innovative and flexible. I am a quick learner with a strong work ethic and a commitment to continuous improvement. Seeking an entry-level position where I can use my skills and knowledge to help a company grow its brand and reach its target audience.</p>
                        <p className="text2">Contact me for further information</p>

                        <div className="contact-details">

                            <div className="detail">
                                <a href="https://mail.google.com" target="_blank">
                                    <i className="fas fa-envelope"></i><p>thummartakshil2205@gmail.com</p>
                                </a>

                                <a href="https://web.whatsapp.com/" target="_blank">
                                    <i className='fas fa-phone'></i><p>+91 63524 70455</p>
                                </a>

                                <a href="https://maps.app.goo.gl/9UQgUbXP4EtHr24V6" target="_blank">
                                    <i className='fas fa-location-dot'></i><p>Junagadh, Gujarat</p>
                                </a>
                            </div>

                        </div> 

                    </div>

                    <form id="contact-form">

                        <div className="form-group">

                            <div className="field">
                                <span className="icon"><i className='fas fa-user'></i></span>
                                <input type="text" name="name" required />
                                <label>HR Name</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className="fas fa-building"></i></span>
                                <input type="text" name="company" required />
                                <label>Company Name</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className='fas fa-envelope'></i></span>
                                <input type="text" name="email" required />
                                <label>Email</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className='fas fa-phone-alt'></i></span>
                                <input type="text" name="phone" required />
                                <label>Mobile Number</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className="fa-solid fa-indian-rupee-sign"></i></span>
                                <input type="text" name="ctc" required />
                                <label>CTC</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className="fas fa-comment-dots"></i></span>
                                <input name="message" required></input>
                                <label>Message</label>
                            </div>

                            <div className="button-area">
                                <button type="submit">Submit <i className="fas fa-paper-plane"></i></button>
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Hire_Me
