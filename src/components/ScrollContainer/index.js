'use client';
import ReactLenis from 'lenis/react';
import React, { useEffect, useState } from 'react';

const ScrollContainer = ({children}) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);

    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const scrollOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    syncTouch: true
  };

  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={scrollOptions}>
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
