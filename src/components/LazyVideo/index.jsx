'use client';
import { useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster, threshold = 0.05, aspectRatio = "16/9", ...props }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            video.play().catch((e) => {
              console.log('Autoplay blocked:', e);
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold,
        rootMargin: '100px'
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div >
      <video
        ref={videoRef}
        src={src}
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
