import "./Particle.css";
function Particle() { 
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function randomizeWidth() {
    const minWidth = 10;
    const maxWidth = 150;
    const result = randomIntFromInterval(minWidth,maxWidth)
    return result;
  }
  function randomizeHeight() {
    const minHeight = 5;
    const maxHeight = 30;
    const result = randomIntFromInterval(minHeight,maxHeight)
    return result;
  }
  function randomizePos() {
    const minPos = 5;
    const maxPos = 95;
    const result = randomIntFromInterval(minPos,maxPos)
    return result;
  }
  function randomizeSpeed() {
    const minSpeed = 30;
    const maxSpeed = 60;
    const result = randomIntFromInterval(minSpeed,maxSpeed)
    return result;
  }
  function randomizeBackwards() {
    return Boolean(randomIntFromInterval(0,1))
  }
  return (
    <div
      className="particle"
      key={Math.random()}
      style={{
        width: `${randomizeWidth()}px`,
        height: `${randomizeHeight()}px`,
        top: `${randomizePos()}vh`,
        right: `${randomizePos()}vw`,
        animation: `rotate-animation ${randomizeSpeed()}s infinite linear ${randomizeBackwards() ? "reverse" : ""}`
      }}
    ></div>
  );
}

export default Particle;
