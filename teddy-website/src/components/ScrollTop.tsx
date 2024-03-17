"use client";

import { useEffect, useState } from "react";
import RocketUp from "./svgs/RocketUp";
import { animateScroll } from "react-scroll";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(0);

  const onScrollTop = () => {
    animateScroll.scrollToTop({ smooth: true, duration: 300 });
  };

  const onScroll = () => {
    setScroll(() => window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-10 right-10 z-20 hover:-translate-y-2 transition-all hover:scale-105 ${
        scroll > 500 ? "opacity-100" : "opacity-0 !-z-[1]"
      }`}
      onClick={onScrollTop}
    >
      <RocketUp />
    </button>
  );
};

export default ScrollTop;
