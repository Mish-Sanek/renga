'use client';
import { useEffect, useRef, useState } from 'react';

const LazyVideo = ({ src, poster, threshold = 0.05, aspectRatio = "16/9", ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false); // Загружено ли видео в DOM
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Используем один обсервер и для ленивой загрузки src, и для плей/паузы
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 1. Включаем src один раз и навсегда, когда видео приближается
            setIsLoaded(true);

            // 2. Включаем воспроизведение
            video.play().catch((e) => console.log('Autoplay blocked:', e));
          } else {
            // 3. Ставим на паузу, когда ушло за экран, но НЕ удаляем src
            if (isLoaded) {
              video.pause();
            }
          }
        });
      },
      // rootMargin: '200px' начнет загружать видео за 200px ДО того,
      // как юзер его увидит, чтобы не было белого экрана
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
        aspectRatio: aspectRatio,
        overflow: 'hidden'
      }}
    >
      <video
        ref={videoRef}
        src={isLoaded ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
        {...props}
      />
    </div>
  );
};

export default LazyVideo;
