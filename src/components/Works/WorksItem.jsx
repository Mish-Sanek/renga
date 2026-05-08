import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorksItem = ({ item }) => {
  return (
    <Link href={item.slug} className="works-list__item">
      <Image src={item.picture} alt={item.name} width={754} height={600} />
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
