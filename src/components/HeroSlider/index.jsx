import styles from './style.module.css'

const HeroSlider = ({items}) => {
  return (
    <div className={styles.slider}>
      {
        items.map((item, index) => <img src={item} key={index} alt='' />)
      }
    </div>
  )
}

export default HeroSlider
