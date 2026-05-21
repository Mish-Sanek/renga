"use client";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./style.module.css";

const FollowCursor = ({ children }) => {
  const tooltipRef = useRef(null);
  const parentRef = useRef(null);

  const state = useRef({ isHovered: false, x: 0, y: 0 });

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const parent = parentRef.current?.parentElement;

    if (!tooltip || !parent) return;

    const updatePosition = () => {
      const { x, y, isHovered } = state.current;
      const scale = isHovered ? 1 : 0;

      tooltip.style.transform = `translate3d(${x + 50}px, ${y + 40}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const handleMouseMove = (e) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
      updatePosition();
    };

    const handleMouseEnter = () => {
      state.current.isHovered = true;
      tooltip.classList.add(styles.active);
      updatePosition();
    };

    const handleMouseLeave = () => {
      state.current.isHovered = false;
      tooltip.classList.remove(styles.active);
      updatePosition();
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const isClient = typeof window !== "undefined" && document.body;

  return (
    <>
      <span ref={parentRef} style={{ display: "none" }} />

      {isClient && createPortal(
        <div ref={tooltipRef} className={styles.tooltip}>
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default FollowCursor;
