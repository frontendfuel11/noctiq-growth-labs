import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function Sphere() {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.25}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.08}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingSphere() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#7c3aed" />
          <pointLight position={[-5, -5, -5]} intensity={0.4} color="#3b82f6" />
          <Sphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
