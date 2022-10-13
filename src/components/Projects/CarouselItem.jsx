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
              Live Preview
            </h5>
            <a className="carousel-item-data-link" href={previewUrl} target="_blank">{previewUrl}</a>
          </div>
          <div className="carousel-item-data">
            <h5 className="carousel-item-data-heading">
              Repository
            </h5>
            <a className="carousel-item-data-link" href={repoUrl} target="_blank">{repoUrl}</a>
          </div>
          <div className="carousel-item-data">
            <h5 className="carousel-item-data-heading">
              Description
            </h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default CarouselItem;