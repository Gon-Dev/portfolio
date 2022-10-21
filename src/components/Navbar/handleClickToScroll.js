export default function handleClickToScroll(event) {
  const sectionToScroll = document.querySelector(`.${event.target.outerText}-wrapper`);
  sectionToScroll.scrollIntoView({behavior: "smooth"});
}