"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Screenshot {
  src: string;
  label: string;
  desc: string;
}

export default function ScreenshotStrip({ screenshots }: { screenshots: Screenshot[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const [dragging, setDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    // Defer measurement so layout is complete
    const raf = requestAnimationFrame(updateArrows);
    return () => cancelAnimationFrame(raf);
  }, []);

  const snapBy = (direction: 1 | -1) => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length < 2) return;
    const pitch = cards[1].offsetLeft - cards[0].offsetLeft;
    if (pitch <= 0) return;
    const currentIndex = Math.round(el.scrollLeft / pitch);
    const target = Math.max(
      0,
      Math.min((currentIndex + direction) * pitch, el.scrollWidth - el.clientWidth)
    );
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    el.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    const el = containerRef.current;
    if (!el) return;
    el.scrollLeft = dragRef.current.startScroll - (e.clientX - dragRef.current.startX);
  };

  const handlePointerUp = () => {
    dragRef.current.active = false;
    setDragging(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); snapBy(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); snapBy(1); }
  };

  return (
    <div className="relative">
      {/* Left arrow */}
      <div
        className="absolute left-0 top-0 bottom-4 z-10 w-16 transition-opacity duration-200 pointer-events-none"
        style={{ opacity: canScrollLeft ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-bg to-transparent" />
        <button
          aria-label="Scroll left"
          onClick={() => snapBy(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 p-1"
          style={{ pointerEvents: canScrollLeft ? "auto" : "none" }}
        >
          <ChevronLeft size={22} className="text-fg/40" />
        </button>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        role="region"
        aria-label="App screenshots"
        tabIndex={0}
        className={[
          "flex gap-4 overflow-x-auto pb-4",
          "select-none outline-none screenshot-strip",
          dragging ? "cursor-grabbing" : "cursor-grab",
        ].join(" ")}
        style={{ touchAction: "pan-y", scrollbarWidth: "none" }}
        onScroll={updateArrows}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        {screenshots.map(({ src, label, desc }) => (
          <div
            key={src}
            data-card=""
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-neutral-50">
              <Image
                src={src}
                alt={label}
                width={180}
                height={390}
                className="h-[360px] w-auto object-cover object-top"
                draggable={false}
              />
            </div>
            <span className="text-xs font-medium text-fg">{label}</span>
            <span className="text-xs text-muted">{desc}</span>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <div
        className="absolute right-0 top-0 bottom-4 z-10 w-16 transition-opacity duration-200 pointer-events-none"
        style={{ opacity: canScrollRight ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-bg to-transparent" />
        <button
          aria-label="Scroll right"
          onClick={() => snapBy(1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 p-1"
          style={{ pointerEvents: canScrollRight ? "auto" : "none" }}
        >
          <ChevronRight size={22} className="text-fg/40" />
        </button>
      </div>
    </div>
  );
}
