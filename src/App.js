import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./App.css";

const WaveShaderMaterial = shaderMaterial(
  {},
  glsl`
   void main(){
     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
   }
   `,

  glsl`
  void main(){
    gl_FragColor = vec4(0.0, 0.4,1.0, 1.0);
  }
  `
);

extend({ WaveShaderMaterial });

const Scene = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <planeBufferGeometry args={[3, 5]} />
        <waveShaderMaterial />
      </mesh>
    </Canvas>
  );
};

const App = () => {
  return <Scene />;
};

export default App;
