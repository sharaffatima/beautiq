import { useEffect, useRef, useState } from 'react';

const SHOW_NEAR_TOP_PX = 40;
const DELTA_THRESHOLD = 6;

/**
 * Tracks whether a fixed element should be hidden based on scroll
 * direction: hides on scroll-down past a threshold, reveals on
 * scroll-up, and always stays visible near the very top of the page.
 */
export function useScrollHidden(): boolean {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      if (currentY <= SHOW_NEAR_TOP_PX) {
        setHidden(false);
      } else if (Math.abs(delta) > DELTA_THRESHOLD) {
        setHidden(delta > 0);
      }

      lastY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return hidden;
}
