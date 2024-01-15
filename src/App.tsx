import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Stats,
  Environment,
} from '@react-three/drei';

import styles from './App.module.scss';
import { Scene } from './components/Scene';


function App() {
    
  return (
    <div className={styles.app}>
      <Canvas 
        shadows 
      >
        <Environment
          files="/test.hdr"
          background
          blur={0.5}
        />
        <directionalLight
          intensity={1}
          castShadow={true}
          shadow-bias={-0.00015}
          shadow-radius={4}
          shadow-blur={10}
          shadow-mapSize={[2048, 2048]}
          position={[85.0, 80.0, 70.0]}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />
        {/* <Stats /> */}
        <Scene />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

export default App;
