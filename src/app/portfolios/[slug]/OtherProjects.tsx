"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const getStrapiMedia = (url: string) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_DATA || "http://localhost:1337"}${url}`;
};

export default function OtherProjects({ projects }: { projects: any[] }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center text-xl font-bold"
      >
        Other Projects
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={cardVariants}
            whileHover={{
              scale: 1.035,
              y: -6,
              boxShadow: "0 8px 32px 0 rgba(247, 128, 25, 0.10)",
              transition: { duration: 0.25 },
            }}
            className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <Link href={`/portfolios/${project.slug}`} passHref>
              <div>
                <Image
                  src={getStrapiMedia(project.cardImage?.url)}
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
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
