"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className="scroll-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
    );
}
