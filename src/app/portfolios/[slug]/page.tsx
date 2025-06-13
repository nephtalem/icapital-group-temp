"use client";
import { notFound } from "next/navigation";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import GetStarted from "@/components/Home/GetStarted";
import Link from "next/link";
import Tag from "@/ui/Tag";
import { useQuery } from "@apollo/client";
import {
  GET_PORTFOLIO_BY_SLUG,
  GET_ALL_PORTFOLIOS,
} from "@/graphql/portfolio/portfolio";
import ChallengeSolutionAnimated from "./ChallengeSolutionAnimated";
import ClientCard from "./ClientCard";
import OtherProjects from "./OtherProjects";
import { useParams } from "next/navigation";
import React from "react";

// Helper to get full Strapi media URL
const getStrapiMedia = (url: string) => {
  console.log(url);
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA }${url}`;
};

const PortfolioDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;
  console.log(slug);
  const { data, loading, error } = useQuery(GET_PORTFOLIO_BY_SLUG, {
    variables: { slug },
    skip: !slug,
  });
  const { data: allData } = useQuery(GET_ALL_PORTFOLIOS);
  console.log(allData);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-24 lg:px-16">Loading...</div>
    );
  }

  if (error || !data?.portfolios?.length) {
    notFound();
  }

  const portfolio = data.portfolios[0];

  // Get up to 3 other projects, excluding the current one
  const allPortfolios = allData?.portfolios || [];
  const otherProjects = allPortfolios
    .filter((p: any) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header iconColor="text-black" />
      <div className="container mx-auto px-6 py-24 lg:px-16">
        {/* Client Section - Modernized with Animation and Project Title */}
        <ClientCard
          client={{
            name: portfolio.clientName,
            description: portfolio.clientDescription,
            website: portfolio.clientWebsite,
          }}
          logoImg={
            portfolio.logoImage && getStrapiMedia(portfolio.logoImage.url)
          }
          projectTitle={portfolio.title}
        />

        {/* Challenge & Solution Section */}
        <ChallengeSolutionAnimated
          problem={portfolio.problem}
          problemPoints={portfolio.problemPoint?.map((p: any) => p.point) || []}
          solution={portfolio.solution}
          solutionPoints={
            portfolio.solutionPoint?.map((p: any) => p.point) || []
          }
        />

        {/* Other Projects Section - Now dynamic */}
        <OtherProjects projects={otherProjects} />
      </div>
      <GetStarted />
      <Footer />
    </>
  );
};

export default PortfolioDetail;
