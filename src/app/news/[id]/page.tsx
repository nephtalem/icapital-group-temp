"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Home/Footer";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_SLUG } from "@/graphql/news/news";
import ModernLoader from "@/components/ui/ModernLoader";
import React from "react";

const STRAPI_URL = process.env.NEXT_PUBLIC_DATA;
const getImageUrl = (url?: string) => {
  if (!url) return "/fallback-image.png";
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
};

const NewsDetail = () => {
  const params = useParams();
  const slug = params.id as string;

  const { data, loading, error } = useQuery(GET_ARTICLE_BY_SLUG, {
    variables: { slug },
  });

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading article.</div>;

  const article = data?.articles?.[0];
  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Article not found
          </h1>
          <Link
            href="/news"
            className="mt-4 inline-block rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
          >
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full md:h-[500px]">
        {article.featuredImage?.url && (
          <Image
            src={getImageUrl(article.featuredImage.url)}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-0 top-0 z-20 p-4">
          <Link
            href="/news"
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
            Back to News
          </Link>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-block rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold">
                {article.category?.name}
              </span>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <p className="text-lg text-gray-200">
                {article.publicationDate
                  ? new Date(article.publicationDate).toLocaleDateString()
                  : ""}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {Array.isArray(article.content) &&
              article.content.map((block: any, idx: number) => {
                if (block.type === "paragraph") {
                  const text = block.children
                    .map((child: any) => child.text)
                    .join("");
                  if (!text.trim()) return null;
                  return <p key={idx}>{text}</p>;
                }
                if (block.type === "heading") {
                  const text = block.children
                    .map((child: any) => child.text)
                    .join("");
                  const level =
                    block.level && block.level >= 1 && block.level <= 6
                      ? block.level
                      : 2;
                  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
                  return React.createElement(Tag, { key: idx }, text);
                }
                if (block.type === "list") {
                  const isOrdered = block.format === "numbered";
                  const ListTag = isOrdered ? "ol" : "ul";
                  return (
                    <ListTag key={idx}>
                      {block.children.map((item: any, i: number) => (
                        <li key={i}>
                          {item.children
                            .map((child: any) => child.text)
                            .join("")}
                        </li>
                      ))}
                    </ListTag>
                  );
                }
                if (block.type === "blockquote") {
                  const text = block.children
                    .map((child: any) => child.text)
                    .join("");
                  return <blockquote key={idx}>{text}</blockquote>;
                }
                // Add more types as needed
                return null;
              })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NewsDetail;
