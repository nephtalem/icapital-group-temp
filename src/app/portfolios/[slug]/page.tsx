import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { getPortfolioItemBySlug, portfolioData } from "@/data/portfolioData";
import GetStarted from "@/components/Home/GetStarted";
import Link from "next/link";
import Tag from "@/ui/Tag";
import { PageProps } from "next";
import ChallengeSolutionAnimated from "./ChallengeSolutionAnimated";
import ClientCard from "./ClientCard";
import OtherProjects from "./OtherProjects";

export async function generateStaticParams() {
  const portfolios = await import("@/data/portfolioData").then(
    (mod) => mod.portfolioData,
  );
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

export default async function PortfolioDetail({ params }: PageProps) {
  const awaitedParams = await params;
  const portfolio = getPortfolioItemBySlug(awaitedParams.slug as string);

  if (!portfolio) {
    notFound();
  }

  // Filter other projects excluding the current one
  const otherProjects = portfolioData
    .filter((p) => p.slug !== (awaitedParams.slug as string))
    .slice(0, 3);

  return (
    <>
      <Header iconColor="text-black" />
      <div className="container mx-auto px-6 py-24 lg:px-16">
        {/* Client Section - Modernized with Animation and Project Title */}
        <ClientCard
          client={portfolio.client}
          logoImg={portfolio.logoImg}
          projectTitle={portfolio.title}
        />

        {/* Challenge & Solution Section */}
        <ChallengeSolutionAnimated
          problem={portfolio.problem}
          problemPoints={portfolio.problemPoints}
          solution={portfolio.solution}
          solutionPoints={portfolio.solutionPoints}
        />

        {/* Other Projects Section - Animated */}
        <OtherProjects projects={otherProjects} />
      </div>
      <GetStarted />
      <Footer />
    </>
  );
}
