import React, { useEffect } from "react";
import "../styles.css"; // Make sure to import your CSS

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor") as HTMLElement;
    const cursorLag = document.querySelector(".cursor-lag") as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const moveLagCursor = (e: MouseEvent) => {
      setTimeout(() => {
        cursorLag.style.top = `${e.clientY}px`;
        cursorLag.style.left = `${e.clientX}px`;
      }, 50); // Adjust delay as needed
    };

    const handleMouseDown = () => {
      cursor.classList.add("cursor-click");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("cursor-click");
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousemove", moveLagCursor);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousemove", moveLagCursor);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-lag"></div>
    </>
  );
};

export default CustomCursor;
