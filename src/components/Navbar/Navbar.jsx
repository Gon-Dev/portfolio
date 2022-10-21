import './Navbar.css';

function Navbar(){

  //importar seccion activa
  //clases condicional segun seccion activa

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
          <button className="navbar-link" href="#">
            home
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" href="#">
            about
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" href="#">
            skills
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" href="#">
            projects
          </button>
        </li>
        <li className="navbar-item">
          <button className="navbar-link" href="#">
            contact
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;