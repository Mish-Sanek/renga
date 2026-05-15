import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorksDualDifferentHeightGallery from "@/components/Works/WorksDualDifferentHeightGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksThirdSmallGallery from "@/components/Works/WorksThirdBigGallery";
import WorksThirdEmptyGallery from "@/components/Works/WorksThirdEmptyGallery";
import WorksTrippleRowGallery from "@/components/Works/WorksTrippleRowGallery";

const descriptionData = {
  hiddenTitle: "NVO",

  listsData: [
    {
      label: "Services",
      list: [
        "Product Design",
        "Brand Identity",
        "Motion Design",
        "Campaign Design",
      ],
    },
    {
      label: "Industry",
      list: ["Fintech / Web3"],
    },
    {
      label: "Date",
      list: ["2021"],
    },
  ],
  textData: [
    "A trading platform designed for speed.",
    "NVO required a scalable visual system capable of supporting product interfaces, digital campaigns and platform communication across a rapidly evolving ecosystem.",
  ],
};

const galleryItem1 = {
  src: "/img/works/nvo/gallery1.jpg",
  poster: null,
};

const galleryItem2 = {
  src: "/img/works/nvo/gallery2.jpg",
  poster: null,
};

const galleryItem3 = {
  src: "/img/works/nvo/gallery3.jpg",
  poster: null,
};

const galleryItem4 = {
  src: "/img/works/nvo/gallery4.jpg",
  poster: null,
};

const galleryItem5 = {
  src: "",
  poster: "/img/works/nvo/gallery5poster.jpg",
};

const galleryItem6 = {
  src: "",
  poster: "/img/works/nvo/gallery6poster.jpg",
};

const galleryItem7 = {
  src: "/img/works/nvo/gallery7.jpg",
  poster: null,
};

const galleryItems8 = [
  { src: "/img/works/nvo/gallery8-1.jpg", poster: null },
  { src: "", poster: "/img/works/nvo/gallery8-2poster.jpg" },
];

const galleryItem9 = {
  src: "/img/works/nvo/gallery9.jpg",
  poster: null,
};

const galleryItems10 = [
  { src: "/img/works/nvo/gallery10-1.jpg", poster: null },
  { src: "/img/works/nvo/gallery10-2.jpg", poster: null },
];

const galleryItem11 = {
  src: "",
  poster: "/img/works/nvo/gallery11poster.jpg",
};

const galleryItem12 = {
  src: "/img/works/nvo/gallery12.jpg",
  poster: null,
};

const galleryItem13 = {
  src: "/img/works/nvo/gallery13.jpg",
  poster: null,
};

const galleryItem14 = {
  src: "/img/works/nvo/gallery14.jpg",
  poster: null,
};

const galleryItem15 = {
  src: "/img/works/nvo/gallery15.jpg",
  poster: null,
};

const galleryItem16 = {
  src: "/img/works/nvo/gallery16.jpg",
  poster: null,
};

const galleryItem17 = {
  src: "",
  poster: "/img/works/nvo/gallery17poster.jpg",
};

const galleryItem18 = {
  src: "/img/works/nvo/gallery18.svg",
  poster: null,
};

const galleryItem19 = {
  src: "/img/works/nvo/gallery19.jpg",
  poster: null,
};

const galleryItem20 = {
  src: "/img/works/nvo/gallery20.svg",
  poster: null,
};

const galleryItem21 = {
  src: "",
  poster: "/img/works/nvo/gallery21poster.jpg",
};

const galleryItem22 = {
  src: "/img/works/nvo/gallery22.jpg",
  poster: null,
};

const galleryItems23 = [
  { src: "/img/works/nvo/gallery23-1.jpg", poster: null },
  { src: "/img/works/nvo/gallery23-2.jpg", poster: null },
];

const galleryItem24 = {
  src: "/img/works/nvo/gallery24.jpg",
  poster: null,
};

const galleryItem25 = {
  src: "",
  poster: "/img/works/nvo/gallery25poster.jpg",
};

const galleryItem26 = [
  {src: "", poster: "/img/works/nvo/gallery26-1poster.jpg",},
  {src: "", poster: "/img/works/nvo/gallery26-2poster.jpg",},
  {src: "", poster: "/img/works/nvo/gallery26-3poster.jpg",},
]

const page = () => {
  return (
    <main>
      <CommonHero
        title={"NVO"}
        descr={
          "Designing a more flexible digital ecosystem for a next-generation trading platform."
        }
        posterUrl={"/img/works/nvo/hero-poster.jpg"}
        videoUrl={null}
      />
      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorkSingleMedia item={galleryItem1} />
        <WorkSingleMedia item={galleryItem2} />
        <WorkSingleMedia item={galleryItem3} />
        <WorkSingleMedia item={galleryItem4} />
        <WorkSingleMedia item={galleryItem5} />
        <WorkSingleMedia item={galleryItem6} />
        <WorkSingleMedia item={galleryItem7} />
        <WorksDualDifferentHeightGallery items={galleryItems8} />
        <WorkInsight
          title={
            "Product systems built for active users. A modular UI framework allowed"
          }
          descr={`the platform to scale across trading tools, analytics and asset
        management experiences while maintaining visual consistency.`}
        />
        <WorkSingleMedia item={galleryItem9} />
        <WorksDualDifferentHeightGallery items={galleryItems10} />
        <WorkInsight
          title={"Designed around clarity and performance."}
          descr={`The interface system focused on hierarchy, accessibility and fast interaction flows across complex trading environments.`}
        />
        <WorkSingleMedia item={galleryItem11} />
        <WorkSingleMedia item={galleryItem12} />
        <WorksThirdEmptyGallery item={galleryItem13} />
        <WorkSingleMedia item={galleryItem14} />
        <WorksThirdEmptyGallery item={galleryItem15} isReversed={true} />
        <WorkSingleMedia item={galleryItem16} />
        <WorkSingleMedia item={galleryItem17} />
        <WorkSingleMedia item={galleryItem18} />
        <WorkSingleMedia item={galleryItem19} />
        <WorkSingleMedia item={galleryItem20} />
        <WorkSingleMedia item={galleryItem21} />
        <WorkSingleMedia item={galleryItem22} />
        <WorksThirdSmallGallery items={galleryItems23} />
        <WorkSingleMedia item={galleryItem24} />
        <WorkSingleMedia item={galleryItem25} />
        <WorkInsight
          title={"Finance through a more contemporary lens."}
          descr={`The final system combined product design, branding and motion into a unified trading experience.`}
          isReversed={true}
        />
        <WorksTrippleRowGallery items={galleryItem26} />
        <LastProjects />
      </WorksContent>
    </main>
  );
};

export default page;
