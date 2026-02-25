import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function HolographicGrid() {
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.z = Math.sin(t * 0.2) * 0.5;
        }
    });

    return (
        <gridHelper
            ref={ref}
            args={[100, 50, "#2563eb", "#0f172a"]}
            position={[0, -2, 0]}
            rotation={[Math.PI / 10, 0, 0]}
        />
    );
}

function ProfessionalCore() {
    const mesh = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = t * 0.2;
            mesh.current.rotation.y = t * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={mesh} position={[0, 0, 0]}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#2563eb"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    metalness={0.8}
                    roughness={0.2}
                    emissive="#3b82f6"
                    emissiveIntensity={0.5}
                />
            </mesh>
        </Float>
    );
}

function Rig() {
    const { camera, mouse } = useThree();
    const vec = new THREE.Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 1, 10), 0.05);
        camera.lookAt(0, 0, 0);
    });
}

const Scene = () => {
    return (
        <div className="w-full h-full">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <HolographicGrid />
                <ProfessionalCore />
                <Rig />

                <fog attach="fog" args={["#020617", 5, 20]} />
            </Canvas>
        </div>
    );
};

export default Scene;
