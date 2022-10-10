function SkillCard( { icon,role,description } ){
  console.log("corriendo skillcard");
  return(
    <aside className="skillcard-wrapper flex-column-center">
      <img className="skillcard-icon" src={icon} alt={`${role} icon`} />
      <h3 className="skillcard-role">{role}</h3>
      <p className="skillcard-description">{description}</p>
    </aside>
  )
}

export default SkillCard;