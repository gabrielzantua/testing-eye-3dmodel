import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  scene.scale.set(0.5, 0.5, 0.5);
  return <primitive object={scene} />;
}

function App() {
  return (
    <div style={{ background: '#1a1f2e', minHeight: '100vh', color: 'white' }}>
      <header style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 900, color: '#4a9eff' }}>PROJECT R.I.S.E</h1>
        <p style={{ color: '#8a9bb8' }}>Renovating Indoor Sports for Excellence</p>
      </header>

      <div style={{ height: '60vh', position: 'relative', margin: '0 auto', maxWidth: '1200px' }}>
        <Canvas
          camera={{ position: [10, 10, 10], fov: 50 }}
          style={{ background: '#141824', borderRadius: '12px' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <directionalLight intensity={2.5} position={[10, 10, 10]} castShadow />
            <Model modelPath="/models/eye/scene.gltf" />
            <OrbitControls
              enableDamping
              dampingFactor={0.05}
              minDistance={8}
              maxDistance={20}
              rotateSpeed={0.8}
              enableZoom
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          </Suspense>
        </Canvas>
      </div>

      <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div style={{ background: '#232838', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📐</div>
            <h3 style={{ color: '#4a9eff', marginBottom: '1rem' }}>3D Renovation Model</h3>
            <p style={{ color: '#8a9bb8' }}>Complete AutoCAD modeling of the indoor sports facility with modern amenities and improved space utilization.</p>
          </div>

          <div style={{ background: '#232838', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏃</div>
            <h3 style={{ color: '#4a9eff', marginBottom: '1rem' }}>Enhanced Experience</h3>
            <p style={{ color: '#8a9bb8' }}>Improved facilities designed to enhance the athletic experience for students and faculty.</p>
          </div>

          <div style={{ background: '#232838', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📋</div>
            <h3 style={{ color: '#4a9eff', marginBottom: '1rem' }}>Research Documentation</h3>
            <p style={{ color: '#8a9bb8' }}>Comprehensive research and planning documentation supporting the renovation proposal.</p>
          </div>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#8a9bb8' }}>
        © 2023 Project R.I.S.E
      </footer>
    </div>
  );
}

export default App;