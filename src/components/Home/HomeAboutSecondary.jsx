import React from "react";
import BorderedTitle from "../BorderedTitle/BorderedTitle";

const HomeAboutSecondary = () => {
  return (
    <section className="about-secondary">
      <BorderedTitle>Who we are</BorderedTitle>
      <h3 className="about-secondary__text">
        Renua is a digital design studio helping ambitious companies create
        brands, products and digital experiences that stand out and scale.
      </h3>
      <ul>
        <li>
          <b>40+</b>
          <p>Projects delivered</p>
        </li>
        <li>
          <b>2016</b>
          <p>Founded in</p>
        </li>
      </ul>
      <a href="" className="about-secondary__more">
        About Renua
      </a>
    </section>
  );
};

export default HomeAboutSecondary;
