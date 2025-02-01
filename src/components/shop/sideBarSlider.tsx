import React from "react";

export function DualThumbSlider({
  min,
  max,
  step,
  value,
  onChange,
}: {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const [isDragging, setIsDragging] = React.useState<"min" | "max" | null>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const handlePointerDown = (event: React.PointerEvent, thumb: "min" | "max") => {
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    setIsDragging(thumb);
  };

  const handlePointerMove = React.useCallback(
    (event: PointerEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const percent = Math.max(
        0,
        Math.min(1, (event.clientX - rect.left) / rect.width)
      );
      const newValue = Math.round((percent * (max - min) + min) / step) * step;

      if (isDragging === "min") {
        onChange([Math.min(newValue, value[1] - step), value[1]]);
      } else {
        onChange([value[0], Math.max(newValue, value[0] + step)]);
      }
    },
    [isDragging, min, max, step, value, onChange]
  );

  const handlePointerUp = (event: PointerEvent) => {
    setIsDragging(null);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, handlePointerMove]);

  const minPercent = ((value[0] - min) / (max - min)) * 100;
  const maxPercent = ((value[1] - min) / (max - min)) * 100;

  return (
    <div ref={sliderRef} className="relative h-6 w-full touch-none">
      <div className="absolute inset-0 h-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full">
        <div
          className="absolute h-full bg-orangeLike rounded-full"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
      </div>
      <div
        className="absolute w-6 h-6 -ml-3 top-1/2 -translate-y-1/2 bg-white border-2 border-orangeLike rounded-full cursor-pointer"
        style={{
          left: `${minPercent}%`,
          zIndex: 20,
        }}
        onPointerDown={(e) => handlePointerDown(e, "min")}
      />
      <div
        className="absolute w-6 h-6 -ml-3 top-1/2 -translate-y-1/2 bg-white border-2 border-orangeLike rounded-full cursor-pointer"
        style={{
          left: `${maxPercent}%`,
          zIndex: 10,
        }}
        onPointerDown={(e) => handlePointerDown(e, "max")}
      />
    </div>
  );
}
