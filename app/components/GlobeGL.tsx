'use client';

import { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';

// Sample of world landmass points (for demo; use a full dataset for production)
const LAND_POINTS = [
  // North America
  { lat: 49.38, lng: -66.94 }, { lat: 25.82, lng: -80.13 }, { lat: 37.77, lng: -122.42 },
  { lat: 40.71, lng: -74.01 }, { lat: 45.42, lng: -75.69 }, { lat: 34.05, lng: -118.24 },
  { lat: 29.76, lng: -95.37 }, { lat: 39.95, lng: -75.16 }, { lat: 41.88, lng: -87.62 },
  { lat: 32.77, lng: -96.79 }, { lat: 47.60, lng: -122.33 }, { lat: 25.76, lng: -80.19 },
  // South America
  { lat: -34.60, lng: -58.38 }, { lat: -22.90, lng: -43.20 }, { lat: -12.05, lng: -77.04 },
  { lat: -33.45, lng: -70.66 }, { lat: -23.55, lng: -46.63 },
  // Europe
  { lat: 51.50, lng: -0.12 }, { lat: 48.85, lng: 2.35 }, { lat: 52.52, lng: 13.40 },
  { lat: 41.90, lng: 12.49 }, { lat: 59.32, lng: 18.06 }, { lat: 55.75, lng: 37.61 },
  { lat: 60.16, lng: 24.93 }, { lat: 45.46, lng: 9.19 }, { lat: 40.41, lng: -3.70 },
  // Africa
  { lat: -1.29, lng: 36.82 }, { lat: -26.20, lng: 28.04 }, { lat: 30.04, lng: 31.23 },
  { lat: 6.52, lng: 3.37 }, { lat: 14.69, lng: -17.44 },
  // Asia
  { lat: 35.68, lng: 139.69 }, { lat: 31.23, lng: 121.47 }, { lat: 28.61, lng: 77.20 },
  { lat: 39.90, lng: 116.40 }, { lat: 1.35, lng: 103.82 }, { lat: 13.75, lng: 100.50 },
  { lat: 37.56, lng: 126.97 }, { lat: 55.75, lng: 37.61 },
  // Australia
  { lat: -33.86, lng: 151.20 }, { lat: -37.81, lng: 144.96 },
  // More points can be added for higher detail
];

export default function GlobeGL() {
  const globeEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeEl.current) return;
    const globe = new Globe(globeEl.current)
      .globeImageUrl('')
      .globeMaterial(new THREE.MeshStandardMaterial({ color: '#fff' }))
      .backgroundColor('rgba(0,0,0,0)')
      .pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
      .showAtmosphere(false)
      .width(400)
      .height(400)
      .pointsData(LAND_POINTS)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor(() => '#222')
      .pointAltitude(0.01)
      .pointRadius(0.6);

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    return () => {
      globeEl.current && (globeEl.current.innerHTML = '');
    };
  }, []);

  return <div ref={globeEl} style={{ width: 400, height: 400, margin: '0 auto' }} />;
} 