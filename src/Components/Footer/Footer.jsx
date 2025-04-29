import './Footer.css'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = (props) => {
  return (
    <section className="footer">

        <div className="box-container">

            <div className="box">
                <h3>{props.title} Portfolio</h3>
                <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
            </div>

            <div className="box">
                <h3>Quick Links</h3>
                <Link to="/"><i className="fas fa-chevron-circle-right"></i> Home</Link>
                <Link to="/about"><i className="fas fa-chevron-circle-right"></i> About</Link>
                <Link to="/skills"><i className="fas fa-chevron-circle-right"></i> Skills</Link>
                <Link to="/projects"><i className="fas fa-chevron-circle-right"></i> Projects</Link>
                <Link to="/education"><i className="fas fa-chevron-circle-right"></i> Education</Link>
                <Link to="/experience"><i className="fas fa-chevron-circle-right"></i> Experience</Link>
                <Link to="/hire-me"><i className="fas fa-chevron-circle-right"></i> Hire Me</Link>
            </div>

            <div className="box">
                <h3>Contact Info</h3>
                <p><a href="/"> <i className="fas fa-phone"></i>+91 63524 70455</a></p>
                <p> <i className="fas fa-envelope"></i>takshilthummar.career@gmail.com</p>
                <p> <i className="fas fa-map-marked-alt"></i>Junagadh, Gujarat</p>

                <div className="share">

                    <Link to="https://www.linkedin.com/in/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></Link>
                    <Link to="https://github.com/Takshil-Thummar" className="fab fa-github" aria-label="GitHub" target="_blank"></Link>
                    <Link to="mailto:takshilthummar003@gmail.com" className="fas fa-envelope" aria-label="Mail" target="_blank"></Link>
                    <Link to="https://twitter.com/" className="fab fa-twitter" aria-label="Twitter" target="_blank"></Link>
                    <Link to="https://t.me/" className="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></Link>
                </div>
            </div>
        </div>

        <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <Link to="https://www.linkedin.com/in/"> Takshil Thummar</Link></h1>

    </section>
  )
}

export default Footer
