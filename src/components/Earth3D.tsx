import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const EARTH_MAP = "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";
const EARTH_SPEC = "https://threejs.org/examples/textures/planets/earth_specular_2048.jpg";
const EARTH_NORMAL = "https://threejs.org/examples/textures/planets/earth_normal_2048.jpg";
const CLOUDS = "https://threejs.org/examples/textures/planets/earth_clouds_1024.png";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const [map, spec, normal, clouds] = useLoader(THREE.TextureLoader, [
    EARTH_MAP,
    EARTH_SPEC,
    EARTH_NORMAL,
    CLOUDS,
  ]);

  useFrame((_, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.12;
    if (cloudsRef.current) cloudsRef.current.rotation.y += delta * 0.16;
  });

  return (
    <group rotation={[0.35, 0, 0.15]}>
      {/* Atmosphere glow */}
      <mesh scale={1.18}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#7B5EF8"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh scale={1.08}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#9F6EFF"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 96, 96]} />
        <meshPhongMaterial
          map={map}
          specularMap={spec}
          normalMap={normal}
          specular={new THREE.Color("#9F6EFF")}
          shininess={14}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} scale={1.012}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial map={clouds} transparent opacity={0.4} depthWrite={false} />
      </mesh>
    </group>
  );
}

export function Earth3D() {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(123,94,248,0.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="relative"
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 2, 5]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-5, -2, -3]} intensity={0.3} color="#7B5EF8" />
        <Suspense fallback={null}>
          <Stars radius={50} depth={30} count={1200} factor={2} fade speed={0.5} />
          <Earth />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
