import React, { useEffect, useState, useCallback } from "react";

const CURSOR_IMAGES = {
  default: "/assets/cursor/OnlyCursor.png",
  pointer: "/assets/cursor/OnlyCursorPointer.png",
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorImage, setCursorImage] = useState<string>(CURSOR_IMAGES.default);
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

  const handlePointerOver = useCallback((e: PointerEvent) => {
    const target = e.target as HTMLElement;
    if (target instanceof HTMLElement) {
      const isClickable =
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "select" ||
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
      document.addEventListener("pointerover", handlePointerOver);
    }

    return () => {
      if (visible) {
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("pointerover", handlePointerOver);
      }
    };
  }, [visible, handlePointerMove, handlePointerOver]);

  if (!visible) return null;

  return (
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
        transform: "translate(-19%, -19%)",
        zIndex: 9999,
        WebkitBackgroundSize: "contain",
        MozBackgroundSize: "contain",
      }}
    />
  );
};

export default CustomCursor;
