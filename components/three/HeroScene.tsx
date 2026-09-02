"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

type HeroSceneProps = {
    reducedMotion: boolean;
};

export function HeroScene({ reducedMotion }: HeroSceneProps) {
    const groupRef = useRef<Group>(null);

    useFrame(({ pointer, clock }) => {
        if (!groupRef.current || reducedMotion) {
            return;
        }

        const elapsed = clock.getElapsedTime();
        groupRef.current.rotation.y += (pointer.x * 0.18 - groupRef.current.rotation.y) * 0.03;
        groupRef.current.rotation.x += (-pointer.y * 0.16 - groupRef.current.rotation.x) * 0.03;
        groupRef.current.position.y = Math.sin(elapsed * 0.6) * 0.08;
    });

    return (
        <group ref={groupRef}>
            <mesh>
                <icosahedronGeometry args={[1.1, 1]} />
                <meshStandardMaterial
                    color="#b88f85"
                    transparent
                    opacity={0.52}
                    roughness={0.9}
                    metalness={0.05}
                />
            </mesh>
            <mesh scale={1.14}>
                <icosahedronGeometry args={[1.1, 1]} />
                <meshBasicMaterial color="#7d5750" wireframe transparent opacity={0.2} />
            </mesh>
        </group>
    );
}
