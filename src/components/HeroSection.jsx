import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    // Split and animate text
    const split = new SplitType(textRef.current, { types: "chars" });
    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.03,
      ease: "power4.out",
      duration: 1,
    });

    // Animate image after text
    gsap.from(imgRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.8,
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://res.cloudinary.com/dadgglcaq/video/upload/v1749483842/Tube_c00wym.mp4"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          ref={textRef}
          className="text-white text-4xl md:text-6xl font-extrabold tracking-wide leading-tight mb-8 max-w-3xl"
        >
          Helping Entrepreneurs <br /> Dreams Come To Life
        </h1>
        <img
          ref={imgRef}
          src="/person.png"
          alt="KasmirCo CEO"
          className="w-48 md:w-60 lg:w-72 object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
