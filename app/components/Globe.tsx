'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Helper: Convert lat/lon to 3D coordinates on a sphere
function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Minimal sample of landmass points (North America & Europe outline)
const LAND_POINTS: [number, number][] = [
  [40.7128, -74.006],   // New York
  [34.0522, -118.2437], // Los Angeles
  [49.2827, -123.1207], // Vancouver
  [25.7617, -80.1918],  // Miami
  [51.5074, -0.1278],   // London
  [48.8566, 2.3522],    // Paris
  [52.52, 13.405],      // Berlin
  [41.9028, 12.4964],   // Rome
  [59.3293, 18.0686],   // Stockholm
  [55.7558, 37.6173],   // Moscow
  [60.1699, 24.9384],   // Helsinki
  [45.4215, -75.6997],  // Ottawa
  [19.4326, -99.1332],  // Mexico City
  [35.6895, 139.6917],  // Tokyo (for variety)
];

export function GlobeContents() {
  const globeRef = useRef<THREE.Group>(null);
  // Set initial tilt
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.rotation.x = 0.41; // ~23.5 degrees in radians
    }
  }, []);
  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15;
    }
  });
  // Project landmass points
  const points = useMemo(() =>
    LAND_POINTS.map(([lat, lon]) => latLonToVec3(lat, lon, 1.01)),
    []
  );
  return (
    <group ref={globeRef}>
      {/* White sphere for the globe */}
      <mesh>
        <sphereGeometry args={[1, 48, 32]} />
        <meshStandardMaterial color="#fff" roughness={0.7} metalness={0.1} />
      </mesh>
      {/* Dots for landmasses */}
      {points.map((pos, i) => (
        <mesh key={i} position={pos.toArray()}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      ))}
    </group>
  );
} 