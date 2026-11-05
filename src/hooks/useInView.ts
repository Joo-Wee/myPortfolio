"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;       // stop observing after first enter (default true)
}

/**
 * useInView — returns true when the ref element enters the viewport.
 *
 * Usage:
 *   const ref    = useRef<HTMLDivElement>(null);
 *   const inView = useInView(ref, { threshold: 0.2 });
 *   <div ref={ref} className={`fade-up ${inView ? "in-view" : ""}`} />
 */
export function useInView<T extends Element = Element>(
  ref: React.RefObject<T | null>,
  options: UseInViewOptions = {}
): boolean {
  const { threshold = 0.15, rootMargin = "0px", once = true } = options;
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once && observerRef.current) {
            observerRef.current.disconnect();
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, [ref, threshold, rootMargin, once]);

  return inView;
}
