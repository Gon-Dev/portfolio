import { useState } from 'react';
import CarouselItem from './CarouselItem.jsx';
import arrowNextIcon from '../../assets/symbols/arrow-next.svg'
import arrowPrevIcon from '../../assets/symbols/arrow-prev.svg'
function Carousel({ data }){
  const [currentSlide,setCurrentSlide] = useState(0);
  const handleCarouselButtonClick = (event) => {
    event.target.classList.contains("next") && setCurrentSlide(currentSlide => currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    event.target.classList.contains("prev") && setCurrentSlide(currentSlide => currentSlide !== 0 ? currentSlide - 1 : data.length - 1);
  }
  return(
    <aside className="carousel-wrapper flex-row-center">

      <div className="carousel-buttons-wrapper flex-row-center">
        <button className="carousel-button button-prev" onClick={handleCarouselButtonClick}>
          <img className="carousel-button-icon prev" src={arrowPrevIcon} alt="" />
        </button>
        <button className="carousel-button button-next" onClick={handleCarouselButtonClick}>
          <img className="carousel-button-icon next" src={arrowNextIcon} alt="" />
        </button>
      </div>

      <div className="carousel-inner flex-row-center" style={{transform: `translateX(${-currentSlide * 45}rem)`}}>
        {data.map( item => 
          <CarouselItem 
            title={item.title} 
            description={item.description} 
            technologies={item.technologies} 
            previewUrl={item.previewUrl}
            repoUrl={item.repoUrl}
            screens={item.screens}
            key={item.key}
          /> 
        )}
      </div>
    </aside>
  )
}

export default Carousel;