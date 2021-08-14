import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
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
      <EffectComposer>
        <DepthOfField focusDistance={0.1} focalLength={0.1} bokehScale={0.1} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
      </EffectComposer>
    </Suspense>
  </Canvas>
);

export default App;
