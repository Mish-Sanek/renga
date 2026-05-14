import Image from "next/image";
import styles from "./style.module.css";

const WorksThirdEmptyGallery = ({item, isReversed = false }) => {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {item.poster !== null ? (
        <video
          src={null}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
          className={styles.media}
        />
      ) : (
        <Image src={item.src} className={styles.media} width={758} height={800} alt="" />
      )}
      <span></span>
    </div>
  );
};

export default WorksThirdEmptyGallery;
