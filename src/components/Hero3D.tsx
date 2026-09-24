"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          wireframe 
          emissive="#6d28d9"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Core inside the wireframe */}
      <mesh scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial 
          color="#3b82f6" 
          transmission={0.9} 
          opacity={1} 
          metalness={0.1} 
          roughness={0.1} 
          ior={1.5} 
          thickness={1} 
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <AnimatedSphere />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#8b5cf6" />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
