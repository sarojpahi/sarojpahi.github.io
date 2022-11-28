import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "../../Assets/particles.json";
export const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};
