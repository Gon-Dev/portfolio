import './Navbar.css';
import { sectionContext } from '../../App.jsx';
import { useContext } from 'react';
import handleClickToScroll from './handleClickToScroll.js';

function Navbar(){
  let { activeSection } = useContext(sectionContext);
  let activeSectionName = activeSection ? activeSection.className.split("-")[0] : null;

  return(
    <div className="navbar-wrapper flex-row-center">
      <div className="navbar-line-wrapper">
        <div className="navbar-line"></div>
      </div>
      <ul className="navbar-list flex-column-center">
        <div className="navbar-name-wrapper">
          <aside className="navbar-name">gonzalo</aside>
          <aside className="navbar-last-name">RUIZ</aside>
        </div>
        <li className={`navbar-item ${activeSectionName === "home" ? "active" : null}`}>
          <button className="navbar-link" onClick={(event)=>handleClickToScroll(event)}>
            home
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "about" ? "active" : null}`}>
          <button className="navbar-link" onClick={(event)=>handleClickToScroll(event)}>
            about
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "skills" ? "active" : null}`}>
          <button className="navbar-link" onClick={(event)=>handleClickToScroll(event)}>
            skills
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "projects" ? "active" : null}`}>
          <button className="navbar-link" onClick={(event)=>handleClickToScroll(event)}>
            projects
          </button>
        </li>
        <li className={`navbar-item ${activeSectionName === "contact" ? "active" : null}`}>
          <button className="navbar-link" onClick={(event)=>handleClickToScroll(event)}>
            contact
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;