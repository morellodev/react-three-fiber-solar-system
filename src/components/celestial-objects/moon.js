import { Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const MOON_ROTATION_TIME_IN_DAYS = 27;

const Moon = (props) => {
  const moonRef = useRef();

  useFrame(({ clock }) => {
    moonRef.current.rotation.y =
      clock.getElapsedTime() / MOON_ROTATION_TIME_IN_DAYS;
  });

  return (
    <Sphere {...props} ref={moonRef}>
      <meshPhongMaterial
        map={useTexture("/textures/moon/2k_moon.jpeg")}
        shininess={0}
      />
    </Sphere>
  );
};

export default Moon;
