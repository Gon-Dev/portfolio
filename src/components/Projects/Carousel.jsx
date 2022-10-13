import CarouselItem from './CarouselItem.jsx';
import arrowNextIcon from '../../assets/symbols/arrow-next.svg'
import arrowPrevIcon from '../../assets/symbols/arrow-prev.svg'
function Carousel({ data }){
  console.log(data);
  return(
    <aside className="carousel-wrapper flex-row-center">
      <div className="carousel-buttons-wrapper flex-row-center">
        <button className="carousel-button button-prev">
          <img className="carousel-button-icon" src={arrowPrevIcon} alt="" />
        </button>
        <button className="carousel-button button-next">
          <img className="carousel-button-icon" src={arrowNextIcon} alt="" />
        </button>
      </div>
      
      {data.map( item => 
        <CarouselItem 
        title={item.title} 
        description={item.description} 
        technologies={item.technologies} 
          previewUrl={item.previewUrl}
          repoUrl={item.repoUrl}
          screens={item.screens}
          /> 
          )}
    </aside>
  )
}

export default Carousel;