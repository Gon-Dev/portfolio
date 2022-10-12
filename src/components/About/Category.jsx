import AboutCard from './AboutCard.jsx';
// VER Warning: Received `true` for a non-boolean attribute `category-title`.
function Category( {title,data} ){
  const lowerTitleName = title.toLowerCase().split(" ").join("-");
  return(
    <aside className={`category-wrapper ${lowerTitleName}-wrapper flex-column-center`}>
      <div className={`category-line ${lowerTitleName}-line`}></div>
      <h1 className={`category-title ${lowerTitleName}-title`} category-title>{title}</h1>
      <div className="category-aboutcards-wrapper flex-row-center">
        {data.map( item => <AboutCard icon={item.icon} role={item.role} description={item.description} key={item.key}/> )}
      </div>
    </aside>
  )
}

export default Category;