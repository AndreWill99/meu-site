import { useEffect, useRef } from "react";

const BackgroundGlow = () => {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(206, 220, 0, 0.2),
          transparent 200px
        )`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        transition: "background 0.2s ease-out",
      }}
    />
  );
};

export default BackgroundGlow;
