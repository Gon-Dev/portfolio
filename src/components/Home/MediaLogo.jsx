export default function mediaLogo({ logoData }) {
  return(
    <a className="media-logo-wrapper flex-column-center" href={logoData.dir} target="_blank">
      <img className="media-logo" src={logoData.icon} alt="" />
    </a>
  )
}