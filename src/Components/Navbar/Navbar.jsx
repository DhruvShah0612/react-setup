import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';  // Importing CSS for the navbar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">Takshil</NavLink>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>

          {/* NavLink applies the active class dynamically using className function */}
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/education"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Education
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Experience
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/hire-me"
              className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}
              onClick={() => setIsOpen(false)}>
              Hire Me
            </NavLink>
          </li>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
