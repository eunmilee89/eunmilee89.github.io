"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

const MAX_TILT_DEG = 12;

interface TiltPreviewProps {
  children: ReactNode;
}

/** 포인터 방향으로 카드를 기울여 입체감을 준다 */
export function TiltPreview({ children }: TiltPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  const setTilt = (rotateX: number, rotateY: number) => {
    ref.current?.style.setProperty("--tilt-x", `${rotateX}deg`);
    ref.current?.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // 카드 중심을 0으로 두고 -0.5 ~ 0.5 범위로 정규화한다
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt(-offsetY * MAX_TILT_DEG, offsetX * MAX_TILT_DEG);
  };

  const handlePointerLeave = () => setTilt(0, 0);

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="perspective-[1200px]"
    >
      <div
        ref={ref}
        className="relative transition-transform duration-300 ease-out transform-3d [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))]"
      >
        {children}
      </div>
    </div>
  );
}
