import linkIcon from '../../assets/symbols/link.svg';
function CarouselItem({ title,description,technologies,previewUrl,repoUrl,screens }) {
  const [desktopScreen,mobileScreen] = screens;

  return (
    <aside className="carousel-item-wrapper flex-column-center">
      <img className="carousel-item-desktop-screen" src={desktopScreen} alt={`${title} widescreen capture`} />
      <div className="carousel-item-mobile-wrapper flex-row-center">
        {mobileScreen ? <img className="carousel-item-mobile-screen" src={mobileScreen} alt={`${title} smarthphone capture`} /> : <></>}
        <div className="carousel-item-data-wrapper flex-column-center">

          <h3 className="carousel-item-data-title">{title}</h3>

          <div className="carousel-item-data">
            <h5 className="carousel-item-data-heading">
              Technologies 
            </h5>
            <p>{technologies}</p>
          </div>

          <div className="carousel-item-data">
            <h5 className="carousel-item-data-heading">
              Description
            </h5>
            <p>{description}</p>
          </div>
          <a className="carousel-item-data-link carousel-item-data flex-row-center" href={previewUrl} target="_blank">
            Live Preview
            <img className="link-icon" src={linkIcon} alt="" />
          </a>
          <a className="carousel-item-data-link carousel-item-data flex-row-center" href={repoUrl} target="_blank">
            Repository
            <img className="link-icon" src={linkIcon} alt="" />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default CarouselItem;