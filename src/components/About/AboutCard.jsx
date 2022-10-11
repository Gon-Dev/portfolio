function AboutCard( { icon,role,description } ){
  return(
    <aside className="aboutcard-wrapper flex-column-center">
      <img className="aboutcard-icon" src={icon} alt={`${role} icon`} />
      <h3 className="aboutcard-role">{role}</h3>
      <p className="aboutcard-description">{description}</p>
    </aside>
  )
}

export default AboutCard;