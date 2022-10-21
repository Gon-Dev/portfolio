import './Navbar.css';
import { sectionContext } from '../../App.jsx';
import { useContext, useEffect } from 'react';
function Navbar(){
  let { activeSection } = useContext(sectionContext);
  let activeSectionName = activeSection ? activeSection.className.split("-")[0] : null;

  return(
    <div className="Navbar-wrapper flex-row-center">
      <div className="navbar-line-wrapper">
        <div className="navbar-line"></div>
      </div>
      <ul className="navbar-list flex-column-center">
        <div className="navbar-name-wrapper">
          <aside className="navbar-name">gonzalo</aside>
          <aside className="navbar-last-name">RUIZ</aside>
        </div>
        <li className={`navbar-item ${activeSectionName === "home" ? "active" : null}`}>
          <button className="navbar-link">
            home
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "about" ? "active" : null}`}>
          <button className={`navbar-link`}>
            about
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "skills" ? "active" : null}`}>
          <button className={`navbar-link`}>
            skills
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "projects" ? "active" : null}`}>
          <button className={`navbar-link`}>
            projects
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "contact" ? "active" : null}`}>
          <button className={`navbar-link`}>
            contact
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;