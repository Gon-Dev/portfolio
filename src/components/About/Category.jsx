import SkillCard from './SkillCard.jsx';

function Category( {title,data} ){
  const lowerTitleName = title.toLowerCase().split(" ").join("-");
  return(
    <aside className={`category-wrapper ${lowerTitleName}-wrapper flex-column-center`}>
      <div className={`category-line ${lowerTitleName}-line`}></div>
      <h1 className={`category-title ${lowerTitleName}-title`} category-title>{title}</h1>
      <div className="category-skillcards-wrapper flex-row-center">
        {data.map( item => <SkillCard icon={item.icon} role={item.role} description={item.description}/> )}
      </div>
    </aside>
  )
}

export default Category;