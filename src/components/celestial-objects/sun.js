import { Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const SUN_ROTATION_TIME_IN_DAYS = 25;

const Sun = (props) => {
  const sunRef = useRef();

  useFrame(({ clock }) => {
    sunRef.current.rotation.y =
      clock.getElapsedTime() / SUN_ROTATION_TIME_IN_DAYS;
  });

  return (
    <Sphere args={[1, 64, 64]} {...props} ref={sunRef}>
      <meshBasicMaterial map={useTexture("/textures/sun/2k_sun.jpeg")} />
    </Sphere>
  );
};

export default Sun;
