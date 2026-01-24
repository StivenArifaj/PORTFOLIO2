"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = false,
  }: GlowingEffectProps) => {
    const isMobile = useMobile(); // Use central hook
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);
    const [isVisible, setIsVisible] = useState(false);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (e instanceof MouseEvent) {
          lastPosition.current = { x: e.x, y: e.y };
        }

        const { x, y } = lastPosition.current;
        const rect = containerRef.current.getBoundingClientRect();
        const dx = x - rect.left;
        const dy = y - rect.top;

        containerRef.current.style.setProperty("--x", `${dx}px`);
        containerRef.current.style.setProperty("--y", `${dy}px`);
      },
      []
    );

    useEffect(() => {
      if (isMobile || disabled) return; // Skip logic entirely on mobile

      const handlePointerMove = (e: PointerEvent) => {
        handleMove(e);
      };

      const handlePointerEnter = () => {
        setIsVisible(true);
      };

      const handlePointerLeave = () => {
        setIsVisible(false);
      };

      window.addEventListener("pointermove", handlePointerMove);
      if (containerRef.current) {
        containerRef.current.addEventListener("pointerenter", handlePointerEnter);
        containerRef.current.addEventListener("pointerleave", handlePointerLeave);
      }

      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        if (containerRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          containerRef.current.removeEventListener("pointerenter", handlePointerEnter);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          containerRef.current.removeEventListener("pointerleave", handlePointerLeave);
        }
      };
    }, [handleMove, isMobile, disabled]);


    // MOBILE: Return null / Nothing
    if (isMobile) return null;

    const styles = {
      "--blur": `${blur}px`,
      "--spread": `${spread}px`,
      "--start": "0",
      "--active": "0",
      "--glowingeffect-border-width": `${borderWidth}px`,
      backgroundImage: `radial-gradient(
        var(--spread) var(--spread) at var(--x) var(--y),
        var(--glowingeffect-border) 0%,
        transparent 100%
      )`,
    } as React.CSSProperties;

    return (
      <div
        ref={containerRef}
        className={cn(
          "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity lg:block",
          glow && "opacity-100",
          variant === "white" && "border-white",
          disabled && "!block",
          className
        )}
        style={styles}
      >
        <div
          className={cn(
            "glow",
            "rounded-[inherit]",
            'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:[border:var(--glowingeffect-border-width)_solid_transparent] after:[background:radial-gradient(var(--spread)_var(--spread)_at_var(--x)_var(--y),var(--glowingeffect-border)_0%,transparent_100%)_border-box] after:[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] after:[mask-composite:exclude]',
          )}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
