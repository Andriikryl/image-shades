import { Canvas } from "@react-three/fiber";

import "./App.css";

const Scene = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <planeBufferGeometry args={[3, 5]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </Canvas>
  );
};

const App = () => {
  return <Scene />;
};

export default App;
