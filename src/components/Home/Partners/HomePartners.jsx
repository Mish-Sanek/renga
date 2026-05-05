import Image from "next/image";
import './HomePartners.css'
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

const partners = [
  huawei, optimism, ford, abbott, binance,
  papara, vodafone, eclipse, polkadot, amc
];

const HomePartners = () => {
  return (
    <div className="partners marquee-container">
      <div className="marquee marquee-grid">
        {partners.map((src, idx) => (
          <Image src={src} key={idx} alt="" className="marquee__item" />
        ))}
      </div>

      <div className="marquee-slider-wrapper">
        <div className="marquee-slider">
          <div className="marquee-slider-track">
            {[...partners, ...partners].map((src, idx) => (
              <Image src={src} key={idx} className="marquee-slider__item" alt="" />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default HomePartners;
