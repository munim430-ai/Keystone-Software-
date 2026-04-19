import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
  count?: number;
  mousePos: { x: number; y: number };
}

export default function ParticleField({ count = 800, mousePos }: Props) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }
    return { positions, velocities };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      pos[i * 3]     += velocities[i * 3]     + mousePos.x * 0.0008;
      pos[i * 3 + 1] += velocities[i * 3 + 1] + mousePos.y * 0.0008;
      pos[i * 3 + 2] += velocities[i * 3 + 2];

      // Wrap particles that drift out of bounds
      if (pos[i * 3] > 20)  pos[i * 3] = -20;
      if (pos[i * 3] < -20) pos[i * 3] = 20;
      if (pos[i * 3 + 1] > 20)  pos[i * 3 + 1] = -20;
      if (pos[i * 3 + 1] < -20) pos[i * 3 + 1] = 20;
      if (pos[i * 3 + 2] > 10)  pos[i * 3 + 2] = -10;
      if (pos[i * 3 + 2] < -10) pos[i * 3 + 2] = 10;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
