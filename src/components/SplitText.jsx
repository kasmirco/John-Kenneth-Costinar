// src/components/SplitText.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SplitText = ({
  text,
  delay = 100,
  duration = 0.5,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "0px",
  className = "",
  onLetterAnimationComplete,
  textAlign = "left",
}) => {
  const el = useRef();

  useEffect(() => {
    const target = el.current;
    const chars = target.querySelectorAll(".char");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            chars,
            {
              ...from,
            },
            {
              ...to,
              delay: 0,
              duration,
              ease,
              stagger: delay / 1000,
              onComplete: onLetterAnimationComplete,
            }
          );
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  const splitText = text.split("").map((char, index) => (
    <span key={index} className="char inline-block">
      {char === " " ? "\u00A0" : char}
    </span>
  ));

  return (
    <div ref={el} className={className} style={{ textAlign }}>
      {splitText}
    </div>
  );
};

export default SplitText;
