import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return pos;
    }, []);

    const ref = useRef();
    const lineRef = useRef();

    // Create geometry for lines
    const lineGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, [positions]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.rotation.y = t * 0.05;
            ref.current.rotation.x = t * 0.02;
        }
    });

    return (
        <group>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#3b82f6"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>

            {/* Subtle background glow */}
            <mesh scale={15}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="#0f172a" transparent opacity={0.15} side={THREE.BackSide} />
            </mesh>
        </group>
    );
}

// A separate component for a more complex "Floating Tech Fragments" look
function FloatingCrystals() {
    const crystalCount = 10;
    const crystals = useMemo(() => {
        return Array.from({ length: crystalCount }).map(() => ({
            position: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10],
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
            scale: 0.1 + Math.random() * 0.2
        }));
    }, []);

    const groupRef = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        groupRef.current.children.forEach((child, i) => {
            child.rotation.x += 0.005;
            child.rotation.y += 0.005;
            child.position.y += Math.sin(t + i) * 0.002;
        });
    });

    return (
        <group ref={groupRef}>
            {crystals.map((c, i) => (
                <mesh key={i} position={c.position} rotation={c.rotation} scale={c.scale}>
                    <octahedronGeometry />
                    <meshStandardMaterial
                        color="#2563eb"
                        emissive="#1d4ed8"
                        emissiveIntensity={0.5}
                        metalness={0.9}
                        roughness={0.1}
                        wireframe
                    />
                </mesh>
            ))}
        </group>
    );
}

function SceneContent() {
    const { mouse, camera } = useThree();
    const vec = new THREE.Vector3();

    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 3, mouse.y * 3, 10), 0.02);
        camera.lookAt(0, 0, 0);
    });

    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#2563eb" />

            <NeuralNetwork />
            <FloatingCrystals />

            <fog attach="fog" args={["#020617", 5, 20]} />
        </>
    );
}

const Scene = () => {
    return (
        <div className="w-full h-full bg-[#020617]">
            <Canvas dpr={[1, 2]}>
                <SceneContent />
            </Canvas>
        </div>
    );
};

export default Scene;
