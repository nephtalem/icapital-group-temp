import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { getPortfolioItemBySlug, portfolioData } from "@/data/portfolioData";
import GetStarted from "@/components/Home/GetStarted";
import Link from "next/link";
import Tag from "@/ui/Tag";

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

  // Filter other projects excluding the current one
  const otherProjects = portfolioData
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-24 lg:px-16">
        {/* Project Header */}
        <div className="">
          <Tag
            title="Project"
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            {portfolio.title}
          </h1>
        </div>

        {/* Client Section */}
        <section className="mt-8">
          <h2 className="text-xl font-bold">The Client</h2>
          <div className="mt-2 flex-col items-center gap-4">
            <Image
              src={portfolio.logoImg || "/placeholder.svg"}
              alt={`${portfolio.client.name} Logo`}
              width={150}
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

        {/* Other Projects Section */}
        <section className="mt-16">
          <h2 className="text-center text-xl font-bold">Other Projects</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolios/${project.slug}`}
                passHref
              >
                <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg " >
                  <Image
                    src={project.cardImg}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <span className="mt-2 inline-block text-orange-500">
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
