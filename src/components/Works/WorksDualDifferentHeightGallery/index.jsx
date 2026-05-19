import styles from './style.module.css'
import Image from 'next/image';

const WorksDualDifferentHeightGallery = ({items}) => {

  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <div key={item.src} className={styles.mediaWrapper}>
          {item.poster ? (
            <video
              src={item.src !== "" ? item.src : null}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={item.src}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default WorksDualDifferentHeightGallery;
