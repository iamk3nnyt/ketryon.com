'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Load Earth textures
  const [earthTexture, bumpMap, specularMap] = useTexture([
    '/earth/earth_daymap.jpg',
    '/earth/earth_normal_map.jpg',
    '/earth/earth_specular_map.jpg',
  ]);

  // Rotate the Earth
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Sphere ref={earthRef} args={[1, 64, 64]}>
      <meshPhongMaterial
        map={earthTexture}
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={specularMap}
        specular={new THREE.Color('grey')}
        shininess={5}
      />
    </Sphere>
  );
} 