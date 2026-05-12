import styles from './style.module.css'

const CommonHero = ({title = null, descr, posterUrl, videoUrl = null}) => {
  return (
    <section className={styles.commonHero}>
      {title && <h1 className={styles.commonHero__title}>{title}</h1>}
      <p className={styles.commonHero__descr}>{descr}</p>
      <video className={styles.commonHero__video} poster={posterUrl} src={videoUrl} playsInline autoPlay loop muted />
    </section>
  )
}

export default CommonHero;
