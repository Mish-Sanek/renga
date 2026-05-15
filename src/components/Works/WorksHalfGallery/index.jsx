import styles from './style.module.css'
import Image from "next/image";

const WorksHalfGallery = ({ item , isReversed = false}) => {
  return (
    <div className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"]: ''}`}>
      <span></span>
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
        <Image src={item.src} width={758} height={800} alt="" />
      )}
    </div>
  );
};

export default WorksHalfGallery;
