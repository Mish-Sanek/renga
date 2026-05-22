"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";


const ScrollReset = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (!lenis) return;

    const isWorkTabTransition =
      prevPathname.current.startsWith("/work") && pathname.startsWith("/work");

    if (!isWorkTabTransition) {
      lenis.scrollTo(0, { immediate: true });
    }

    prevPathname.current = pathname;
  }, [pathname, lenis]);

  return null;
};

const ScrollContainer = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const scrollOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    syncTouch: true,
  };

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={scrollOptions}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
