import styles from './style.module.css'
import Image from 'next/image'

const WorksThirdSmallGallery = ({items, isReversed = false}) => {
  return (
    <div
      className={`${styles.gallery} ${isReversed ? styles["gallery--reversed"] : ""}`}
    >
      {items.map((item, index) => (
        <div key={index} className={styles.mediaWrapper}>
          {item.poster !== null ? (
            <video
              src={item.src !== "" ? item.src : null}
              poster={item.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image src={item.src} width={988} height={754} alt="" />
          )}
        </div>
      ))}
    </div>
  )
}

export default WorksThirdSmallGallery
