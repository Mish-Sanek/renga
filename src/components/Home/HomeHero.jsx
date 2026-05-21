import FollowCursor from "../FollowCursor";

const HomeHero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        We design brands, products and digital <br/>
        experiences for ambitious companies.
      </h1>
      <div>
        <video
        src="/img/home/Tama.webm"
        className="hero__video"
        poster="/img/home/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <FollowCursor>Soon</FollowCursor>
      </div>
    </section>
  );
};

export default HomeHero;
