import styles from "./style.module.css";
import Link from "next/link";
import BorderedTitle from "../BorderedTitle/BorderedTitle";

import freedomPoster from "@/app/img/home/works/freedom-poster.jpg"

const LastProjects = () => {
  return (
    <section className={styles.lastProjects}>
      <BorderedTitle>Last Project</BorderedTitle>
      <nav className={styles.lastProjects__list}>
        <Link
          href="#"
          className={styles.lastProjects__item + ' ' + styles['lastProjects__item--small']}
        >
          <div
            className={styles.lastProjects__itemInfo}
            style={{ "--info-color": "#8CE85F" }}
          >
            <b>ApeAI</b>
            <span>AI-powered workflow system for modern teams.</span>
          </div>
          <video
            src="/videos/ApeAi.webm"
            poster={freedomPoster.src}
            autoPlay
            playsInline
            muted
            loop
          />
        </Link>
        <Link
          href="#"
          className={styles.lastProjects__item + ' ' + styles['lastProjects__item--big']}
        >
          <div
            className={styles.lastProjects__itemInfo}
            style={{ "--info-color": "#F23111" }}
          >
            <b>Vodafone</b>
            <span>Creative campaign and digital experience.</span>
          </div>
          <video
            src="/videos/Vodafone.webm"
          />
        </Link>
      </nav>
      <Link href="work" className={styles.lastProjects__more}>
        See more works
      </Link>
    </section>
  );
};

export default LastProjects;
