
import React, { useEffect, useState, useCallback } from "react";

// Cursor images with hotspot coordinates
const CURSOR_IMAGES = {
  default: "/assets/cursor/OnlyCursor.png", // Custom default cursor
  pointer: "/assets/cursor/OnlyCursorPointer.png", // Pointer cursor for clickable elements
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorImage, setCursorImage] = useState<string>(CURSOR_IMAGES.default);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleResize = useCallback(() => {
    setVisible(window.innerWidth >= 768);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    requestAnimationFrame(() => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  const handlePointerDown = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  }, []);

  const handlePointerOver = useCallback((e: PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target instanceof HTMLElement) {
      const isClickable =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.classList.contains("cursor-pointer") ||
        (target.hasAttribute("role") &&
          target.getAttribute("role") === "button");

      setCursorImage(
        isClickable ? CURSOR_IMAGES.pointer : CURSOR_IMAGES.default
      );
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (visible) {
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerdown", handlePointerDown);
      document.addEventListener("pointerover", handlePointerOver);
    }

    return () => {
      if (visible) {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerdown", handlePointerDown);
        document.removeEventListener("pointerover", handlePointerOver);
      }
    };
  }, [visible, handlePointerMove, handlePointerDown, handlePointerOver]);

  if (!visible) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          backgroundImage: `url(${cursorImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          width: "32px",
          height: "32px",
          pointerEvents: "none",
          transform: "translate(-25%, -25%)",
          zIndex: 9999,
          WebkitBackgroundSize: "contain",
          MozBackgroundSize: "contain",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          backgroundImage: `url(${cursorImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          width: "32px",
          height: "32px",
          pointerEvents: "none",
          transform: "translate(-25%, -25%)",
          transition: "all 0.5s ease-in",
          WebkitBackgroundSize: "contain",
          MozBackgroundSize: "contain",
          opacity: clicked ? 0.3 : 0,
          scale: clicked ? "1" : "0",
        }}
      />
    </>
  );
};

export default CustomCursor;
