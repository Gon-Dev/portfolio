import "./Home.css";
import arrow from "../../assets/symbols/know-me-arrow.svg";
import avatar from "../../assets/illustration/avatar.svg";
import MediaLogo from "./MediaLogo.jsx";
import githubLogo from "../../assets/logos/github.png";
import twitterLogo from "../../assets/logos/twitter.png";
import linkedinLogo from "../../assets/logos/linkedin.png";
function Home(){
  
  const logos = [
    {icon: githubLogo, dir: "https://github.com/Gon-Dev", key:"github"},
    {icon: twitterLogo, dir: "https://twitter.com/goni_dev", key:"twitter"},
    {icon: linkedinLogo, dir: "https://www.linkedin.com/in/gonzalo-ariel-ruiz/", key:"linkedin"}
  ]

  return(
    <section className="home-wrapper flex-row-center">

      <aside className="know-me-wrapper flex-column-center">
        <p className="know-me-text">know me</p>
        <img className="know-me-arrow" src={arrow} alt="" />
      </aside>

      <aside className="hero-wrapper ">

        <div className="profile-wrapper flex-row-center">
          <div className="profile-avatar-background"></div>
          <img 
            className="profile-avatar"
            src={avatar} 
            alt="gonzalo's digital drawing of himself" 
          />
          <div className="profile-title-wrapper flex-column-center">
            <div className="profile-title-greetings-wrapper">
              <h2 className="profile-title-greetings-hey">hey! i'm</h2>
              <h1 className="profile-title-greetings-name">gonzalo</h1>
              <h1 className="profile-title-greetings-last-name last-name">RUIZ</h1>
            </div>
            <div className="profile-title-tech-profile">
              <h2 className="tech-profile-developer">FRONTEND DEVELOPER</h2>
              <h2 className="tech-profile-designer">and design enthusiast</h2>
            </div>
            <div className="media-logos-wrapper flex-row-center">
              {logos.map( logo => <MediaLogo logoData={logo} key={logo.key}/>)}
            </div>
          </div>
        </div>

        <div className="mail-wrapper-outer flex-column-center">
          <div className="mail-wrapper-inner flex-row-center">
            <p className="mail-background-mailTo">
              {'mailTo("'}
            </p>
            <a 
              className="mail-link"
              href="mailto:gon.ruiz.dev@gmail.com">
              gon.ruiz.dev@gmail.com
            </a>
            <p className="mail-background-mailTo">
              {'");'}
            </p>
          </div>
          <div className="mail-line"></div>
        </div>

      </aside>

    </section>
  )
}

export default Home;