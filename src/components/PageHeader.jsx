"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Work", url: "works" },
  { name: "Services", url: "services" },
  { name: "Clients", url: "clients" },
  { name: "About", url: "about" },
];

const PageHeader = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`page-header ${isOpen ? "opened" : ""}`}>
      <Link href="/" className="page-header__logo">
        <picture>
          <source srcSet="img/logo-short.svg" media="(max-width: 767px)" />
          <img src="img/logo.svg" alt="RENUA logo" />
        </picture>
      </Link>

      <nav className="page-header__nav">
        {links.map((link) => (
          <Link
            className={pathname.includes(link.url) ? "active" : ""}
            href={link.url}
            key={link.url}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Link href="contact-us" className="page-header__contact">
        Get in touch
      </Link>
      <button
        className="page-header__open-nav"
        onClick={() => setIsOpen(!isOpen)}
      ></button>
    </header>
  );
};

export default PageHeader;
