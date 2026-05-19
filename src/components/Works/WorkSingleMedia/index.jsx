import styles from './style.module.css'
import Image from "next/image";

const WorkSingleMedia = ({ item }) => {
  return (
    <>
      {item.poster !== null ? (
        <video
        className={styles.singleMedia}
          src={item.src !== "" ? item.src : null}
          poster={item.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <Image
          className={styles.singleMedia}
          src={item.src}
          alt=""
          width={1528}
          height={900}
        />
      )}
    </>
  );
};

export default WorkSingleMedia;
