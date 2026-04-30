"use client";

import { useState } from "react";
import logo from "@/app/img/logo.svg";
import logoShort from "@/app/img/logo-short.svg";
import Link from "next/link";

const PageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`page-header ${isOpen ? "opened" : ""}`}>
      <Link href="/" className="page-header__logo">
        <picture>
          <source srcSet={logoShort.src} media="(max-width: 767px)" />
          <img src={logo.src} alt="RENUA logo" />
        </picture>
      </Link>

      <nav className="page-header__nav">
        <a href="">
          Work
        </a>
        <a href="">Services</a>
        <a href="">Clients</a>
        <a href="">About</a>
      </nav>

      <Link href="contact-us" className="page-header__contact">
        Get in touch
      </Link>
      <button className="page-header__open-nav" onClick={() => setIsOpen(!isOpen)}></button>
    </header>
  );
};

export default PageHeader;
