import {
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const Sun = (props) => (
  <Sphere {...props}>
    <meshBasicMaterial map={useTexture("/textures/sun/2k_sun.jpeg")} />
  </Sphere>
);

const Earth = (props) => (
  <Sphere {...props}>
    <meshPhongMaterial
      map={useTexture("/textures/earth/2k_earth_daymap.jpeg")}
      normalMap={useTexture("/textures/earth/2k_earth_normal_map.jpeg")}
      specularMap={useTexture("/textures/earth/2k_earth_specular_map.jpeg")}
    />
  </Sphere>
);

const Moon = (props) => (
  <Sphere {...props}>
    <meshPhongMaterial map={useTexture("/textures/moon/2k_moon.jpeg")} />
  </Sphere>
);

const Scene = () => (
  <>
    <pointLight color={0xffffff} intensity={3} />
    <group name="solarSystem">
      <Sun scale={[5, 5, 5]} />
      <group name="earthOrbit" position={[10, 0, 0]}>
        <Earth />
        <group name="moonOrbit" position={[2, 0, 0]}>
          <Moon scale={[0.5, 0.5, 0.5]} />
        </group>
      </group>
    </group>
  </>
);

const App = () => (
  <Canvas>
    <Suspense fallback={null}>
      <Scene />
      <PerspectiveCamera makeDefault fov={40} position={[0, 50, 0]} />
      <OrbitControls />
    </Suspense>
  </Canvas>
);

export default App;
