"use client";

import { FaCodepen, FaDiscord, FaEnvelope, FaLetterboxd, FaMedium, FaWikipediaW } from "react-icons/fa6";
import { SiFacebook, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function ContactSection() {
    const [cvOpen, setCvOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const cvButtonRef = useRef<HTMLButtonElement>(null);
    const cvDialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!cvOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        cvDialogRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setCvOpen(false);
                cvButtonRef.current?.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [cvOpen]);

    return (
        <section
            id="contact"
            className="container-editorial scroll-mt-24 pb-4 pt-24 md:pb-8 md:pt-40"
            aria-labelledby="contact-heading"
        >
            <div className="section-intro contact-intro">
                <div>
                    <h2 data-interactive-reveal id="contact-heading" className="section-heading headline-serif text-left text-6xl md:text-8xl">
                        Connect.
                    </h2>
                    <p className="mt-4 max-w-[42ch] text-left text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
                        I’m usually somewhere between a half-finished idea, an overthought edit, and a question that refused to leave me alone.
                    </p>
                </div>
            </div>

            <div className="mt-6 pt-2 md:mt-8">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <p className="label-mono">FIND ME ELSEWHERE</p>
                    <div className="flex flex-wrap gap-3">
                        <a href="mailto:janandrewbarte@gmail.com" className="contact-social contact-social--email" aria-label="Email Jan Andrew Barte" title="Email">
                            <FaEnvelope aria-hidden="true" />
                            <span className="label-mono">EMAIL</span>
                        </a>
                        <a href="https://github.com/degrozer" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--github" aria-label="Open GitHub profile" title="GitHub">
                            <SiGithub aria-hidden="true" />
                            <span className="label-mono">GITHUB</span>
                        </a>
                        <a href="https://www.linkedin.com/in/janandrewbarte/" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--linkedin" aria-label="Open LinkedIn profile" title="LinkedIn">
                            <FaLinkedinIn aria-hidden="true" />
                            <span className="label-mono">LINKEDIN</span>
                        </a>
                        <a href="https://www.facebook.com/janandrew.barte" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--facebook" aria-label="Open Facebook profile" title="Facebook">
                            <SiFacebook aria-hidden="true" />
                            <span className="label-mono">FACEBOOK</span>
                        </a>
                        <a href="https://degrozer.medium.com/" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--medium" aria-label="Open Medium profile" title="Medium">
                            <FaMedium aria-hidden="true" />
                            <span className="label-mono">MEDIUM</span>
                        </a>
                        <a href="https://en.wikipedia.org/wiki/User:AndrewBartz" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--wikipedia" aria-label="Open Wikipedia profile" title="Wikipedia">
                            <FaWikipediaW aria-hidden="true" />
                            <span className="label-mono">WIKIPEDIA</span>
                        </a>
                        <a href="https://letterboxd.com/janandroo/" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--letterboxd" aria-label="Open Letterboxd profile" title="Letterboxd">
                            <FaLetterboxd aria-hidden="true" />
                            <span className="label-mono">LETTERBOXD</span>
                        </a>
                        <a href="https://discord.com/@pl0p" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--discord" aria-label="Open Discord profile" title="Discord">
                            <FaDiscord aria-hidden="true" />
                            <span className="label-mono">DISCORD</span>
                        </a>
                        <a href="https://codepen.io/iamAndrew1" target="_blank" rel="noopener noreferrer" className="contact-social contact-social--codepen" aria-label="Open CodePen profile" title="CodePen">
                            <FaCodepen aria-hidden="true" />
                            <span className="label-mono">CODEPEN</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                    <button ref={cvButtonRef} type="button" onClick={() => setCvOpen(true)} className="contact-cv group inline-flex items-center gap-3">
                        <span className="label-mono">VIEW CV</span>
                        <span className="text-lg" aria-hidden="true">↗</span>
                    </button>
                </div>
            </div>

            {cvOpen && mounted && createPortal(
                <div className="cv-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setCvOpen(false)}>
                    <div ref={cvDialogRef} className="cv-modal" role="dialog" aria-modal="true" aria-labelledby="cv-modal-title" tabIndex={-1}>
                        <div className="flex items-center justify-between gap-4">
                            <h3 id="cv-modal-title" className="headline-serif text-3xl">Curriculum Vitae</h3>
                            <button type="button" className="cv-modal-close label-mono" onClick={() => setCvOpen(false)} aria-label="Close CV preview">CLOSE</button>
                        </div>
                        <iframe className="cv-modal-preview" src="/Barte%20-%20Resume/Jan%20Andrew%20Barte%20-%20Resum%C3%A9.pdf" title="Jan Andrew Barte curriculum vitae" />
                        <a href="/Barte%20-%20Resume/Jan%20Andrew%20Barte%20-%20Resum%C3%A9.pdf" download className="cv-modal-download label-mono">DOWNLOAD CV ↓</a>
                    </div>
                </div>,
                document.body,
            )}
        </section>
    );
}
