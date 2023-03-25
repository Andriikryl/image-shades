import * as THREE from "three";
import { useRef, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./App.css";

const WaveShaderMaterial = shaderMaterial(
  { uTime: 0, uColor: new THREE.Color(0.0, 0.0, 0.0) },
  glsl`
  varying vec2 vUv;
   void main(){
    vUv = uv;
     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
   }
   `,

  glsl`
  precision mediump float;

   uniform vec3 uColor;
   uniform float uTime;
   
   varying vec2 vUv;

    void main(){
    gl_FragColor = vec4(sin(vUv.x + uTime) * uColor, 1.0);
  }
  `
);

extend({ WaveShaderMaterial });

const Wave = () => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <mesh>
      <planeBufferGeometry args={[3, 5]} />
      <waveShaderMaterial uColor={"hotpink"} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Wave />
      </Suspense>
    </Canvas>
  );
};

const App = () => {
  return <Scene />;
};

export default App;
