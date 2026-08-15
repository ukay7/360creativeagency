import React, { useEffect, useState } from "react";

export default function MagicCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest(
          "a, button, [role='button'], input, textarea, select, .hover-effect-1, .hover-effect-2, .hover-effect-5, .card-item, .sec-title, .at-btn"
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          borderRadius: "50%",
          border: isHovered ? "1.5px solid rgba(56, 189, 248, 0.8)" : "1.5px solid rgba(255, 255, 255, 0.4)",
          backgroundColor: isHovered ? "rgba(56, 189, 248, 0.15)" : "transparent",
          pointerEvents: "none",
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          transition: "width 0.2s, height 0.2s, border 0.2s, background-color 0.2s, transform 0.08s ease-out",
          zIndex: 999999,
          mixBlendMode: "difference"
        }}
      />
      {/* Inner Glowing Cursor Dot */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovered ? "12px" : "8px",
          height: isHovered ? "12px" : "8px",
          borderRadius: "50%",
          backgroundColor: "#38bdf8",
          boxShadow: "0 0 10px rgba(56, 189, 248, 0.8)",
          pointerEvents: "none",
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: "width 0.15s, height 0.15s, transform 0.02s linear",
          zIndex: 9999999,
        }}
      />
    </>
  );
}
