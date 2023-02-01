import Particle from "../Particle/Particle";
function Particles({ particlesAmount }) {
  return (
    <>
      {Array.from(Array(particlesAmount), () => (
        <Particle key={Math.random()} />
      ))}
    </>
  );
}

export default Particles;
