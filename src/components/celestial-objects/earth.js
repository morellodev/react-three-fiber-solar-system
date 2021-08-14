import { Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const EARTH_ROTATION_TIME_IN_DAYS = 1;

const Earth = (props) => {
  const earthRef = useRef();

  useFrame(({ clock }) => {
    earthRef.current.rotation.y =
      clock.getElapsedTime() / EARTH_ROTATION_TIME_IN_DAYS;
  });

  return (
    <Sphere args={[1, 64, 64]} {...props} ref={earthRef}>
      <meshPhongMaterial
        {...useTexture({
          map: "/textures/earth/2k_earth_daymap.jpeg",
          normalMap: "/textures/earth/2k_earth_normal_map.jpeg",
          specularMap: "/textures/earth/2k_earth_specular_map.jpeg",
        })}
      />
    </Sphere>
  );
};

export default Earth;
