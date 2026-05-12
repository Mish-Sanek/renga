import styles from './style.module.css'
import Link from "next/link";

const GetInTouchFixed = () => {
  return (
    <Link className={styles.contactUs} href="contact-us">
      Get in touch
    </Link>
  );
};

export default GetInTouchFixed;
