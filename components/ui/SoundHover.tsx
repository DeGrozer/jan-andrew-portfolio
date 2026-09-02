"use client";

import type { ReactNode } from "react";

let audioContext: AudioContext | null = null;

async function unlockAudio() {
    try {
        if (document.documentElement.dataset.experience !== "interactive") return;
        audioContext ??= new AudioContext();
        if (audioContext.state === "suspended") await audioContext.resume();
    } catch {}
}

async function playTone() {
    try {
        if (document.documentElement.dataset.experience !== "interactive" || !audioContext) return;
        if (audioContext.state === "suspended") return;
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(660, audioContext.currentTime + 0.08);
        gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.12);
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.13);
    } catch {}
}

export function SoundHover({ children }: { children: ReactNode }) {
    return (
        <div
            onPointerEnter={playTone}
            onFocus={playTone}
            onPointerDown={unlockAudio}
            onClick={unlockAudio}
            tabIndex={0}
            className="sound-hover"
            aria-label="Sound editing visual. Click to enable sound, then hover to hear a tone."
        >
            {children}
        </div>
    );
}
