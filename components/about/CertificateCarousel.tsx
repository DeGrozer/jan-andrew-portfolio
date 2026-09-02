"use client";

import { useState } from "react";
import type { CertificateEntry } from "@/lib/data/credentials";

interface CertificateCarouselProps {
    certificates: CertificateEntry[];
}

export function CertificateCarousel({ certificates }: CertificateCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    const move = (direction: -1 | 1) => {
        setActiveIndex((current) => Math.min(Math.max(current + direction, 0), certificates.length - 1));
    };

    type CertificateDisplayEntry = CertificateEntry & { id?: string };

    const placeholderCards: CertificateDisplayEntry[] = Array.from({ length: 4 }, (_, index) => ({
        id: `placeholder-${index + 1}`,
        name: `Certificate ${index + 1}`,
        issuer: "Add details",
        date: "YYYY",
    }));

    const displayCertificates: CertificateDisplayEntry[] = certificates.length ? certificates : placeholderCards;

    if (!certificates.length) {
        return (
            <div className="certificate-carousel certificate-carousel--empty" aria-label="Certificates">
                <div className="certificate-grid">
                    {displayCertificates.map((certificate) => (
                        <article key={certificate.id ?? `${certificate.name}-${certificate.issuer}`} className="certificate-box">
                            <div className="certificate-box-visual">
                                <span className="label-mono">CERTIFICATE</span>
                            </div>
                            <div className="certificate-box-copy">
                                <p className="label-mono">{certificate.date}</p>
                                <h4>{certificate.name}</h4>
                                <p>{certificate.issuer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="certificate-carousel" aria-label="Certificates">
            <div className="certificate-carousel-viewport">
                <div className="certificate-carousel-track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                    {certificates.map((certificate) => (
                        <article key={`${certificate.name}-${certificate.issuer}`} className="certificate-card">
                            <div className="certificate-card-visual">
                                {certificate.image ? <img src={certificate.image} alt="" /> : <span className="label-mono">SCAN PENDING</span>}
                            </div>
                            <div className="certificate-card-copy">
                                <p className="label-mono">{certificate.date}</p>
                                <h4>{certificate.name}</h4>
                                <p>{certificate.issuer}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="certificate-carousel-controls">
                <button type="button" onClick={() => move(-1)} disabled={activeIndex === 0} aria-label="Previous certificate">←</button>
                <span className="label-mono">{String(activeIndex + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span>
                <button type="button" onClick={() => move(1)} disabled={activeIndex === certificates.length - 1} aria-label="Next certificate">→</button>
            </div>
        </div>
    );
}
