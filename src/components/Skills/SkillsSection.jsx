import Skillscard from './Skillscard.jsx';

function SkillsSection({ title,data }){
  return(
    <div className={`skills-section-wrapper ${title.toLowerCase()}-wrapper flex-column-center skills-slide-in`}>
      <h1 className="skills-section-title">{title}</h1>
      <div className="skills-cards-wrapper flex-row-center">
        {data.map( item => <Skillscard icon={item.logo} title={item.title} key={item.key}/>)}
      </div>
    </div>
  )
}

export default SkillsSection;