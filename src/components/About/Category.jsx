import AboutCard from './AboutCard.jsx';
function Category( {isAboutSectionActive,title,data} ){
  const lowerTitleName = title.toLowerCase().split(" ").join("-");
  return(
    <aside className={`category-wrapper ${lowerTitleName}-wrapper ${isAboutSectionActive ? "visible" : null} flex-column-center`}>
      <div className={`category-line ${lowerTitleName}-line`}></div>
      <h1 className={`category-title ${lowerTitleName}-title`}>{title}</h1>
      <div className="category-aboutcards-wrapper flex-row-center">
        {data.map( item => <AboutCard icon={item.icon} role={item.role} description={item.description} key={item.key}/> )}
      </div>
    </aside>
  )
}

export default Category;