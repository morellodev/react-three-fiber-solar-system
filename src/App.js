import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import SolarSystem from "./components/solar-system";

const Scene = () => (
  <>
    <Stars />
    <pointLight color={0xffffff} intensity={3} />
    <SolarSystem />
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
