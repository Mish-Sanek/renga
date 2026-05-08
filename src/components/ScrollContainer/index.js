import ReactLenis from 'lenis/react';
import React from 'react'

const ScrollContainer = ({children}) => {

  const scrollOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    syncTouch: true
  }

  return (
    <ReactLenis root options={scrollOptions}>
      {children}
    </ReactLenis>
  )
}

export default ScrollContainer;
