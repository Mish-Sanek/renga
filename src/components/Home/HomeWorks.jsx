import Image from "next/image";

import ape from "@/app/img/home/works/ape.jpg"
import freedomPoster from "@/app/img/home/works/freedom-poster.jpg"
import vodafone from "@/app/img/home/works/vodafone.jpg"
import cruz from "@/app/img/home/works/cruz.jpg"
import nvo from "@/app/img/home/works/nvo.jpg"
import freedomCard from "@/app/img/home/works/freedom-card.jpg"
import looksrare from "@/app/img/home/works/looksrare.jpg"
import nobleblocks from "@/app/img/home/works/nobleblocks.jpg"

const HomeWorks = () => {
  return (
    <section className="works">
      <h2 className="works__title">Selected work</h2>

      <div className="works__list">
        <div className="works__list-item">
          <Image src={ape} alt=""/>
          <b>ApeAI</b>
          <p>AI-powered workflow and achievement tools for modern teams.</p>
        </div>
        <div className="works__list-item">
          <Image src={freedomPoster} alt="" />
          <b>Freedom Finance</b>
          <p>A visually compelling card identity and ecosystem.</p>
        </div>
        <div className="works__list-item works__list-item--big">
          <Image src={vodafone} alt="" />
          <b>Vodafone</b>
          <p>Creative campaign and digital experience.</p>
        </div>
        <div className="works__list-item works__list-item--60">
          <Image src={cruz} alt="" />
          <b>Cruz</b>
          <p>Reimagining digital banking.</p>
        </div>
        <div className="works__list-item">
          <Image src={nvo} alt="" />
          <b>NVO</b>
          <p>Brand identity and digital experiences.</p>
        </div>
        <div className="works__list-item">
          <Image src={freedomCard} alt="" />
          <b>Freedom Finance - Card series</b>
          <p>Designing a premium card series for modern financial products.</p>
        </div>
        <div className="works__list-item">
          <Image src={looksrare} alt="" />
          <b>Looksrare</b>
          <p>Marketplace design for digital assets.</p>
        </div>
        <div className="works__list-item works__list-item--big">
          <Image src={nobleblocks} alt="" />
          <b>Nobleblocks</b>
          <p>Blockchain-based publishing platform.</p>
        </div>
      </div>
      <a href="" className="works__more">
        See more works
      </a>
    </section>
  );
};

export default HomeWorks;
