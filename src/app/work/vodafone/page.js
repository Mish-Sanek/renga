import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorksHalfGallery from "@/components/Works/WorksHalfGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";
import WorksTrippleGallerySmall from "@/components/Works/WorksTrippleGallerySmall/WorksTrippleGallerySmall";
import React from "react";

const descriptionData = {
  hiddenTitle: "vodafone renua",
  listsData: [
    {
      label: "Services",
      list: [
        "Campaign Design",
        "Motion Design",
        "Illustration",
        "Art Direction",
      ],
    },
    {
      label: "Industry",
      list: ["Telecommunications"],
    },
    {
      label: "Date",
      list: ["2024"],
    },
  ],
  textData: [
    "A scalable visual campaign system.",
    "Vodafone needed a more expressive and adaptable visual direction across digital campaigns and communication assets.",
    "We created a flexible system designed to move seamlessly across outdoor placements, motion, social media and product communication.",
  ],
};

const galleryItems1 = [
  { src: "/img/works/vodafone/gallery1-1.jpg", poster: null },
  { src: "/img/works/vodafone/gallery1-2.jpg", poster: null },
  { src: "", poster: "/img/works/vodafone/gallery1-3poster.jpg" },
];

const galleryItem2 = {src: "/img/works/vodafone/gallery2.jpg", poster: null}

const galleryItems3 = [
  { src: "/img/works/vodafone/gallery3-1.jpg", poster: null },
  { src: "", poster: "/img/works/vodafone/gallery3-2poster.jpg" },
  { src: "/img/works/vodafone/gallery3-3.png", poster: null },
];

const galleryItem4 = {src: "/img/works/vodafone/gallery4.jpg", poster: null}

const galleryItem5 = {src: "/img/works/vodafone/gallery5.jpg", poster: null}

const galleryItem6 = {src: "/img/works/vodafone/gallery6.svg", poster: null}

const galleryItems7 = [
  { src: "/img/works/vodafone/gallery7-1.jpg", poster: null },
  { src: "/img/works/vodafone/gallery7-2.jpg", poster: null },
  { src: "/img/works/vodafone/gallery7-3.jpg", poster: null },
]

const galleryItem8 = {src: "/img/works/vodafone/gallery8.jpg", poster: null}

const galleryItem9 = {src: "", poster: "/img/works/vodafone/gallery9poster.jpg"}

const galleryItem10 = {src: "/img/works/vodafone/gallery10.jpg", poster: null}

const galleryItems11 = [
  { src: "/img/works/vodafone/gallery11-1.jpg", poster: null },
  { src: "", poster: "/img/works/vodafone/gallery11-2poster.jpg" },
  { src: "", poster: "/img/works/vodafone/gallery11-3poster.jpg" },
]

const galleryItems12 = [
  { src: "", poster: "/img/works/vodafone/gallery12-1poster.jpg" },
  { src: "/img/works/vodafone/gallery12-2.jpg", poster: null },
  { src: "/img/works/vodafone/gallery12-3.jpg", poster: null },
]

const galleryItems13 = [
  { src: "/img/works/vodafone/gallery13-1.jpg", poster: null },
  { src: "/img/works/vodafone/gallery13-2.jpg", poster: null },
  { src: "", poster: "/img/works/vodafone/gallery13-3poster.jpg" },
]

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Vodafone"}
        descr={
          "Creating a flexible campaign system for a global telecommunications brand."
        }
        posterUrl={"/img/works/vodafone/hero-poster.jpg"}
        videoUrl={null}
      />

      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} isReversed={true} />
        <WorkInsight
          title={`Illustration at the center.`}
          descr={`A custom illustration language became the foundation of the campaign ecosystem — bringing more personality, movement and recognisability to the brand experience.`}
        />
        <WorkSingleMedia item={galleryItem2} />
        <WorkInsight
          title={`Motion across platforms.`}
          descr={`We developed a series of animated assets and motion-driven compositions designed for digital campaigns, product launches and large-scale media placements.`}
        />
        <WorksTrippleGallerySmall items={galleryItems3} />
        <WorksHalfGallery item={galleryItem4} />
        <WorkSingleMedia item={galleryItem5} />
        <WorkSingleMedia item={galleryItem6} />
        <WorkInsight
          title={`Built for digital communication.`}
          descr={`From typography systems to modular layouts, the visual direction was designed to stay clear, scalable and highly adaptable across formats.`}
        />
        <WorksTrippleGallery items={galleryItems7}  isReversed={true} />
        <WorkSingleMedia item={galleryItem8} />
        <WorkSingleMedia item={galleryItem9} />
        <WorkSingleMedia item={galleryItem10} />
        <WorkInsight
          title={`A more dynamic brand experience.`}
          descr={`The final system combined illustration, motion and campaign design into a unified visual language built for contemporary communication.`}
        />
        <WorksTrippleGallery items={galleryItems11}  isReversed={true} />
        <WorksTrippleGallery items={galleryItems12}  isReversed={true} />
        <WorkInsight
          title={`Simplifying financial interaction.`}
          descr={`The product experience focused on accessibility, hierarchy and speed — helping users navigate complex financial tools more intuitively.`}
        />
        <WorksTrippleGallery items={galleryItems13} />
        <LastProjects />
      </WorksContent>
    </main>
  );
};

export default page;
