"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SceneTarget = {
  align: number; distort: number; expand: number; network: number; stack: number;
  glow: number; rotY: number; camZ: number; camX: number; camY: number;
};

const SCENES: SceneTarget[] = [
  { align: 0.35, distort: 0.0, expand: 0.0, network: 0.0, stack: 0.0, glow: 0.55, rotY:  0.15, camZ: 18, camX:  0,   camY:  0    },
  { align: 0.6,  distort: 1.0, expand: 0.0, network: 0.0, stack: 0.0, glow: 0.40, rotY:  0.05, camZ: 17, camX:  0,   camY:  0    },
  { align: 1.0,  distort: 0.0, expand: 0.0, network: 0.0, stack: 0.0, glow: 0.85, rotY:  0.0,  camZ: 16, camX:  0,   camY:  0    },
  { align: 1.0,  distort: 0.0, expand: 1.0, network: 0.0, stack: 0.0, glow: 0.95, rotY: -0.25, camZ: 18, camX:  3.5, camY:  0    },
  { align: 1.0,  distort: 0.0, expand: 0.6, network: 1.0, stack: 0.0, glow: 0.85, rotY: -0.15, camZ: 21, camX:  3.0, camY: -0.5  },
  { align: 1.0,  distort: 0.0, expand: 0.4, network: 0.5, stack: 0.0, glow: 0.70, rotY:  0.05, camZ: 26, camX:  0,   camY:  0    },
  { align: 1.0,  distort: 0.0, expand: 0.0, network: 0.0, stack: 1.0, glow: 0.95, rotY:  0.35, camZ: 18, camX: -3.5, camY:  0    },
  { align: 1.0,  distort: 0.0, expand: 0.0, network: 0.0, stack: 0.4, glow: 1.10, rotY:  0.0,  camZ: 14, camX:  0,   camY:  0    },
  { align: 1.0,  distort: 0.0, expand: 0.0, network: 0.0, stack: 0.0, glow: 1.25, rotY:  0.0,  camZ: 17, camX:  0,   camY:  0    }
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function CubeStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current!;
    const isMobile =
      window.matchMedia("(max-width: 780px)").matches || window.innerWidth < 781;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    stage.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x050b1e, 14, 38);

    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 18);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0x6b7a96, 0.35));
    const key = new THREE.DirectionalLight(0xb8c7e0, 0.85);
    key.position.set(6, 8, 7);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x22d3ee, 0.3);
    fill.position.set(-7, -3, 4);
    scene.add(fill);
    const rim = new THREE.PointLight(0x22d3ee, 0.55, 28);
    rim.position.set(0, 0, 6);
    scene.add(rim);

    const COUNT  = isMobile ? 36 : 90;
    const GRID_X = isMobile ? 6  : 10;
    const GRID_Y = isMobile ? 6  : 9;
    const SPACING = 1.18;

    const cubeGeo = new THREE.BoxGeometry(0.72, 0.72, 0.72);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x10172a, roughness: 0.78, metalness: 0.18
    });
    const edgeGeo = new THREE.EdgesGeometry(cubeGeo);
    const edgeMatBase = new THREE.LineBasicMaterial({
      color: 0x22d3ee, transparent: true, opacity: 0.55
    });

    const group = new THREE.Group();
    scene.add(group);

    type Cube = {
      mesh: THREE.Mesh;
      edge: THREE.LineSegments;
      base: { x: number; y: number; z: number };
      scattered: { x: number; y: number; z: number; rx: number; ry: number; rz: number };
      seed: number;
    };

    const cubes: Cube[] = [];

    for (let i = 0; i < COUNT; i++) {
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      const edge = new THREE.LineSegments(edgeGeo, edgeMatBase.clone());
      mesh.add(edge);

      const ix = i % GRID_X;
      const iy = Math.floor(i / GRID_X) % GRID_Y;
      const iz = Math.floor(i / (GRID_X * GRID_Y));
      const tx = (ix - (GRID_X - 1) / 2) * SPACING;
      const ty = (iy - (GRID_Y - 1) / 2) * SPACING;
      const tz = -iz * SPACING;

      const sx = tx + (Math.random() - 0.5) * 4.5;
      const sy = ty + (Math.random() - 0.5) * 4.5;
      const sz = tz + (Math.random() - 0.5) * 3.5;

      mesh.position.set(sx, sy, sz);
      mesh.rotation.set(
        (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 0.8,
        (Math.random() - 0.5) * 0.8
      );

      cubes.push({
        mesh, edge,
        base: { x: tx, y: ty, z: tz },
        scattered: { x: sx, y: sy, z: sz, rx: mesh.rotation.x, ry: mesh.rotation.y, rz: mesh.rotation.z },
        seed: Math.random() * Math.PI * 2
      });
      group.add(mesh);
    }

    const state = { sceneIdx: 0, sceneFrac: 0 };
    const cur: SceneTarget = JSON.parse(JSON.stringify(SCENES[0]));

    const sections = Array.from(document.querySelectorAll("main .scene")) as HTMLElement[];

    const updateProgress = () => {
      const vh = window.innerHeight;
      let active = 0, frac = 0;
      for (let i = 0; i < sections.length; i++) {
        const r = sections[i].getBoundingClientRect();
        if (r.top < vh * 0.55 && r.bottom > vh * 0.4) {
          active = i;
          frac = 1 - Math.max(0, Math.min(1, r.top / vh));
          break;
        }
      }
      state.sceneIdx = active;
      state.sceneFrac = frac;
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.fov = w < 780 ? 46 : 38;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    onResize();

    let mx = 0, my = 0;
    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    if (!isMobile && !reduced) window.addEventListener("mousemove", onMouseMove);

    let t0 = performance.now();
    let raf = 0;

    const render = () => {
      const now = performance.now();
      const dt = Math.min(0.05, (now - t0) / 1000);
      t0 = now;

      const target = SCENES[state.sceneIdx] || SCENES[0];
      const ease = 1 - Math.pow(0.001, dt);

      (Object.keys(target) as (keyof SceneTarget)[]).forEach((k) => {
        cur[k] = lerp(cur[k], target[k], ease * 0.9);
      });

      const camTargetZ = cur.camZ - 0.5 * state.sceneFrac;
      camera.position.x += (cur.camX - camera.position.x) * ease;
      camera.position.y += (cur.camY - camera.position.y) * ease;
      camera.position.z += (camTargetZ - camera.position.z) * ease;
      camera.lookAt(0, 0, 0);

      group.rotation.y += (cur.rotY - group.rotation.y) * ease * 0.6;
      group.rotation.x = Math.sin(now * 0.0001) * 0.05;

      if (!isMobile && !reduced) {
        group.position.x += (mx * 0.6 - group.position.x) * 0.04;
        group.position.y += (-my * 0.4 - group.position.y) * 0.04;
      }

      for (let i = 0; i < cubes.length; i++) {
        const c = cubes[i];
        const b = c.base, s = c.scattered;

        let px = lerp(s.x, b.x, cur.align);
        let py = lerp(s.y, b.y, cur.align);
        let pz = lerp(s.z, b.z, cur.align);

        if (cur.distort > 0.001) {
          const w = cur.distort;
          px += Math.sin(now * 0.0008 + c.seed * 2)   * 0.6  * w;
          py += Math.cos(now * 0.0007 + c.seed * 1.7) * 0.55 * w;
          pz += Math.sin(now * 0.0005 + c.seed)       * 0.35 * w;
        }
        if (cur.expand > 0.001) {
          const e = cur.expand;
          const dx = b.x, dy = b.y;
          const r = Math.sqrt(dx * dx + dy * dy) + 0.001;
          px += (dx / r) * e * 1.6;
          py += (dy / r) * e * 1.6;
        }
        if (cur.network > 0.001) {
          py += Math.sin(now * 0.0006 + c.seed * 1.2) * 0.18 * cur.network;
          pz += Math.cos(now * 0.0005 + c.seed)       * 0.25 * cur.network;
        }
        if (cur.stack > 0.001) {
          const layer = i % 5;
          pz += (layer - 2) * 0.55 * cur.stack;
          pz += 0;
          px += (i % 2 === 0 ? -1 : 1) * 0.15 * cur.stack;
        }

        c.mesh.position.set(px, py, pz);

        const restRx = lerp(s.rx, 0, cur.align);
        const restRy = lerp(s.ry, 0, cur.align);
        const restRz = lerp(s.rz, 0, cur.align);
        const spin = cur.distort * 0.3;
        c.mesh.rotation.x = restRx + Math.sin(now * 0.0006 + c.seed) * spin;
        c.mesh.rotation.y = restRy + Math.cos(now * 0.0005 + c.seed) * spin;
        c.mesh.rotation.z = restRz + Math.sin(now * 0.0004 + c.seed) * spin * 0.5;

        const distFromCenter = Math.hypot(b.x, b.y) / 8;
        const glow = Math.min(1, cur.glow * (0.65 + 0.35 * Math.sin(now * 0.0008 + c.seed * 2)));
        (c.edge.material as THREE.LineBasicMaterial).opacity =
          Math.max(0.18, glow * (1 - distFromCenter * 0.45));
      }

      rim.intensity = 0.35 + cur.glow * 0.5;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", onResize);
      if (!isMobile && !reduced) window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      cubeGeo.dispose();
      edgeGeo.dispose();
      cubeMat.dispose();
      edgeMatBase.dispose();
      cubes.forEach((c) => (c.edge.material as THREE.Material).dispose());
      stage.innerHTML = "";
    };
  }, []);

  return <div ref={stageRef} className="fixed inset-0 z-[1]" aria-hidden />;
}
