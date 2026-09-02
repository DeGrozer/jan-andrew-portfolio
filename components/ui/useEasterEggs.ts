"use client";

import { useEffect, useState } from "react";

export type EasterEggType = "explorations-tile" | "about-name" | null;

interface EasterEggState {
  active: EasterEggType;
  count: number;
  timestamp: number;
}

export function useEasterEggs() {
  const [easterEggState, setEasterEggState] = useState<EasterEggState>({
    active: null,
    count: 0,
    timestamp: 0,
  });

  useEffect(() => {
    const handleEasterEggClick = (event: CustomEvent<{ zone: EasterEggType }>) => {
      setEasterEggState((prev) => {
        const isNewZone = event.detail.zone !== prev.active;
        const timeSinceLastClick = Date.now() - prev.timestamp;
        const isWithinTimeout = timeSinceLastClick < 1500; // 1.5 second window

        // Reset count if different zone or timeout expired
        const newCount = isNewZone || !isWithinTimeout ? 1 : prev.count + 1;

        return {
          active: event.detail.zone,
          count: newCount,
          timestamp: Date.now(),
        };
      });
    };

    window.addEventListener(
      "easter-egg-click",
      handleEasterEggClick as EventListener
    );

    return () => {
      window.removeEventListener(
        "easter-egg-click",
        handleEasterEggClick as EventListener
      );
    };
  }, []);

  // Auto-reset after 3 seconds of inactivity
  useEffect(() => {
    if (easterEggState.active === null) return;

    const timer = setTimeout(() => {
      setEasterEggState({ active: null, count: 0, timestamp: 0 });
    }, 3000);

    return () => clearTimeout(timer);
  }, [easterEggState.timestamp, easterEggState.active]);

  return easterEggState;
}
