import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import Earth from "./celestial-objects/earth";
import Moon from "./celestial-objects/moon";
import Sun from "./celestial-objects/sun";

const EARTH_REVOLUTION_TIME_IN_DAYS = 365;
const MOON_REVOLUTION_TIME_IN_DAYS = 27;

const SolarSystem = () => {
  const solarSystemRef = useRef();
  const earthOrbitRef = useRef();

  useFrame(({ clock }) => {
    solarSystemRef.current.rotation.y =
      clock.getElapsedTime() / EARTH_REVOLUTION_TIME_IN_DAYS;
    earthOrbitRef.current.rotation.y =
      clock.getElapsedTime() / MOON_REVOLUTION_TIME_IN_DAYS;
  });

  return (
    <group name="solarSystem" ref={solarSystemRef}>
      <Sun scale={[5, 5, 5]} />
      <group name="earthOrbit" ref={earthOrbitRef} position={[10, 0, 0]}>
        <Earth />
        <group name="moonOrbit" position={[2, 0, 0]}>
          <Moon scale={[0.5, 0.5, 0.5]} />
        </group>
      </group>
    </group>
  );
};

export default SolarSystem;
