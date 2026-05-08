"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";

const WorksItem = ({ item }) => {

  const imgRef = useRef();

  useLenis(({ scroll }) => {
    if (!imgRef.current) return;

    console.log('Скролл идёт:', scroll);
    const rect = imgRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const shift = (rect.top + rect.height / 2 - windowHeight / 2) * 0.05;
      imgRef.current.style.transform = `translateY(${shift}px) scale(1.1)`;
    }
  });

  return (
    <Link href={item.slug} className="works-list__item">
      <div className="works-list__parallax-wrapper">
        <div ref={imgRef} className="works-list__img-handler">
          <Image src={item.picture} alt={item.name} width={754} height={600} priority={item.id < 3} />
        </div>
      </div>
      <b>{item.name}</b>
      <ul>
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </Link>
  );
};

export default WorksItem;
