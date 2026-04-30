import Link from "next/link";
import Image from "next/image";


const Works = ({ list }) => {
  return (
    <div className="works-list">
      {list.map((item) => (
        <Link key={item.id} href={item.slug} className="works-list__item">
          <Image src={item.picture} alt="" width={754} height={600} />
          <b>{item.name}</b>
          <ul>
            {
              item.tags.map((tag) => <li key={tag}>{tag}</li>)
            }
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default Works;
