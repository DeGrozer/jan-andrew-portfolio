"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function InteractiveMotion() {
    useEffect(() => {
        let context: gsap.Context | undefined;
        let active = false;

        const clearMotion = () => {
            context?.revert();
            context = undefined;
            active = false;
        };

        const applyMotion = () => {
            const interactive = document.documentElement.dataset.experience === "interactive";
            if (active) {
                return;
            }

            if (!interactive) {
                return;
            }

            active = true;
            context = gsap.context(() => {
                gsap.utils.toArray<HTMLElement>("[data-interactive-reveal]:not(.exploration-horizontal-item):not(.favorite-card)").forEach((element) => {
                    const direction = element.dataset.interactiveReveal;
                                        const from = direction === "left"
                        ? { autoAlpha: 0, x: -38, y: 0 }
                        : direction === "right"
                          ? { autoAlpha: 0, x: 38, y: 0 }
                                                    : direction === "down"
                                                        ? { autoAlpha: 0, x: 0, y: -42 }
                          : { autoAlpha: 0, x: 0, y: 42 };

                    gsap.fromTo(element, from, {
                        autoAlpha: 1,
                        x: 0,
                        y: 0,
                        duration: 0.85,
                        delay: Number(element.dataset.interactiveDelay ?? 0),
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 60%",
                            once: true,
                        },
                    });
                });

                gsap.utils.toArray<HTMLElement>("[data-interactive-float]").forEach((element) => {
                    gsap.to(element, {
                        yPercent: -5,
                        ease: "none",
                        scrollTrigger: {
                            trigger: element,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.2,
                        },
                    });
                });

                gsap.utils.toArray<SVGGeometryElement>("[data-interactive-draw]").forEach((element) => {
                    const length = element.getTotalLength();
                    gsap.fromTo(element, { strokeDasharray: length, strokeDashoffset: length }, {
                        strokeDashoffset: 0,
                        duration: 1.4,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 60%",
                            once: true,
                        },
                    });
                });

                gsap.utils.toArray<HTMLElement>("[data-interactive-pop]").forEach((element) => {
                    gsap.fromTo(element, { autoAlpha: 0, y: 28, scale: 0.72 }, {
                        autoAlpha: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: "back.out(1.5)",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 60%",
                            once: true,
                        },
                    });
                });

                gsap.utils.toArray<HTMLElement>(".interactive-word").forEach((element, index) => {
                    gsap.fromTo(element,
                        { autoAlpha: 0, y: 18 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.65,
                            delay: index * 0.035,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: element.closest("[data-interactive-reveal]") ?? element,
                                start: "top 70%",
                                once: true,
                            },
                        },
                    );
                });

                gsap.utils.toArray<HTMLElement>(".exploration-heading-word").forEach((element, index) => {
                    gsap.fromTo(element,
                        { color: "var(--focus)" },
                        {
                            color: "var(--foreground)",
                            duration: 0.7,
                            delay: index * 0.12,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: element.closest("[data-interactive-reveal]") ?? element,
                                start: "top 70%",
                                once: true,
                            },
                        },
                    );
                });

                gsap.utils.toArray<HTMLElement>("[data-favorites-deck]").forEach((deck) => {
                    const cards = gsap.utils.toArray<HTMLElement>(".favorite-card", deck);
                    if (!cards.length) return;
                    const deckRect = deck.getBoundingClientRect();
                    const deckCenter = deckRect.left + deckRect.width / 2;
                    const stackOffsets = cards.map((card) => {
                        const cardRect = card.getBoundingClientRect();
                        return deckCenter - (cardRect.left + cardRect.width / 2);
                    });
                    gsap.set(cards, { zIndex: (index) => cards.length - index });

                    const timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: deck,
                            start: "top 75%",
                            end: () => `+=${Math.max(window.innerHeight * 0.7, cards.length * 100)}`,
                            scrub: 0.45,
                            invalidateOnRefresh: true,
                        },
                    });

                    timeline.fromTo(cards,
                        {
                            autoAlpha: 1,
                            x: (index) => stackOffsets[index],
                            y: (index) => 56 - index * 4,
                            scale: 0.9,
                            rotate: (index) => (index - (cards.length - 1) / 2) * -4,
                        },
                        {
                            autoAlpha: 1,
                            x: 0,
                            y: 0,
                            scale: 1,
                            rotate: 0,
                            duration: 1,
                            stagger: 0.2,
                            ease: "power2.out",
                        },
                    );
                });

                gsap.utils.toArray<HTMLElement>("[data-education-timeline]").forEach((timeline) => {
                    const entries = gsap.utils.toArray<HTMLElement>("[data-education-entry]", timeline);
                    const progressLine = timeline.querySelector<HTMLElement>("[data-education-line-fill]");
                    if (!entries.length) return;

                    if (progressLine) {
                        gsap.fromTo(
                            progressLine,
                            { scaleY: 0, transformOrigin: "top center" },
                            {
                                scaleY: 1,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: timeline,
                                    start: "top 68%",
                                    end: "bottom 32%",
                                    scrub: 1,
                                },
                            },
                        );
                    }

                    entries.forEach((entry, index) => {
                        gsap.fromTo(
                            entry,
                            { y: 18, autoAlpha: 0 },
                            {
                                y: 0,
                                autoAlpha: 1,
                                duration: 0.7,
                                delay: index * 0.06,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: entry,
                                    start: "center center",
                                    once: true,
                                    onEnter: () => entry.classList.add("is-active"),
                                },
                            },
                        );
                    });
                });

                gsap.utils.toArray<HTMLElement>(".exploration-horizontal-stage").forEach((stage) => {
                    const section = stage.closest<HTMLElement>(".exploration-horizontal-section");
                    const trigger = section ?? stage;
                    const track = stage.querySelector<HTMLElement>(".exploration-carousel-track");
                    if (!track) return;

                    const interactive = document.documentElement.dataset.experience === "interactive";
                    const getDistance = () => Math.max(0, track.scrollWidth - stage.getBoundingClientRect().width);
                    const getStep = () => {
                        const item = track.querySelector<HTMLElement>(".exploration-horizontal-item");
                        if (!item) return getDistance();
                        return item.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || "0");
                    };
                    
                    // Only pin carousel in interactive mode
                    if (interactive) {
                        const reverse = stage.dataset.horizontalDirection === "reverse";
                        const scrollTrigger = {
                            trigger,
                            start: "top 10%",
                            pin: true,
                            scrub: 0.7,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                            end: () => `+=${Math.max(getDistance() * 1.35, window.innerHeight)}`,
                            snap: {
                                snapTo: (progress: number) => {
                                    const distance = getDistance();
                                    const step = getStep();
                                    if (!distance || !step) return progress;
                                    return Math.round((progress * distance) / step) * step / distance;
                                },
                                duration: { min: 0.2, max: 0.5 },
                                ease: "power2.out",
                            },
                        };

                        gsap.fromTo(track,
                            { x: () => reverse ? -getDistance() : 0 },
                            {
                            x: () => reverse ? 0 : -getDistance(),
                            ease: "none",
                            scrollTrigger,
                            },
                        );
                    }
                });

                requestAnimationFrame(() => ScrollTrigger.refresh());
                window.setTimeout(() => ScrollTrigger.refresh(), 250);

            });
        };

        applyMotion();
        const observer = new MutationObserver(() => {
            clearMotion();
            applyMotion();
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-experience"] });

        return () => {
            observer.disconnect();
            clearMotion();
        };
    }, []);

    return null;
}
