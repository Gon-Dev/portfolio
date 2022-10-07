import './Navbar.css';

function Navbar(){
  return(
    <div className="Navbar-wrapper flex-row-center">
      <div className="navbar-line-wrapper">
        <div className="navbar-line"></div>
        <div className="navbar-dot"></div>
      </div>
      <ul className="navbar-list flex-column-center">
        <div className="navbar-name-wrapper">
          <aside className="navbar-name">gonzalo</aside>
          <aside className="navbar-last-name">RUIZ</aside>
        </div>
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            home
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            about
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            skills
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            projects
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#">
            contact
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;