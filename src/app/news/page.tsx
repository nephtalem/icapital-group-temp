"use client";
import React, { useState } from "react";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const mockNews = [
  {
    id: 1,
    title: "i-Capital Africa Institute Launches New Leadership Program",
    summary:
      "A new initiative to empower the next generation of African leaders was launched this week, featuring global experts and hands-on workshops.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    date: "2024-06-01",
    category: "Announcements",
    isFeatured: true,
  },
  {
    id: 2,
    title: "East Africa Finance Summit 2024: Key Takeaways",
    summary:
      "Highlights and insights from the 10th annual summit, including keynote speakers and emerging trends in African finance.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-20",
    category: "Events",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Women in Business: Breaking Barriers in 2024",
    summary:
      "Celebrating the achievements of women leaders and entrepreneurs across Africa, and the institute's role in supporting them.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-10",
    category: "Insights",
    isFeatured: false,
  },
  {
    id: 4,
    title: "i-Capital Partners with Global Think Tanks",
    summary:
      "A new partnership will bring world-class research and policy expertise to the region, fostering innovation and growth.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80",
    date: "2024-04-28",
    category: "Announcements",
    isFeatured: false,
  },
];

const categories = [
  "All",
  ...Array.from(new Set(mockNews.map((n) => n.category))),
];

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

const FeaturedNews = ({ article }: { article: (typeof mockNews)[0] }) => (
  <section className="mx-auto mt-8 max-w-5xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white/80 shadow-2xl backdrop-blur-md md:flex-row">
        <div className="relative h-64 w-full md:h-auto md:w-2/5">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6">
          <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            {article.category}
          </span>
          <h2 className="mb-2 text-2xl font-bold text-[#253E5E] md:text-3xl">
            {article.title}
          </h2>
          <p className="mb-4 text-gray-600">{article.summary}</p>
          <span className="mb-2 text-sm text-gray-400">
            {new Date(article.date).toLocaleDateString()}
          </span>
          <button className="mt-4 w-fit rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-2 font-semibold text-white shadow-md transition hover:scale-105 hover:from-orange-600 hover:to-orange-500">
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  </section>
);

const NewsGrid = ({ articles }: { articles: typeof mockNews }) => (
  <section className="mx-auto mt-12 max-w-6xl px-4">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, idx) => (
        <div
          key={article.id}
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
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                  {article.category}
                </span>
                <h3 className="mb-1 text-lg font-bold text-[#253E5E]">
                  {article.title}
                </h3>
                <span className="mb-2 text-xs text-gray-400">
                  {new Date(article.date).toLocaleDateString()}
                </span>
                <p className="mb-4 line-clamp-3 text-gray-600">
                  {article.summary}
                </p>
                <button className="mt-auto w-fit rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-1.5 text-sm font-semibold text-white shadow transition hover:scale-105 hover:from-orange-600 hover:to-orange-500">
                  Read More
                </button>
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

  const featured = mockNews.find((n) => n.isFeatured) || mockNews[0];
  const rest = mockNews.filter((n) => n.id !== featured.id);

  // Filter and paginate
  const filtered =
    selectedCategory === "All"
      ? rest
      : rest.filter((n) => n.category === selectedCategory);
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <main className="min-h-screen bg-gray-50">
      <NewsHero />
      <FeaturedNews article={featured} />
      {/* Category Filters */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
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
