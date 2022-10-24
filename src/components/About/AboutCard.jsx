function AboutCard( { icon,role,description } ){
  return(
    <aside className="about-card-wrapper flex-column-center">
      <img className="about-card-icon" src={icon} alt={`${role} icon`} />
      <h3 className="about-card-role">{role}</h3>
      <p className="about-card-description">{description}</p>
    </aside>
  )
}

export default AboutCard;