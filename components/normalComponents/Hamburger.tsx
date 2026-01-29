"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HamburgerMenu({state}:{state: boolean}) {
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    // Create the timeline once and pause it
    tl.current = gsap.timeline({ paused: true })
      .to(".line-top", { y: 8, rotation: 45, duration: 0.3, ease: "power2.inOut" })
      .to(".line-mid", { opacity: 0, x: -10, duration: 0.2, ease: "power2.inOut" }, "<") // "<" starts at same time as previous
      .to(".line-bot", { y: -8, rotation: -45, duration: 0.3, ease: "power2.inOut" }, "<");
  }, { scope: container });

  // Toggle the animation based on state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  };

  return (
    <button 
      ref={container}
      onClick={toggleMenu}
      className={`flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none cursor-pointer z-50  group `}
      aria-label="Toggle Menu"
    >
      {/* Line 1 */}
      <span className={`line-top ${state ? 'bg-white' : 'bg-black'} block w-8 h-0.5 `}></span>
      {/* Line 2 */}
      <span className={`line-mid ${state ? 'bg-white' : 'bg-black'} block w-8 h-0.5  `}></span>
      {/* Line 3 */}
      <span className={`line-bot ${state ? 'bg-white' : 'bg-black'}  block w-8 h-0.5`}></span>
    </button>
  );
}