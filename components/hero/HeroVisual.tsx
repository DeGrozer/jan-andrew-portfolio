"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(
    () => import("@/components/three/HeroCanvas").then((mod) => mod.HeroCanvas),
    {
        ssr: false,
        loading: () => null,
    },
);

export function HeroVisual() {
    const [interactive, setInteractive] = useState(false);

    useEffect(() => {
        const updateMode = () => {
            setInteractive(document.documentElement.dataset.experience === "interactive");
        };
        const observer = new MutationObserver(updateMode);

        updateMode();
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-experience"] });

        return () => observer.disconnect();
    }, []);

    return interactive ? <HeroCanvas /> : null;
}
