"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectScreenshot {
    src: string;
    alt: string;
}

interface ProjectScreenshotCarouselProps {
    screenshots: ProjectScreenshot[];
    projectName: string;
    liveUrl?: string;
    overlayLabel?: string;
}

export function ProjectScreenshotCarousel({ screenshots, projectName, liveUrl, overlayLabel }: ProjectScreenshotCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updatePreference = () => setReducedMotion(mediaQuery.matches);
        updatePreference();
        mediaQuery.addEventListener("change", updatePreference);
        return () => mediaQuery.removeEventListener("change", updatePreference);
    }, []);

    useEffect(() => {
        if (screenshots.length <= 1 || reducedMotion || isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % screenshots.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [isPaused, reducedMotion, screenshots.length]);

    if (!screenshots.length) {
        return (
            <div className="project-carousel-empty">
                <div>
                    <span className="label-mono">PROJECT SCREENSHOTS</span>
                    <p>Add screenshots to <code>/public/images/projects/{projectName.toLowerCase()}/</code></p>
                </div>
            </div>
        );
    }

    const handleClick = () => {
        if (liveUrl) {
            window.open(liveUrl, "_blank");
        }
    };

    return (
        <div className="project-carousel-auto" role="region" aria-label={`${projectName} screenshots`} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }}>
            <div className="project-carousel-auto-viewport">
                <div 
                    className="project-carousel-auto-track" 
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    role="presentation"
                >
                    {screenshots.map((screenshot, idx) => (
                        <div key={`${projectName}-screenshot-${idx}`} className="project-screenshot-auto-card">
                            <Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 767px) 100vw, 58vw" />
                        </div>
                    ))}
                </div>
            </div>

            {liveUrl && (
                <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-carousel-auto-overlay"
                    aria-label={overlayLabel ? overlayLabel.toLowerCase() : `Visit ${projectName} site`}
                >
                    <div className="project-carousel-auto-overlay-content">
                        <span className="label-mono inline-flex items-center gap-2 border border-[color:var(--foreground)] bg-[color:var(--background)] px-3 py-2 text-[0.58rem] tracking-[0.16em] text-[color:var(--foreground)]">
                            {overlayLabel ?? "VISIT SITE"}
                            <span aria-hidden="true">↗</span>
                        </span>
                    </div>
                </a>
            )}

            {screenshots.length > 1 && (
                <div className="project-carousel-auto-indicators">
                    {screenshots.map((_, idx) => (
                        <button
                            type="button"
                            onClick={() => setActiveIndex(idx)}
                            key={`indicator-${idx}`}
                            className={`project-carousel-auto-indicator ${idx === activeIndex ? "active" : ""}`}
                            aria-label={`Show screenshot ${idx + 1}`}
                            aria-current={idx === activeIndex ? "true" : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
