'use client';

import { useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster, className, style, ...props }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isLoadedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isLoadedRef.current && src) {
            video.src = src;
            video.load();
            isLoadedRef.current = true;
          }

          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { rootMargin: '100px 0px', threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div ref={containerRef} className={className} style={style}>
      <video
        ref={videoRef}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        {...props}
      />
    </div>
  );
};

export default LazyVideo;
