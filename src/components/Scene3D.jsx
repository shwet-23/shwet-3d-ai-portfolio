import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Sparkles, Environment } from '@react-three/drei';

function Core() {
  const core = useRef();
  const ringA = useRef();
  const ringB = useRef();
  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.18;
      core.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.14;
    }
    if (ringA.current) {
      ringA.current.rotation.x += delta * 0.17;
      ringA.current.rotation.y -= delta * 0.22;
    }
    if (ringB.current) {
      ringB.current.rotation.y += delta * 0.15;
      ringB.current.rotation.z -= delta * 0.12;
    }
  });
  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.04, 5]} />
          <MeshDistortMaterial color="#8c7bff" emissive="#3b2b99" emissiveIntensity={0.72} roughness={0.16} metalness={0.82} distort={0.24} speed={1.3} />
        </mesh>
        <mesh scale={1.16}>
          <icosahedronGeometry args={[1.04, 2]} />
          <meshBasicMaterial color="#9e91ff" wireframe transparent opacity={0.28} />
        </mesh>
        <mesh ref={ringA} rotation={[1.02, 0.3, 0.2]}>
          <torusGeometry args={[1.62, 0.012, 12, 180]} />
          <meshStandardMaterial color="#70f0dc" emissive="#20cdb7" emissiveIntensity={2.2} metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh ref={ringB} rotation={[0.4, 0.5, 1.12]}>
          <torusGeometry args={[1.86, 0.009, 10, 180]} />
          <meshStandardMaterial color="#9c8cff" emissive="#6d55ff" emissiveIntensity={1.8} />
        </mesh>
        <mesh rotation={[0.9, 0.2, 0.8]}>
          <torusGeometry args={[1.36, 0.006, 8, 180]} />
          <meshBasicMaterial color="#d7d2ff" transparent opacity={0.62} />
        </mesh>
      </Float>
      <Sparkles count={70} scale={5.5} size={2.3} speed={0.35} color="#a8a0ff" />
    </group>
  );
}

function OrbitalDot({ position, color, scale = 0.065 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.14;
    }
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.4} />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 43 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 4]} intensity={22} color="#8e7cff" />
        <pointLight position={[-3, -2, 2]} intensity={14} color="#37e7d0" />
        <Stars radius={45} depth={25} count={800} factor={2} saturation={0.2} fade speed={0.35} />
        <Core />
        <OrbitalDot position={[-2.15, 0.7, 0.25]} color="#62efda" scale={0.07} />
        <OrbitalDot position={[2.05, -0.8, -0.2]} color="#a99aff" scale={0.06} />
        <OrbitalDot position={[0.1, 2.0, -0.3]} color="#ffffff" scale={0.035} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
