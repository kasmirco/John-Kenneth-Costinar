import { useEffect } from "react";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleClick = () => {
      cursor.classList.add("clicking");
      setTimeout(() => cursor.classList.remove("clicking"), 150);
    };

    const handleScroll = () => {
      cursor.classList.add("scrolling");
      setTimeout(() => cursor.classList.remove("scrolling"), 300);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Your app contents */}
      <div id="custom-cursor"></div>
    </>
  );
}
