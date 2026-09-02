"use client";

import { useEffect, useRef, useState } from "react";
import { siteProfile } from "@/lib/data/site";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialIconMap = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
};

const getDesktopLabel = (href: string) => {
    switch (href) {
        case "/#selected-work":
            return "WORK";
        case "/#tech-stack":
            return "STACK";
        case "/#about":
            return "ABOUT";
        case "/#explorations":
            return "EXPLORE";
        case "/#contact":
            return "CONTACT";
        default:
            return "SECTION";
    }
};

export function HeroSection() {
    // Keep render output deterministic between server and client; all browser-only behavior stays in effects.
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const lastScrollY = useRef(0);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const closeMenu = () => {
        setMenuOpen(false);
        requestAnimationFrame(() => {
            menuButtonRef.current?.focus();
        });
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleEscape);

        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            if (window.innerWidth < 768) {
                // Keep mobile header persistent for reliability and easier navigation.
                setHeaderVisible(true);
                return;
            }

            const currentY = window.scrollY;

            if (currentY <= 0) {
                setHeaderVisible(true);
                lastScrollY.current = currentY;
                return;
            }

            if (currentY > lastScrollY.current) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="relative h-[100svh] overflow-hidden">
            <header
                className={`site-hero-header fixed inset-x-0 top-0 z-40 transition-transform duration-200 ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="bg-[color:var(--background)]/92 backdrop-blur-sm">
                    <div className="container-editorial py-4 md:py-5">
                        <div className="site-header-desktop hidden w-full items-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr]">
                            <Link href="/#home" className="site-wordmark label-mono justify-self-start text-[0.88rem] font-medium tracking-[0.12em] text-[color:var(--foreground)]">
                                ANDREW BARTE
                            </Link>
                            <nav aria-label="Primary" className="site-navigation">
                                <ul className="label-mono flex items-center justify-center gap-5 text-[0.72rem] font-medium tracking-[0.1em] text-[color:var(--foreground)] xl:gap-7 xl:text-[0.76rem]">
                                    {siteProfile.navigation.map((item) => (
                                        <li key={item.href}>
                                            <Link href={item.href} className="site-navigation-link inline-flex items-center border-b border-transparent pb-1 transition-colors hover:border-[color:var(--foreground)]/45 focus:border-[color:var(--foreground)]/45">
                                                {getDesktopLabel(item.href)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <span className="site-header-meta label-mono justify-self-end text-[0.68rem] tracking-[0.1em]">PORTFOLIO / 2026</span>
                        </div>

                        <div className="relative block md:hidden">
                            <div className="relative h-12 w-full">
                                <button
                                    ref={menuButtonRef}
                                    type="button"
                                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                                    aria-expanded={menuOpen}
                                    aria-controls="mobile-menu-panel"
                                    onClick={() => setMenuOpen((prev) => !prev)}
                                    className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                                >
                                    <span className="relative block h-4 w-6">
                                        <span
                                            className={`absolute left-0 block h-px bg-current transition-all duration-200 ${menuOpen ? "top-2 w-6 rotate-45" : "top-0 w-6"}`}
                                        />
                                        <span
                                            className={`absolute left-0 block h-px w-3.5 bg-current transition-all duration-200 ${menuOpen ? "top-2 opacity-0" : "top-2 opacity-100"}`}
                                        />
                                        <span
                                            className={`absolute left-0 block h-px bg-current transition-all duration-200 ${menuOpen ? "top-2 w-6 -rotate-45" : "top-4 w-6"}`}
                                        />
                                    </span>
                                </button>

                                <p className="label-mono absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[0.72rem] font-medium leading-none tracking-[0.11em] text-[color:var(--foreground)]">
                                    ANDREW BARTE / PORTFOLIO
                                </p>

                                <div aria-hidden="true" className="absolute right-0 top-1/2 h-10 w-10 -translate-y-1/2" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <>
                    <button
                        type="button"
                        aria-label="Close mobile navigation overlay"
                        onClick={closeMenu}
                        className="fixed inset-0 z-40 bg-[color:var(--background)]/55 md:hidden"
                    />
                    <aside
                        id="mobile-menu-panel"
                        className="fixed inset-y-0 left-0 top-0 z-50 w-[min(86vw,22rem)] border-r border-[color:var(--border)] bg-[color:var(--background)] px-[var(--gutter)] pb-8 pt-4 md:hidden"
                    >
                        <div className="relative mb-6 h-12">
                            <button
                                type="button"
                                onClick={closeMenu}
                                className="label-mono absolute left-0 top-1/2 inline-flex -translate-y-1/2 items-center gap-2 border border-[color:var(--border)] bg-[color:var(--background)] px-3 py-2 text-[0.68rem] tracking-[0.12em] text-[color:var(--foreground)] transition-colors hover:border-[color:var(--foreground)]/45 hover:bg-[color:var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                            >
                                <span aria-hidden="true" className="text-[0.88rem] leading-none">←</span>
                                <span>BACK TO PAGE</span>
                            </button>
                        </div>

                        <nav aria-label="Mobile primary navigation">
                            <ul className="space-y-4">
                                {siteProfile.navigation.map((item) => (
                                    <li key={item.href + item.label} className="border-b border-[color:var(--border)] pb-4 last:border-b-0 last:pb-0">
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="label-mono block text-[0.86rem] tracking-[0.12em] text-[color:var(--foreground)]"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                </>
            )}

            <div className="absolute inset-0">
                <div className="container-editorial relative h-full">
                    <div className="absolute inset-0 grid place-items-center px-2">
                        <div className="relative z-10 flex max-w-[34rem] flex-col items-center gap-6 px-2 text-center md:gap-7">
                            <h1 data-interactive-reveal className="headline-serif text-[clamp(3rem,9vw,8.4rem)]">
                                {siteProfile.name}
                            </h1>
                            <p data-interactive-reveal className="max-w-[32ch] text-[clamp(1rem,1.8vw,1.42rem)] leading-snug text-[color:var(--foreground)]">
                                {siteProfile.tagline}
                            </p>
                            <ul data-interactive-reveal className="flex items-center gap-4" aria-label="Social links">
                                {siteProfile.socialLinks.map((social) => {
                                    const Icon = socialIconMap[social.platform];
                                    const hoverColorClass =
                                        social.platform === "linkedin"
                                            ? "hover:text-[#0A66C2]"
                                            : "hover:text-[#171515]";

                                    if (!social.href) {
                                        return (
                                            <li key={social.platform}>
                                                <span
                                                    className="inline-flex items-center justify-center text-[color:var(--muted)] opacity-60"
                                                    aria-label={`${social.platform} link coming soon`}
                                                    title={`${social.platform} link coming soon`}
                                                >
                                                    <Icon size={32} aria-hidden="true" />
                                                </span>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={social.platform}>
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center justify-center text-[color:var(--muted)] transition-colors ${hoverColorClass}`}
                                                aria-label={`Open ${social.platform}`}
                                            >
                                                <Icon size={32} aria-hidden="true" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                            <p data-interactive-reveal className="label-mono">{siteProfile.location}</p>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute bottom-[max(1.75rem,env(safe-area-inset-bottom))] left-1/2 z-20 -translate-x-1/2 text-center md:bottom-8">
                        <Link
                            href="/#selected-work"
                            className="scroll-cue pointer-events-auto inline-flex flex-col items-center gap-2 pb-2"
                        >
                            <span className="label-mono text-[0.62rem] tracking-[0.18em]">{siteProfile.scrollLabel}</span>
                            <span className="scroll-cue-arrow" aria-hidden="true">
                                <span className="scroll-cue-arrow-head" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
