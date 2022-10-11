function Skillscard({ icon,title }){
  return(
    <div className="skills-card-wrapper flex-column-center">
      <img className="skills-card-logo" src={icon} alt={`${title} icon`} />
      <h2 className="skills-card-title" >{title}</h2>
    </div>
  )
}

export default Skillscard;