import "./clients.css";
import Image from "next/image";
import heroPoster from "@/app/img/clients/hero.png";
import HomePartners from "@/components/Home/Partners/HomePartners";
import TestimonialsSlider from "@/components/Sliders/TestimonialsSlider";
import { testimonialsList } from "@/lib/reviews";
import LetsBuild from "@/components/LetsBuild/LetsBuild";

const collaborationsList = [
  {
    name: 'Vodafone',
    descr: 'Brand campaign and digital experience for a global telecommunications company.'
  },
  {
    name: 'Huawei',
    descr: 'Design support across internal platforms and digital interfaces.'
  },
  {
    name: 'Ford',
    descr: 'UI design for in-vehicle systems and dashboard interfaces.'
  },
  {
    name: 'AMC+',
    descr: 'Product design for a streaming platform.'
  },
  {
    name: 'Abbott',
    descr: 'Brand and digital experience for healthcare products.'
  },
  {
    name: 'Ape Ai',
    descr: 'Product design for an AI-driven workflow platform.'
  },
  {
    name: 'Freedom Finance KZ',
    descr: 'Brand identity and product design for a financial platform.'
  },
  {
    name: 'Eclipse.xyz',
    descr: 'Mascot design, brand identity and motion system.'
  },
  {
    name: 'Polkadot',
    descr: 'Branding and visual system for a Web3 ecosystem.'
  },
  {
    name: 'Layer3.xyz',
    descr: 'Illustration system and motion design for a digital platform.'
  },
  {
    name: 'Optimism',
    descr: 'Campaign and visual system design for a Web3 ecosystem.'
  },
  {
    name: 'Yield.xyz',
    descr: 'Motion and 3D design for a series of films for a Web3 platform.'
  },

  {
    name: 'SmartCredit',
    descr: 'Brand identity and platform design for a credit product.'
  },
  {
    name: 'Nobleblocks',
    descr: 'Brand identity and product design for a blockchain-based publishing platform.'
  },
  {
    name: 'Twotwentyk',
    descr: 'Product design and branding for an NFT trading platform.'
  },
  {
    name: 'Pancakeswap',
    descr: 'Illustration system for a digital wallet.'
  },
  {
    name: 'Papara',
    descr: 'Product design concept for a digital payment platform in Turkey.'
  },
  {
    name: 'Binance',
    descr: 'Design support across internal products and visual systems.'
  },
  {
    name: 'Fantasy',
    descr: 'Motion and 3D design across digital products.'
  },
  {
    name: 'Looksrare',
    descr: 'Product design for a digital asset marketplace.'
  },
  {
    name: 'Voila',
    descr: 'Motion concept and direction across a series of digital campaigns.'
  },
  {
    name: 'NVO',
    descr: 'Brand identity, product design and motion system for a digital wallet.'
  },
  {
    name: 'Velas',
    descr: 'Brand campaign and digital experience design for a global telecommunications company.'
  },
  {
    name: 'Coinpayments',
    descr: 'Product design for a digital asset exchange platform.'
  },
]

const page = () => {

  return (
    <main className="clients-content">
      <section>
        <h1 className="clients-content__title">Clients</h1>
        <p className="clients-content__descr">
          We partner with startups and global companies to design brands,
          products and digital experiences.
        </p>
        <Image
          src={heroPoster}
          className="clients-content__img"
          alt="clients"
        />
        <p className="clients-content__text">
          We partner with teams across fintech, SaaS, AI and emerging
          technologies.
        </p>
      </section>

      <HomePartners />

      <TestimonialsSlider testimonials={testimonialsList} />

      <section className="clients-block">
        <h2 className="clients-block__title">Selected collaborations</h2>

      </section>

      <LetsBuild />

      <section className="clients-collaborations">
        <h2 className="clients-collaborations__title">Selected collaborations</h2>
        <ul className="clients-collaborations__list">
          {
            collaborationsList.map((company, index) => (
              <li className="clients-collaborations__item" key={index}>
                <b>{company.name}</b>
                <p>{company.descr}</p>
              </li>
            ))
          }
        </ul>
      </section>

      <section className="clients-industries">
        <h2 className="clients-industries__title">Industries</h2>
        <b>We work with teams across fintech, SaaS, AI and emerging technologies.</b>
      </section>
    </main>
  );
};

export default page;
