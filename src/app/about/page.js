import Image from "next/image";
import "./about.css";
import team from "@/app/img/about/team.jpg";
import studio from "@/app/img/about/studio.jpg";

import huawei from "@/app/img/home/partners/huawei.svg";
import optimism from "@/app/img/home/partners/optimism.svg";
import ford from "@/app/img/home/partners/ford.svg";
import abbott from "@/app/img/home/partners/abbott.svg";
import binance from "@/app/img/home/partners/binance.svg";
import papara from "@/app/img/home/partners/papara.svg";
import vodafone from "@/app/img/home/partners/vodafone.svg";
import eclipse from "@/app/img/home/partners/eclipse.svg";
import polkadot from "@/app/img/home/partners/polkadot.svg";
import amc from "@/app/img/home/partners/amc.svg";

import Link from "next/link";
import TestimonialsSlider from "@/components/Sliders/TestimonialsSlider";
import LetsBuild from "@/components/LetsBuild/LetsBuild";

import freedomPoster from "@/app/img/home/works/freedom-poster.jpg"
import { testimonialsList } from "@/lib/reviews";

const partners = [
  huawei,
  optimism,
  ford,
  abbott,
  binance,
  papara,
  vodafone,
  eclipse,
  polkadot,
  amc,
];

const page = () => {
  return (
    <main className="about-content">
      <section>
        <h1 className="about-content__title">About</h1>
        <p className="about-content__descr">
          We design brands, products and digital experiences for ambitious
          teams.
        </p>
        <Image src={team} className="about-content__img" alt="team" />
      </section>

      <section className="about-studio">
        <h2 className="about-studio__title">Studio</h2>
        <div className="about-studio__info">
          <p>
            We work with startups and digital companies — from early concepts to
            production-ready systems.
          </p>
          <p>We combine product thinking, visual design and execution.</p>
          <Image src={studio} alt="studio" />
        </div>
      </section>

      <section className="about-facts">
        <h2 className="about-facts__title">Facts</h2>
        <ul className="about-facts__list">
          <li className="about-facts__item">
            <b>23</b>
            <p>Team members</p>
          </li>
          <li className="about-facts__item">
            <b>11</b>
            <p>Years of experience</p>
          </li>
          <li className="about-facts__item">
            <b>Top 10</b>
            <p>Studio in Estonia</p>
          </li>
          <li className="about-facts__item">
            <b>10+</b>
            <p>International awards</p>
          </li>
          <li className="about-facts__item">
            <b>40+</b>
            <p>Projects delivered</p>
          </li>
        </ul>
      </section>

      <ul className="about-partners">
        {partners.map((src, idx) => (
          <li key={idx}>
            <Image src={src} alt="" className="marquee__item" />
          </li>
        ))}
        <li>
          <Link href="#">Full list</Link>
        </li>
      </ul>

      <section className="about-team">
        <h2 className="about-team__title">Team</h2>
        <div className="about-team__info">
          <p className="about-team__descr">
            A distributed team working across branding, product and digital
            experiences.
          </p>
          <b className="about-team__members">
            Imar Sagadeev, Nikolai Kharitonov, Tom Rumpf, Vlad Kursakov, Viсtor
            Shulskiy, Azis Manoukian, Zarema Bikmeeva, Marat Vahitov, Rostislav
            Volokitin, Dana Bakhtina, Artem Kovalenko, Alexander Minaev, Ignacio
            Ibarra, Renat Muratshin, Olya Magarik, Eduardo, Georgy Karellin,
            Daria Lada, Aleksandr Levchenko, Arsen Jagaryan.
          </b>
        </div>
      </section>

      <TestimonialsSlider additionalClass="about-testimonials" testimonials={testimonialsList} />

      <LetsBuild />

      <section className="about-projects">
        <h2 className="about-projects__title">Last Project</h2>
        <nav className="about-projects__list">
          <Link href='#' className="about-projects__item about-projects__item--small">
            <div className="about-projects__item-info" style={{ '--info-color': '#8CE85F' }}>
              <b>ApeAI</b>
              <span>AI-powered workflow system for modern teams.</span>
            </div>
            <video src="/videos/ApeAi.webm" poster={freedomPoster.src}  className="about-projects__item-video"/>
          </Link>
          <Link href='#' className="about-projects__item about-projects__item--big">
            <div className="about-projects__item-info" style={{ '--info-color': '#F23111' }}>
              <b>Vodafone</b>
              <span>Creative campaign and digital experience.</span>
            </div>
            <video src="/videos/Vodafone.webm"  className="about-projects__item-video"/>
          </Link>
        </nav>
        <Link href='works' className="about-projects__more">See more works</Link>
      </section>
    </main>
  );
};

export default page;
