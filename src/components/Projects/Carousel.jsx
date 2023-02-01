import { useState } from 'react';
import CarouselItem from './CarouselItem.jsx';
import arrowNextIcon from '../../assets/symbols/arrow-next.svg'
import arrowPrevIcon from '../../assets/symbols/arrow-prev.svg'
import { useEffect } from 'react';
function Carousel({ data }){
  const [currentSlide,setCurrentSlide] = useState(0);
  
  const handleCarouselButtonClick = (event) => {
    event.currentTarget.classList.contains("button-next") && setCurrentSlide(currentSlide => currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    event.currentTarget.classList.contains("button-prev") && setCurrentSlide(currentSlide => currentSlide !== 0 ? currentSlide - 1 : data.length - 1);
  }
  return(
    <aside className="carousel-wrapper flex-row-center">

      <div className="carousel-buttons-wrapper flex-row-center">
        <button className="carousel-button button-prev flex-row-center" onClick={handleCarouselButtonClick}>
          <img className="carousel-button-icon prev" src={arrowPrevIcon} alt="" />
        </button>
        <button className="carousel-button button-next flex-row-center" onClick={handleCarouselButtonClick}>
          <img className="carousel-button-icon next" src={arrowNextIcon} alt="" />
        </button>
      </div>

      <div className="carousel-inner flex-row-center" style={{transform: `translateX(${-currentSlide * 70}rem)`}}>
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