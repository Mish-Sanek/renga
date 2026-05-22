'use client';
import { useEffect, useRef, useState } from 'react';

const LazyVideo = ({ src, poster, threshold = 0.05, aspectRatio = "16/9", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            setIsLoaded(true);


            video.play().catch((e) => console.log('Autoplay blocked:', e));
          } else {

            if (isLoaded) {
              video.pause();
            }
          }
        });
      },
      { threshold, rootMargin: '200px' }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isLoaded]);

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <video
        ref={videoRef}

        src={isLoaded ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        {...props}
      />
    </div>
  );
};

export default LazyVideo;
