"use client";

import { useState } from "react";

export function Footer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <footer
            className="border-t border-[color:var(--border)]"
            aria-label="Footer"
        >
            <div className="container-editorial flex flex-col items-center justify-between gap-2 py-8 text-center md:flex-row md:text-left">
                <p className="label-mono text-[color:var(--foreground)]">JAN ANDREW BARTE</p>
                <p
                    className="footer-signoff text-sm text-[color:var(--muted)]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? "From the Philippines, with too much coffee." : "From the Philippines, with love."}
                </p>
            </div>
        </footer>
    );
}
