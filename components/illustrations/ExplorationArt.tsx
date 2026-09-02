type ArtProps = {
    className?: string;
};

export function EditArt({ variant = 0, className = "" }: ArtProps & { variant?: number }) {
    const colors = ["#cba99b", "#d1b957", "#9eafb8", "#a9b49e", "#b8a6c5"];
    const accents = ["#8b4a43", "#4d4532", "#344c55", "#4d5b49", "#5d4664"];
    return (
        <svg className={className} viewBox="0 0 320 360" role="img" aria-label="Abstract composition artwork">
            <rect width="320" height="360" fill={colors[variant % colors.length]} />
            <circle cx={variant % 2 ? 210 : 105} cy="160" r="78" fill={accents[variant % accents.length]} opacity=".82" />
            <path d={variant % 2 ? "M24 286C94 220 168 315 296 232" : "M18 88C100 150 180 32 302 108"} fill="none" stroke="#f6f1ea" strokeWidth="4" opacity=".8" />
            <rect x="24" y="24" width="92" height="7" fill="#1f1a18" opacity=".6" />
            <rect x="24" y="42" width="52" height="4" fill="#1f1a18" opacity=".42" />
            <text x="25" y="330" fill="#1f1a18" opacity=".7" fontFamily="monospace" fontSize="11" letterSpacing="2">COMPOSITION</text>
        </svg>
    );
}

export function ScribbleArt({ className = "" }: ArtProps) {
    return (
        <svg className={className} viewBox="0 0 260 110" role="img" aria-label="Hand drawn writing mark">
            <path data-interactive-draw className="scribble-line" d="M8 63C30 21 47 92 69 48S106 28 120 65 153 91 168 42 196 27 214 61 237 67 252 43" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M17 88C65 76 111 97 158 82 188 72 213 83 246 76" fill="none" stroke="currentColor" strokeWidth="1" opacity=".45" />
        </svg>
    );
}

export function WaveformArt({ className = "" }: ArtProps) {
    const heights = [28, 55, 38, 78, 100, 62, 42, 74, 34, 60, 90, 45];
    return (
        <svg className={className} viewBox="0 0 360 120" role="img" aria-label="Audio waveform">
            {heights.map((height, index) => (
                <rect key={index} x={index * 29 + 8} y={(120 - height) / 2} width="10" height={height} rx="5" fill="currentColor" opacity={index % 3 === 0 ? ".5" : ".9"} />
            ))}
            <path d="M8 60H352" stroke="currentColor" strokeWidth="1" opacity=".25" />
        </svg>
    );
}

