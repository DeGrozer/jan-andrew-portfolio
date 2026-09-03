"use client";

import { useEasterEggs } from "./useEasterEggs";
import { useEffect, useState } from "react";
import styles from "./EasterEggs.module.css";

export function EasterEggs() {
  const easterEggState = useEasterEggs();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(easterEggState.active !== null);
  }, [easterEggState.active]);

  if (!isVisible) return null;

  return (
    <>
      {/* Explorations Section Easter Egg */}
      {easterEggState.active === "explorations-tile" && (
        <div className={styles["easter-egg-container"]}>
          <div className={styles["explorations-easter-egg"]}>
            <div className={styles["easter-egg-message"]}>
              <p className={styles["easter-egg-text"]}>
                {easterEggState.count === 1 && "Keep exploring..."}
                {easterEggState.count === 2 && "One more time..."}
                {easterEggState.count >= 3 && "✨ You found the secret! ✨"}
              </p>
              {easterEggState.count >= 3 && (
                <div className={styles["easter-egg-particles"]}>
                  {[...Array(12)].map((_, i) => (
                    <span
                      key={i}
                      className={styles["particle"]}
                      style={{
                        "--delay": `${i * 0.05}s`,
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </>
  );
}
