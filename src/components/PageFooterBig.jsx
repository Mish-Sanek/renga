import React from "react";

const PageFooterBig = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__top">
        <section className="page-footer__start">
          <h3>
            <span>Have a project in mind?</span>
            Let’s get to work.
          </h3>
          <a href="">Start a project</a>
        </section>

        <ul className="page-footer__links">
          <li>
            Services
            <p>
              <a href="">Brand Identity</a>
              <a href="">Product Design</a>
              <a href="">Web Design</a>
              <a href="">Development</a>
              <a href="">Motion</a>
              <a href="">AI Design</a>
            </p>
          </li>

          <li>
            Agency
            <p>
              <a href="">Work</a>
              <a href="">Services</a>
              <a href="">Clients</a>
              <a href="">About</a>
              <a href="">Blog</a>
              <a href="">Privacy</a>
            </p>
          </li>

          <li>
            Time zone
            <p>
              <time>
                Estonia, Tallinn <br />
                6:59 PM
              </time>

              <time>
                Switzerland, Geneva <br />
                7:29 PM
              </time>
            </p>
          </li>
        </ul>
      </div>

      <div className="page-footer__bottom">
        <small>© 2017–2026 Renua</small>

        <nav className="page-footer__contacts">
          <a href="mailto:hey@renua.one" className="mail">
            hey@renua.one
          </a>
          <a href="" className="linkedin">
            LinkedIn
          </a>
          <a href="" className="inst">
            Instagram
          </a>
          <a href="" className="clutch">
            Clutch
          </a>
          <a href="" className="behance">
            Behance
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default PageFooterBig;
