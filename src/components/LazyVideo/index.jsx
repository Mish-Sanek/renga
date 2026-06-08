'use client';

import { useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster, className, style, ...props }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { rootMargin: '0px', threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={style}>
      <video
        ref={videoRef}
        src={src || undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        {...props}
      />
    </div>
  );
};

export default LazyVideo;
