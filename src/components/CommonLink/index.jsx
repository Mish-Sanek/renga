import Link from "next/link";
import styles from './style.module.css'

const CommonLink = ({children, url}) => {
  return (
    <Link href={url} scroll={true} className={styles.link}>{children}</Link>
  )
}

export default CommonLink;
