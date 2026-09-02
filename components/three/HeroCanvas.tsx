"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { HeroScene } from "@/components/three/HeroScene";

function useReducedMotionPreference() {
    return useMemo(() => {
        if (typeof window === "undefined") {
            return false;
        }

        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);
}

function supportsWebGL() {
    if (typeof window === "undefined") {
        return false;
    }

    try {
        const canvas = document.createElement("canvas");
        return Boolean(
            canvas.getContext("webgl") || canvas.getContext("experimental-webgl"),
        );
    } catch {
        return false;
    }
}

export function HeroCanvas() {
    const reducedMotion = useReducedMotionPreference();
    const canRender = supportsWebGL();

    if (!canRender) {
        return (
            <div className="flex h-full min-h-[16rem] items-center justify-center text-center">
                <p className="label-mono px-6">Visual experiment unavailable on this device.</p>
            </div>
        );
    }

    return (
        <div className="h-full min-h-[18rem] w-full">
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 3.4], fov: 34 }}
                frameloop={reducedMotion ? "never" : "always"}
                gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[1.5, 1.2, 1]} intensity={0.75} />
                <HeroScene reducedMotion={reducedMotion} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
