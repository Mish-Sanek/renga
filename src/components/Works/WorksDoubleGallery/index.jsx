import Image from 'next/image';
import styles from './style.module.css'

const WorksDoubleGallery = ({items}) => {
  console.log(items[0].src);
  return (
    <div
      className={`${styles.gallery}`}
    >
      {items.map((item) => (
        <div key={item.src} className={styles.mediaWrapper}>
          {item.poster !== null ? (
            <video
              src={null}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image src={item.src}  width={758} height={969} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}

export default WorksDoubleGallery
