import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import TerminalScreen from './TerminalScreen';

interface Props {
  mousePos: { x: number; y: number };
}

const silver: React.ComponentProps<'meshStandardMaterial'> = {
  color: '#b8b8b8',
  metalness: 0.92,
  roughness: 0.12,
  envMapIntensity: 1.2,
};

const darkSilver: React.ComponentProps<'meshStandardMaterial'> = {
  color: '#888',
  metalness: 0.85,
  roughness: 0.2,
};

export default function LaptopModel({ mousePos }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const rotX = useRef(0);
  const rotY = useRef(0.3);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Target rotation from mouse
    const targetY = 0.3 + mousePos.x * 0.28;
    const targetX = -0.08 + mousePos.y * -0.14;

    rotX.current += (targetX - rotX.current) * 0.04;
    rotY.current += (targetY - rotY.current) * 0.04;

    groupRef.current.rotation.x = rotX.current;
    groupRef.current.rotation.y = rotY.current;

    // Gentle float
    groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.08 - 0.1;
  });

  return (
    <group ref={groupRef} position={[-0.6, 0, 0]}>

      {/* ── Screen Lid ── */}
      <group position={[0, 1.06, -1.1]} rotation={[-1.15, 0, 0]}>
        {/* Lid body */}
        <RoundedBox args={[3.2, 2.0, 0.07]} radius={0.04} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial {...silver} />
        </RoundedBox>

        {/* Apple-logo-style notch on back */}
        <mesh position={[0, 0, 0.038]}>
          <circleGeometry args={[0.12, 32]} />
          <meshStandardMaterial color="#999" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Screen bezel */}
        <mesh position={[0, 0, 0.04]}>
          <boxGeometry args={[3.04, 1.88, 0.005]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Screen content via Html */}
        <Html
          transform
          occlude
          position={[0, 0, 0.048]}
          style={{ width: 290, height: 180, pointerEvents: 'none', borderRadius: 2, overflow: 'hidden' }}
          scale={0.01}
        >
          <TerminalScreen />
        </Html>
      </group>

      {/* ── Hinge area ── */}
      <mesh position={[0, 0.03, -1.08]}>
        <boxGeometry args={[3.0, 0.06, 0.08]} />
        <meshStandardMaterial {...darkSilver} />
      </mesh>

      {/* ── Base body ── */}
      <RoundedBox args={[3.2, 0.06, 2.2]} radius={0.04} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial {...silver} />
      </RoundedBox>

      {/* Keyboard deck */}
      <mesh position={[0, 0.04, 0.08]}>
        <boxGeometry args={[2.85, 0.005, 1.7]} />
        <meshStandardMaterial color="#1c1c1c" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Trackpad */}
      <RoundedBox args={[0.85, 0.004, 0.58]} radius={0.03} smoothness={4} position={[0, 0.044, 0.65]}>
        <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.4} />
      </RoundedBox>

      {/* Bottom edge chamfer hint */}
      <mesh position={[0, -0.028, 0]}>
        <boxGeometry args={[3.18, 0.01, 2.18]} />
        <meshStandardMaterial color="#a0a0a0" metalness={0.9} roughness={0.15} />
      </mesh>
    </group>
  );
}
