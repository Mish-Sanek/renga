'use client';
import { useEffect, useRef, useState } from 'react';

const LazyVideo = ({ src, poster, threshold = 0.1, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    observerRef.current.observe(videoRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch((e) => {
        console.log('Video autoplay failed:', e);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isVisible]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      {...props}
    />
  );
};

export default LazyVideo;
