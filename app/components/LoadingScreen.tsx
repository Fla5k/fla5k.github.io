"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 600);

      return () => clearTimeout(fadeTimer);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${!isLoading ? "loading-screen-hidden" : ""}`}
    >
      <div className="loading-content">
        <div className="loading-name">FADIL MUHAMMAD</div>

        <div className="loading-line">
          <div className="loading-line-progress" />
        </div>

        <div className="loading-text">Loading portfolio...</div>
      </div>
    </div>
  );
}
