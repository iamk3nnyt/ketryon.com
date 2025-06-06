"use client";

import { icons } from "@/constants";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export interface Item {
  name: string;
  icon: React.ReactNode;
}

interface Props {
  items?: Item[];
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<Props> = ({
  items = icons,
  speed = 0.03,
  className,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let lastTimestamp = 0;

    const isInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const animate = (timestamp: number) => {
      if (!scrollerRef.current || !sectionRef.current) return;
      if (isInViewport(sectionRef.current)) {
        const elapsed = lastTimestamp ? timestamp - lastTimestamp : 0;
        lastTimestamp = timestamp;
        positionRef.current += speed * elapsed;
        const containerWidth = scrollerRef.current.scrollWidth / 2;
        if (positionRef.current >= containerWidth) {
          positionRef.current = 0;
        }
        scrollerRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      } else {
        lastTimestamp = timestamp;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <section ref={sectionRef} className={cn("relative", className)}>
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div className="absolute -right-4 z-10 h-full w-54 bg-gradient-to-l from-white to-transparent" />
        <div className="absolute -left-4 z-10 h-full w-54 bg-gradient-to-r from-white to-transparent" />
        <div className="w-full overflow-hidden py-4" aria-hidden="true">
          <div
            ref={scrollerRef}
            className="flex w-fit translate-x-0 backface-hidden"
          >
            {[...items, ...items].map(({ icon, name }, index) => (
              <div
                key={index}
                className="mx-8 flex items-center whitespace-nowrap text-gray-600"
              >
                {icon}
                <span className="text-lg font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
