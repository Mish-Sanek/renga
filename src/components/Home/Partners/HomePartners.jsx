import Image from "next/image";
import './HomePartners.css'

const partners = [
  "huawei", "optimism", "ford", "abbott", "binance",
  "papara", "vodafone", "eclipse", "polkadot", "amc"
];

const HomePartners = () => {
  return (
    <div className="partners marquee-container">
      <div className="marquee marquee-grid">
        {partners.map((src, idx) => (
          <Image src={`/img/home/partners/${src}.svg`} key={idx} width={100} height={100} alt="" className="marquee__item" />
        ))}
      </div>

      <div className="marquee-slider-wrapper">
        <div className="marquee-slider">
          <div className="marquee-slider-track">
            {partners.map((src, idx) => (
              <Image src={`/img/home/partners/${src}.svg`} width={100} height={100} key={idx} className="marquee-slider__item" alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePartners;
