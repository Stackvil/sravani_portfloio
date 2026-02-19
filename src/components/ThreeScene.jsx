import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleField(props) {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#8b5cf6"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

function FloatingShape() {
    const mesh = useRef(null);
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = Math.cos(t / 4) / 2;
            mesh.current.rotation.y = Math.sin(t / 4) / 2;
            mesh.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
        }
    });
    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={mesh} position={[1, 0, 0]} scale={0.4}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
            </mesh>
        </Float>
    );
}

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 1] }}>
            <ambientLight intensity={0.5} />
            <ParticleField />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
            <FloatingShape />
        </Canvas>
    );
};

export default Scene;
