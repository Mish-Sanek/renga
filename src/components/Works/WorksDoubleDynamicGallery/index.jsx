import Image from "next/image";
import styles from "./style.module.css";

const WorksDoubleDynamicGallery = ({ items }) => {

  return (
    <div className={styles.gallery}>
      {items.map((item, index) => (
        <div key={index} className={styles.mediaWrapper}>
          {item.poster ? (
            <video
              src={item.src}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
              className={styles.media}
            />
          ) : (
            <Image
              src={item.src}
              alt=""
              width={index === 0 ? 989 : 527}
              height={528}
              className={styles.media}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default WorksDoubleDynamicGallery;
