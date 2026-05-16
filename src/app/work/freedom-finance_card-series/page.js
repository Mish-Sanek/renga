import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorksDoubleGallery from "@/components/Works/WorksDoubleGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";

const descriptionData = {
  hiddenTitle: "freedom finance card series renua",

  listsData: [
    {
      label: "Services",
      list: ["Art Direction", "3D Design", "Motion Design", "Visual Identity"],
    },
    {
      label: "Industry",
      list: ["Fintech"],
    },
    {
      label: "Recognition",
      list: ["Behance Featured"],
    },
  ],
  textData: [
    "Reimagining the physical banking experience.",
    "The project explored how financial products could feel more tactile, cinematic and emotionally connected through material, motion and visual storytelling.",
  ],
};

const galleryItems1 = [
  { src: "", poster: "/img/works/freedom-finance-cards/gallery1-1poster.jpg" },
  { src: "/img/works/freedom-finance-cards/gallery1-2.jpg", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery1-3.jpg", poster: null },
];

const galleryItems2 = [
  { src: "", poster: "/img/works/freedom-finance-cards/gallery2-1poster.jpg" },
  { src: "/img/works/freedom-finance-cards/gallery2-2.jpg", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery2-3.jpg", poster: null },
];

const galleryItem3 = {
  src: "",
  poster: "/img/works/freedom-finance-cards/gallery3-poster.jpg",
};

const galleryItems4 = [
  { src: "/img/works/freedom-finance-cards/gallery4-1.jpg", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery4-2.jpg", poster: null },
  { src: "", poster: "/img/works/freedom-finance-cards/gallery4-3poster.jpg" },
];

const galleryItems5 = [
  { src: "/img/works/freedom-finance-cards/gallery5-1.jpg", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery5-2.jpg", poster: null },
  { src: "", poster: "/img/works/freedom-finance-cards/gallery5-3poster.jpg" },
];

const galleryItems6 = [
  { src: "/img/works/freedom-finance-cards/gallery6-1.jpg", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery6-2.jpg", poster: null },
];

const galleryItem7 = {
  src: "",
  poster: "/img/works/freedom-finance-cards/gallery7-poster.jpg",
};

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Freedom Finance Bank — Card Series"}
        descr={
          "A conceptual card series exploring the intersection of finance, identity and product aesthetics"
        }
        posterUrl={"/img/works/freedom-finance-cards/hero-poster.jpg"}
        videoUrl={null}
      />

      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} />
        <WorkInsight
          title={"Built around product aesthetics."}
          descr={`We developed a series of card concepts combining industrial surfaces, motion-driven compositions and minimal visual systems.Each object was designed to feel premium, futuristic and digitally native.`}
        />
        <WorksTrippleGallery items={galleryItems2} />
        <WorkSingleMedia item={galleryItem3} />
        <WorkInsight
          title={"Exploring material and motion."}
          descr={`Light, texture and movement became central elements of the visual language — transforming static financial objects into dynamic product experiences.`}
        />
        <WorksTrippleGallery items={galleryItems4} isReversed={true} />
        <WorkInsight
          title={"A cinematic visual direction."}
          descr={`The system extended across still compositions, motion studies and experimental product renders designed for digital campaigns and brand storytelling.`}
        />
        <WorksTrippleGallery items={galleryItems5} isReversed={true} />
        <WorksDoubleGallery items={galleryItems6} />
        <WorkInsight
          title={"Finance through a future-facing lens. The final series blended"}
          descr={`industrial design aesthetics, motion and visual experimentation into a more expressive interpretation of modern financial products.`}
        />
        <WorkSingleMedia item={galleryItem7} />
        <LastProjects />
      </WorksContent>
    </main>
  );
};

export default page;
