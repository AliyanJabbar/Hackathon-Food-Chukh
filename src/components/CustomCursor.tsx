import React, { useEffect, useState } from "react";

// Cursor images with hotspot coordinates
const CURSOR_IMAGES = {
  default: "/assets/cursor/OnlyCursor.png", // Custom default cursor
  pointer: "/assets/cursor/OnlyCursorPointer.png", // Pointer cursor for clickable elements
};

const CustomCursor = () => {
  // State to track cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to track current cursor image
  const [cursorImage, setCursorImage] = useState<string>(CURSOR_IMAGES.default);

  // State to track if the mouse is clicked
  const [clicked, setClicked] = useState(false);

  // State to track whether the custom cursor is visible
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Check if the screen width is below 'md' (768px)
      if (window.innerWidth < 768) {
        setVisible(false); // Hide cursor for smaller screens
      } else {
        setVisible(true); // Show cursor for larger screens
      }
    };

    // Initialize visibility on mount
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Event listener for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Event listener for mouse click
    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    // Event listener for mouse hover on HTML elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target instanceof HTMLElement) {
        // Apply pointer cursor for clickable elements
        if (
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a" || // Check for <a> tag
          target.classList.contains("cursor-pointer") || // Check for elements with cursor-pointer class
          (target.hasAttribute("role") &&
            target.getAttribute("role") === "button")
        ) {
          setCursorImage(CURSOR_IMAGES.pointer); // Pointer cursor for clickable elements
        } else {
          setCursorImage(CURSOR_IMAGES.default); // Default cursor for other elements
        }
      }
    };

    // Add event listeners if cursor is visible
    if (visible) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      // Remove event listeners
      if (visible) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, [visible]);

  // Return null if the custom cursor is not visible
  if (!visible) return null;

  return (
    <>
      {/* Custom Cursor */}
      <div
        style={{
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
        className="fixed"
      />

      {/* Click Effect */}
      <div
        className={`fixed z-50 pointer-events-none transition-all ${
          clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"
        } -translate-x-[1px] -translate-y-[1px] rounded-full w-8 h-8`}
        style={{
          top: position.y,
          left: position.x,
          backgroundImage: `url(${cursorImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          transform: "translate(-25%, -25%)",
          transition: "all 0.5s ease-in",
          WebkitBackgroundSize: "contain",
          MozBackgroundSize: "contain",
        }}
      />
    </>
  );
};

export default CustomCursor;
