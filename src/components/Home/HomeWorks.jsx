import Image from "next/image";
import BorderedTitle from "../BorderedTitle/BorderedTitle";
import Link from "next/link";

const HomeWorks = () => {
  return (
    <section className="works">
      <BorderedTitle>Selected work</BorderedTitle>

      <div className="works__list">
        <div className="works__list-item">
          <video src="/img/home/works/ApeAi.webm" poster="/img/works/ApeAi.webp" autoPlay loop muted playsInline />
          <b>ApeAI</b>
          <p>AI-powered workflow and achievement tools for modern teams.</p>
        </div>
        <div className="works__list-item">
          <video src="/img/home/works/Freedomfinance.webm" poster="/img/home/works/Freedomfinance-poster.webp" autoPlay loop muted playsInline />
          <b>Freedom Finance</b>
          <p>A visually compelling card identity and ecosystem.</p>
        </div>
        <div className="works__list-item works__list-item--big">
          <img src="/img/home/works/vodafone.webp" alt="" />
          <b>Vodafone</b>
          <p>Creative campaign and digital experience.</p>
        </div>
        <div className="works__list-item works__list-item--60">
          <video src="/img/home/works/Cruz.webm" poster="/img/home/works/cruz.jpg" autoPlay loop muted playsInline />
          <b>Cruz</b>
          <p>Reimagining digital banking.</p>
        </div>
        <div className="works__list-item">
          <img src="/img/home/works/NVO.webp" alt="" />
          <b>NVO</b>
          <p>Brand identity and digital experiences.</p>
        </div>
        <div className="works__list-item">
          <img src="/img/home/works/freedom-card-poster.webp" alt="" />
          <b>Freedom Finance - Card series</b>
          <p>Designing a premium card series for modern financial products.</p>
        </div>
        <div className="works__list-item">
          <video src="/img/home/works/Looksrare.webm" poster="/img/home/works/Looksrare.jpg" autoPlay loop muted playsInline />
          <b>Looksrare</b>
          <p>Marketplace design for digital assets.</p>
        </div>
        <div className="works__list-item works__list-item--big">
          <video src="/img/home/works/Nobleblocks.webm" poster="/img/home/works/Nobleblocks.jpg" autoPlay loop muted playsInline />
          <b>Nobleblocks</b>
          <p>Blockchain-based publishing platform.</p>
        </div>
      </div>
      <Link href="/works" className="works__more">
        See more works
      </Link>
    </section>
  );
};

export default HomeWorks;
