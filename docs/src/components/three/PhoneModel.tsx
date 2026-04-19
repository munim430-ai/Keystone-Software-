import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import AppScreen from './AppScreen';

interface Props {
  mousePos: { x: number; y: number };
  position?: [number, number, number];
  scale?: number;
}

export default function PhoneModel({ mousePos, position = [2.4, 0.3, 0], scale = 1 }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const rotX = useRef(0.05);
  const rotY = useRef(-0.2);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const targetY = -0.2 + mousePos.x * -0.2;
    const targetX = 0.05 + mousePos.y * 0.12;

    rotX.current += (targetX - rotX.current) * 0.04;
    rotY.current += (targetY - rotY.current) * 0.04;

    groupRef.current.rotation.x = rotX.current;
    groupRef.current.rotation.y = rotY.current;

    // Float offset from laptop — opposite phase
    groupRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.5 + 1.2) * 0.08;
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>

      {/* Phone body */}
      <RoundedBox args={[1.1, 2.2, 0.09]} radius={0.1} smoothness={6}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.75}
          roughness={0.18}
          envMapIntensity={1.1}
        />
      </RoundedBox>

      {/* Screen glass */}
      <mesh position={[0, 0, 0.046]}>
        <boxGeometry args={[0.96, 2.02, 0.005]} />
        <meshStandardMaterial color="#050505" roughness={0.05} metalness={0.1} />
      </mesh>

      {/* Dynamic island / notch */}
      <mesh position={[0, 0.93, 0.052]}>
        <capsuleGeometry args={[0.04, 0.14, 8, 16]} />
        <meshStandardMaterial color="#000" roughness={1} />
      </mesh>

      {/* Screen content */}
      <Html
        transform
        occlude
        position={[0, -0.02, 0.053]}
        style={{ width: 88, height: 176, pointerEvents: 'none', borderRadius: 2, overflow: 'hidden' }}
        scale={0.01}
      >
        <AppScreen />
      </Html>

      {/* Side button (right) */}
      <mesh position={[0.556, 0.3, 0]}>
        <boxGeometry args={[0.015, 0.22, 0.06]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Volume buttons (left) */}
      {[-0.1, 0.15].map((y, i) => (
        <mesh key={i} position={[-0.556, y, 0]}>
          <boxGeometry args={[0.015, 0.14, 0.055]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}
