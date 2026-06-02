import WorksTabs from "@/components/Works/WorksTabs";
import Works from "@/components/Works/Works";
import { allWorks, worksSeoConfig } from "@/lib/works";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const seoData = worksSeoConfig[category];

  if (!seoData) return {};

  return {
    title: seoData.metaTitle,
    description: seoData.metaDescr,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.metaTitle,
      description: seoData.metaDescr,
    },
  };
}


const CategoryPage = async ({ params }) => {
  const { category } = await params;
  const seoData = worksSeoConfig[category];


  if (!seoData) {
    notFound();
  }

  const filteredWorks = allWorks.filter((work) => work.category === category);

  return (
    <main className="works-content">
      <h1 className="works-content__title">{seoData.h1}</h1>
      <p className="works-content__descr">{seoData.descr}</p>

      <WorksTabs />
      <Works list={filteredWorks} />
    </main>
  );
};

export default CategoryPage;
