"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Zap, Eye, Compass, X, CornerLeftUp } from "lucide-react";

type ThemeMode = "light" | "dark";
type ExperienceMode = "interactive" | "minimal";

const THEME_KEY = "ab:theme";
const EXPERIENCE_KEY = "ab:experience";

export function FloatingControls() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<ThemeMode>("light");
    const [experience, setExperience] = useState<ExperienceMode>("interactive");
    const [controlsOpen, setControlsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const savedTheme = window.localStorage.getItem(THEME_KEY);
        const savedExperience = window.localStorage.getItem(EXPERIENCE_KEY);

        const resolvedTheme: ThemeMode =
            savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
        const resolvedExperience: ExperienceMode =
            savedExperience === "minimal" || savedExperience === "interactive"
                ? savedExperience
                : "interactive";

        setTheme(resolvedTheme);
        setExperience(resolvedExperience);
        document.documentElement.dataset.theme = resolvedTheme;
        document.documentElement.dataset.experience = resolvedExperience;
        setMounted(true);

        let previousY = window.scrollY;
        const hero = document.getElementById("home");
        const updateHeroVisibility = () => {
            if (!hero) return;

            const heroEnd = hero.offsetTop + hero.offsetHeight;
            const isVisible = window.scrollY < heroEnd;
            setHeroVisible(isVisible);
            if (!isVisible) setControlsOpen(false);
        };

        const handleScroll = () => {
            const currentY = window.scrollY;
            setShowScrollTop(currentY > 120 && currentY < previousY);
            updateHeroVisibility();
            previousY = currentY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updateHeroVisibility);
        updateHeroVisibility();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateHeroVisibility);
        };
    }, []);

    const toggleTheme = () => {
        const next: ThemeMode = theme === "light" ? "dark" : "light";
        setTheme(next);
        window.localStorage.setItem(THEME_KEY, next);
        document.documentElement.dataset.theme = next;
    };

    const toggleExperience = () => {
        const next: ExperienceMode =
            experience === "interactive" ? "minimal" : "interactive";
        setExperience(next);
        window.localStorage.setItem(EXPERIENCE_KEY, next);
        document.documentElement.dataset.experience = next;
        requestAnimationFrame(() => {
            const hero = document.getElementById("home");
            if (!hero) return;

            const isHeroVisible = window.scrollY < hero.offsetTop + hero.offsetHeight;
            setHeroVisible(isHeroVisible);
            if (!isHeroVisible) setControlsOpen(false);
        });
    };

    if (!mounted) {
        return null;
    }

    return (
        <>
        <div className={`navigation-controls fixed right-5 top-5 z-[70] flex flex-col items-end gap-3 md:right-7 md:top-7 ${heroVisible ? "is-visible" : ""}`} aria-hidden={!heroVisible}>
            <button
                type="button"
                onClick={() => setControlsOpen((open) => !open)}
                className="navigation-trigger group relative flex h-12 w-12 items-center justify-center text-[color:var(--foreground)] transition-colors hover:text-[color:var(--focus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]"
                aria-label={controlsOpen ? "Close navigation controls" : "Open navigation controls"}
                aria-expanded={controlsOpen}
                tabIndex={heroVisible ? 0 : -1}
            >
                {controlsOpen ? <X size={23} strokeWidth={1.5} /> : <Compass size={23} strokeWidth={1.5} />}
                <span className="navigation-tooltip">Navigation</span>
            </button>
            <div className={`floating-control-items flex flex-col items-end gap-3 ${controlsOpen ? "is-open" : ""}`} aria-hidden={!controlsOpen} inert={!controlsOpen}>
            {/* Theme Toggle */}
            <div className="control-tooltip-wrap relative">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex h-12 w-12 items-center justify-center text-[color:var(--foreground)] transition-colors hover:text-[color:var(--focus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]"
                    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                    {theme === "light" ? (
                        <Sun size={18} strokeWidth={1.5} />
                    ) : (
                        <Moon size={18} strokeWidth={1.5} />
                    )}
                    <span className="navigation-tooltip">{theme === "light" ? "Dark theme" : "Light theme"}</span>
                </button>
            </div>

            {/* Experience Mode Toggle */}
            <div className="control-tooltip-wrap relative">
                <button
                    type="button"
                    onClick={toggleExperience}
                    className="flex h-12 w-12 items-center justify-center text-[color:var(--foreground)] transition-colors hover:text-[color:var(--focus)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)]"
                    aria-label={experience === "interactive" ? "In Interactive Mode. Switch to Simple Mode" : "In Simple Mode. Switch to Interactive Mode"}
                >
                    {experience === "interactive" ? (
                        <Zap size={18} strokeWidth={1.5} />
                    ) : (
                        <Eye size={18} strokeWidth={1.5} />
                    )}
                    <span className="navigation-tooltip">{experience === "interactive" ? "Switch to simple mode" : "Switch to interactive mode"}</span>
                </button>
            </div>
            </div>
        </div>
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`scroll-top-control fixed bottom-5 right-5 z-[70] flex h-10 w-10 items-center justify-center rounded border border-[color:var(--border)] bg-[color:var(--background)]/90 text-[color:var(--foreground)] backdrop-blur-sm transition-all duration-300 hover:bg-[color:var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)] md:bottom-7 md:right-7 ${showScrollTop ? "is-visible" : ""}`}
            aria-label="Scroll to top"
            aria-hidden={!showScrollTop}
            tabIndex={showScrollTop ? 0 : -1}
        >
            <CornerLeftUp size={18} strokeWidth={1.5} />
            <span className="scroll-top-tooltip">Scroll to top</span>
        </button>
        </>
    );
}
