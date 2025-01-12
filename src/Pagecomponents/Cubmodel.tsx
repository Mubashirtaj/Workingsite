"use client";

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "@/lib/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

function Cube() {
  const mesh = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    console.log(state);

    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.15;
      mesh.current.rotation.y += delta * 0.15;
      mesh.current.rotation.z += delta * 0.15;
    }
  });

  const texture_1 = useLoader(TextureLoader, "/test.png");
  const texture_2 = useLoader(TextureLoader, "/test.png");
  const texture_3 = useLoader(TextureLoader, "/test.png");
  const texture_4 = useLoader(TextureLoader, "/test.png");
  const texture_5 = useLoader(TextureLoader, "/test.png");
  const texture_6 = useLoader(TextureLoader, "/test.png");

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </mesh>
  );
}

export default function CubePage() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-2xl aspect-square">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={2} />
            <directionalLight position={[2, 1, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
