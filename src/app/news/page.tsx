"use client";
import React, { useState } from "react";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import News1 from "@/assets/news/news1.jpg";
import News2 from "@/assets/news/news2.jpg";
import News3 from "@/assets/news/news3.jpg";
import News4 from "@/assets/news/news4.jpg";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "@/graphql/news/news";
import ModernLoader from "@/components/ui/ModernLoader";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_DATA ;

const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png"; // Optional fallback
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
};

const NewsHero = () => (
  <section className="relative flex h-[320px] w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#253E5E] to-[#F78019] text-white md:h-[400px]">
    <div className="absolute left-0 top-0 z-20 p-4">
      <Link
        href="/"
        className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/40 hover:text-orange-500"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to group
      </Link>
    </div>
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
    <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold drop-shadow-lg md:text-5xl lg:text-6xl">
          News & Updates
        </h1>
        <p className="mt-4 max-w-2xl text-lg font-medium text-gray-100 md:text-xl">
          Latest insights, announcements, and stories from The i-Capital Africa
          Institute
        </p>
      </motion.div>
    </div>
  </section>
);

const FeaturedNews = ({ article }: { article: any }) => (
  <section className="mx-auto mt-8 max-w-5xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white/80 shadow-2xl backdrop-blur-md md:flex-row">
        <div className="relative h-64 w-full md:h-auto md:w-2/5">
          {article.featuredImage?.url && (
            <Image
              src={getImageUrl(article.featuredImage.url)}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center p-6">
          <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            {article.category?.name}
          </span>
          <h2 className="mb-2 text-2xl font-bold text-[#253E5E] md:text-3xl">
            {article.title}
          </h2>
          <p className="mb-4 text-gray-600">{article.summary}</p>
          <span className="mb-2 text-sm text-gray-400">
            {article.publicationDate
              ? new Date(article.publicationDate).toLocaleDateString()
              : ""}
          </span>
          <Link
            href={`/news/${article.slug}`}
            className="mt-4 w-fit rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-2 font-semibold text-white shadow-md transition hover:scale-105 hover:from-orange-600 hover:to-orange-500"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  </section>
);

const NewsGrid = ({ articles }: { articles: any[] }) => (
  <section className="mx-auto mt-12 max-w-6xl px-4">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article: any, idx: number) => (
        <div
          key={article.slug || idx}
          className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:scale-[1.025] hover:shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
          >
            <div className="flex h-full flex-col">
              <div className="relative h-48 w-full">
                {article.featuredImage?.url && (
                  <Image
                    src={getImageUrl(article.featuredImage.url)}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                  {article.category?.name}
                </span>
                <h3 className="mb-1 text-lg font-bold text-[#253E5E]">
                  {article.title}
                </h3>
                <span className="mb-2 text-xs text-gray-400">
                  {article.publicationDate
                    ? new Date(article.publicationDate).toLocaleDateString()
                    : ""}
                </span>
                <p className="mb-4 line-clamp-3 text-gray-600">
                  {article.summary}
                </p>
                <Link
                  href={`/news/${article.slug}`}
                  className="mt-auto w-fit rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-1.5 text-sm font-semibold text-white shadow transition hover:scale-105 hover:from-orange-600 hover:to-orange-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // Apollo Client: Fetch all articles from Strapi (flat structure)
  const { data, loading, error } = useQuery(GET_ARTICLES);

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading news articles.</div>;

  // Extract articles from response (flat array)
  const articles = data?.articles || [];

  // Dynamically generate categories from articles
  const categoriesSet = new Set<string>();
  articles.forEach((article: any) => {
    if (article.category && article.category.name) {
      categoriesSet.add(article.category.name);
    }
  });
  const categories = ["All", ...Array.from(categoriesSet)];

  // Filter and paginate (frontend only)
  const filtered =
    selectedCategory === "All"
      ? articles
      : articles.filter(
          (n: any) => n.category && n.category.name === selectedCategory,
        );
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  // Featured article: first in the list or the first with isFeatured true
  const featured = filtered.find((n: any) => n.isFeatured) || filtered[0];

  return (
    <main className="min-h-screen bg-gray-50">
      <NewsHero />
      <FeaturedNews article={featured || {}} />
      {/* Category Filters */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat: string) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setPage(1);
              }}
              className={`rounded-full border px-5 py-2 font-semibold transition ${selectedCategory === cat ? "border-orange-400 bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow" : "border-gray-200 bg-white text-[#253E5E] hover:bg-orange-50 hover:text-orange-500"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
      {/* News Grid with extra spacing */}
      <div className="mb-20">
        <NewsGrid articles={paginated} />
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mb-20 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`h-9 w-9 rounded-full border font-bold transition ${page === i + 1 ? "border-orange-400 bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow" : "border-gray-200 bg-white text-[#253E5E] hover:bg-orange-50 hover:text-orange-500"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
      <Footer />
    </main>
  );
}
