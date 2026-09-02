"use client";

import { useEffect, useState } from "react";

export function InteractiveCursor() {
    const [active, setActive] = useState(false);
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: fine)");
        const updateMode = () => setActive(mediaQuery.matches);
        const handleModeChange = () => handleExperienceChange();
        const handleExperienceChange = () => {
            setActive(mediaQuery.matches && document.documentElement.dataset.experience === "interactive");
        };
        const handlePointerMove = (event: PointerEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setHovering(Boolean((event.target as HTMLElement).closest("a, button, input, textarea, summary")));
        };

        updateMode();
        handleExperienceChange();
        mediaQuery.addEventListener("change", handleModeChange);
        document.addEventListener("pointermove", handlePointerMove, { passive: true });
        const observer = new MutationObserver(handleExperienceChange);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-experience"] });

        return () => {
            mediaQuery.removeEventListener("change", handleModeChange);
            document.removeEventListener("pointermove", handlePointerMove);
            observer.disconnect();
        };
    }, []);

    if (!active) {
        return null;
    }

    return (
        <span
            className={`interactive-cursor ${hovering ? "is-hovering" : ""}`}
            style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            aria-hidden="true"
        >
        </span>
    );
}
