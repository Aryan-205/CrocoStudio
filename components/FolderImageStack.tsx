"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { stockImages } from "@/data/stock-images";

const CAMERA_POSITION: [number, number, number] = [8.5, 3.2, 7.5];
const LOOK_AT: [number, number, number] = [0.4, 0.6, 1.6];
const HOVER_Y_OFFSET = 0.65;
const HOVER_LERP = 0.14;

function ImagePlane({
  position,
  texture,
}: {
  position: [number, number, number];
  texture: THREE.Texture;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const hovered = useRef(false);
  const baseY = position[1];

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const targetY = hovered.current ? baseY + HOVER_Y_OFFSET : baseY;
    mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, targetY, HOVER_LERP);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={[0, 0, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        hovered.current = true;
      }}
      onPointerOut={() => {
        hovered.current = false;
      }}
    >
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial map={texture} side={2} toneMapped={false} />
    </mesh>
  );
}

function PlaneStack() {
  const textures = useTexture(stockImages.map((image) => image.url));

  return (
    <group position={[0, 0, 5]}>
      {textures.map((texture, i) => (
        <ImagePlane
          key={stockImages[i]?.id ?? i}
          position={[0, 0, -i]}
          texture={texture}
        />
      ))}
    </group>
  );
}

function StackControls() {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls?.domElement) return;

    const el = controls.domElement;
    const wheelHandler = (
      controls as OrbitControlsImpl & {
        _onMouseWheel: (event: WheelEvent) => void;
      }
    )._onMouseWheel;

    el.removeEventListener("wheel", wheelHandler);
    el.style.touchAction = "pan-y";
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      target={LOOK_AT}
      enableRotate
      enablePan
      enableZoom
      minDistance={4}
      maxDistance={22}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.PAN,
        RIGHT: THREE.MOUSE.PAN,
      }}
      touches={{
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN,
      }}
    />
  );
}

export default function FolderImageStack() {
  return (
    <Canvas
      camera={{
        position: CAMERA_POSITION,
        fov: 50,
        near: 0.01,
        far: 100,
      }}
      onCreated={({ camera }) => {
        camera.lookAt(...LOOK_AT);
      }}
      gl={{ antialias: true }}
      style={{ touchAction: "pan-y" }}
    >
      <PlaneStack />
      <StackControls />
    </Canvas>
  );
}
