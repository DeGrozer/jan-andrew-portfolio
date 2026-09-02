import type { PropsWithChildren } from "react";
import { FloatingControls } from "@/components/ui/FloatingControls";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { InteractiveCursor } from "@/components/ui/InteractiveCursor";
import { InteractiveMotion } from "@/components/ui/InteractiveMotion";
import { EasterEggs } from "@/components/ui/EasterEggs";

export function SiteShell({ children }: PropsWithChildren) {
    return (
        <>
            <a
                href="#main-content"
                className="absolute left-2 top-2 z-50 -translate-y-16 bg-[color:var(--foreground)] px-3 py-2 text-sm text-[color:var(--background)] focus:translate-y-0"
            >
                Skip to content
            </a>
            <ScrollProgress />
            <FloatingControls />
            <InteractiveCursor />
            <InteractiveMotion />
            <EasterEggs />
            <main id="main-content">{children}</main>
        </>
    );
}
