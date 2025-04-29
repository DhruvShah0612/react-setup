import { useState, useEffect, useMemo } from 'react';
import './About.css'
import profileImage from '../../Assets/images/hero.png'

const About = () => {

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [professionIndex, setProfessionIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const professions = useMemo(() => [
    'DevOps Engineer',
    'React Developer',
    'Frontend Developer',
    'Python Developer',
    'Django Developer',
    'Web Designer',
  ], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentProfession = professions[professionIndex];

      if (!isDeleting && charIndex < currentProfession.length) {
        setText((prevText) => prevText + currentProfession[charIndex]);
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
        setTypingSpeed(150);
      } else if (isDeleting && charIndex > 0) {
        setText((prevText) => prevText.slice(0, prevText.length - 1));
        setCharIndex((prevCharIndex) => prevCharIndex - 1);
        setTypingSpeed(50);
      } else if (!isDeleting && charIndex === currentProfession.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setProfessionIndex((prevProfessionIndex) => (prevProfessionIndex + 1) % professions.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [text, charIndex, isDeleting, professionIndex, typingSpeed, professions]);

  return (
    <section className="about" id="about">
      <h1 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h1>

      <div className="row">

        <div className="image">
          <img draggable="false" className="tilt" src={profileImage} alt="Profile_Image" />
        </div>

        <div className="content">
          <h3>I'm Takshil Thummar</h3>
          <span className="tag"><h2>I'm a <span>{text}</span><span className="cursor">|</span></h2></span>

          <p>I am a DevOps Engineer, React developer, Django Developer, Python Developer, Web Designer based in Junagadh, Gujarat - India. I am an Information Technology undergraduate from Noble University. I am very passionate about improving my coding skills & developing web applications & websites. I build WebApps and Websites using React, Django, HTML5, CSS3 or JS. Working for myself to improve my skills. Love to build Full-Stack clones and also deploy on it AWS and Docker. </p>

          <div className="box-container">
            <div className="box">
              <p><span> Age: </span> 20</p>
              <p><span> Phone : </span> +91 63524 70455</p>
            
              <p><span> Email : </span> takshilthummar.career@gmail.com</p>
              <p><span> Place : </span> Gujarat, India</p>
            </div>
          </div>

          <div className="resumebtn">
            <a href="#" target="_blank" className="btn"><span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
