import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { getPortfolioItemBySlug } from "@/data/portfolioData";
import GetStarted from "@/components/Home/GetStarted";

export async function generateStaticParams() {
  const portfolios = await import("@/data/portfolioData").then(
    (mod) => mod.portfolioData,
  );
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

const PortfolioDetail = ({ params }: { params: { slug: string } }) => {
  const portfolio = getPortfolioItemBySlug(params.slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-24 md:px-12 lg:px-24">
        {/* Project Header */}
        <div className="border-l-4 border-orange-400 pl-4">
          <span className="text-sm font-semibold uppercase text-orange-400">
            Project
          </span>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            {portfolio.title}
          </h1>
        </div>

        {/* Client Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold">The Client</h2>
          <div className="mt-2 flex items-center gap-4">
            <Image
              src={portfolio.imagePath || "/placeholder.svg"}
              alt={`${portfolio.client.name} Logo`}
              width={80}
              height={80}
            />
            <div>
              <p className="text-lg font-semibold text-red-600">
                {portfolio.client.name}
              </p>
              <p className="max-w-2xl text-sm text-gray-600">
                {portfolio.client.description}
              </p>
              <a
                href={`https://${portfolio.client.website}`}
                className="text-sm text-orange-500"
              >
                {portfolio.client.website}
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">The Problem</h2>
          <p className="mt-2 text-gray-600">{portfolio.problem}</p>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            {portfolio.problemPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Solution Section */}
        <section className="mt-12">
          <h2 className="text-xl font-bold">The Solution</h2>
          <h3 className="mt-2 text-lg font-semibold">What We Did</h3>
          <p className="mt-2 text-gray-600">{portfolio.solution}</p>
          <ul className="mt-4 list-disc pl-6 text-gray-600">
            {portfolio.solutionPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
