import Image from "next/image";
import "./about.css";

import Link from "next/link";
import TestimonialsSlider from "@/components/Sliders/TestimonialsSlider";
import LetsBuild from "@/components/LetsBuild/LetsBuild";
import BorderedTitle from "@/components/BorderedTitle/BorderedTitle";

import { testimonialsList } from "@/lib/reviews";

export const metadata = {
  title: "Clients — AI, Fintech & Technology Companies | Renua",

  description:
    "We partner with startups and global companies across AI, fintech, SaaS and digital products to build scalable product experiences.",

  keywords: [
    "design agency clients",
    "fintech clients",
    "AI startups",
    "technology companies",
    "product design collaborations",
    "startup partnerships",
  ],

  openGraph: {
    title: "Clients — Renua",

    description:
      "Selected clients and collaborations across AI, fintech and technology.",
  },
};

const partners = [
  "huawei",
  "optimism",
  "ford",
  "abbott",
  "binance",
  "papara",
  "vodafone",
  "eclipse",
  "polkadot",
  "amc",
];

const page = () => {
  return (
    <main className="about-content">
      <section>
        <h1 className="about-content__title">About</h1>
        <p className="about-content__descr">
          We design brands, products and digital experiences for ambitious
          companies.
        </p>
        <Image
          src={"/img/about/studio.webp"}
          width={1528}
          height={1000}
          className="about-content__img"
          alt="team"
        />
      </section>

      <section className="about-studio">
        <BorderedTitle>Studio</BorderedTitle>
        <div className="about-studio__info">
          <p>
            We work with startups and digital companies — from early concepts to
            production-ready systems.
          </p>
          <p>We combine product thinking, visual design and execution.</p>
          <Image
            src={"/img/about/team.webp"}
            width={1011}
            height={1011}
            alt="studio"
          />
        </div>
      </section>

      <section className="about-facts">
        <BorderedTitle>Facts</BorderedTitle>
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
            <Image
              src={`/img/home/partners/${src}.svg`}
              width={100}
              height={100}
              alt=""
              className="marquee__item"
            />
          </li>
        ))}
        <li>
          <Link href="clients">Full list</Link>
        </li>
      </ul>

      <section className="about-team">
        <BorderedTitle>Team</BorderedTitle>
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

      <TestimonialsSlider
        additionalClass="about-testimonials"
        testimonials={testimonialsList}
      />

      <LetsBuild />

      <section className="about-projects">
        <BorderedTitle>Last Projects</BorderedTitle>
        <nav className="about-projects__list">
          <Link
            href="#"
            className="about-projects__item about-projects__item--small"
          >
            <div
              className="about-projects__item-info"
              style={{ "--info-color": "#8CE85F" }}
            >
              <b>ApeAI</b>
              <span>AI-powered workflow system for modern teams.</span>
            </div>
            <video
              src="/videos/ApeAi.webm"
              poster="/img/works/ApeAi.webp"
              autoPlay
              muted
              loop
              playsInline
              className="about-projects__item-video"
            />
          </Link>
          <Link
            href="#"
            className="about-projects__item about-projects__item--big"
          >
            <div
              className="about-projects__item-info"
              style={{ "--info-color": "#F23111" }}
            >
              <b>Vodafone</b>
              <span>Creative campaign and digital experience.</span>
            </div>
            <video
              src="/videos/Vodafone.webm"
              autoPlay
              muted
              loop
              playsInline
              className="about-projects__item-video"
            />
          </Link>
        </nav>
        <Link href="work" className="about-projects__more">
          See more works
        </Link>
      </section>
    </main>
  );
};

export default page;
