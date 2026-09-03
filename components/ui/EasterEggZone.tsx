
"use client";

import type { ReactNode, CSSProperties } from "react";

interface EasterEggZoneProps {
  zone: "explorations-tile" | "about-name";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function EasterEggZone({
  zone,
  children,
  className,
  style,
}: EasterEggZoneProps) {
  const handleClick = () => {
    const event = new CustomEvent("easter-egg-click", {
      detail: { zone },
    });
    window.dispatchEvent(event);
  };

  return (
    <div
      onClick={handleClick}
      className={className}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
