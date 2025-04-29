import './Contact.css';

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <h1 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h1>

            <div className="container">

                <div className="content">

                    <div className="left">

                        <h2>Let's  Work Together!</h2>
                        <p className='text1'>I'm always excited to connect with new people and explore potential opportunities. Whether you're looking for a <b>DevOps Engineer</b>, a <b>React Developer</b>, a <b>Python/Django Developer</b>, or a <b>Web Designer</b>, I’m open to freelance work, collaborations, or full-time job opportunities. Feel free to reach out if you think we could work together on something great.</p>
                        <p className='text2'>I'm constantly learning and growing, and I'd love to bring my skills to innovative projects. Here’s how you can get in touch with me:</p>

                        <div className="contact-details">

                            <div className="detail">
                                <a href="https://mail.google.com" target="_blank">
                                    <i className="fas fa-envelope"></i><p>takshilthummar.career@gmail.com</p>
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
                                <label>Name</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className='fas fa-envelope'></i></span>
                                <input type="email" name="email" required />
                                <label>Email</label>
                            </div>

                            <div className="field">
                                <span className="icon"><i className='fas fa-phone-alt'></i></span>
                                <input type="text" name="phone" required />
                                <label>Mobile Number</label>
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

export default Contact;
