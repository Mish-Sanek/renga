import poster from "@/app/img/home/hero-poster.png"

const HomeHero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        We design brands, products and digital <br />
        experiences for ambitious teams.
      </h1>
      <video
        src="/videos/Tama.webm"
        className="hero__video"
        poster={poster.src}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HomeHero;
