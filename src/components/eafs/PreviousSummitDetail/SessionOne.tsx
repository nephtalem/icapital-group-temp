"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { PreviousSummit } from "@/data/previousSummits";

interface SessionOneProps {
  summit: PreviousSummit;
}

const SessionOne = ({ summit }: SessionOneProps) => {
  const session = summit.sessionOne;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  if (!session) return null;

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-4 text-center text-3xl font-bold text-[#253E5E] md:text-4xl"
        >
          Session One
        </motion.h2>
        <motion.p
          variants={descVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto mb-10 max-w-3xl text-center text-base text-gray-700 md:text-lg"
        >
          {session.description}
        </motion.p>
        {/* Presentation Subsection */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xl font-bold text-[#253E5E] md:text-2xl">
            Presentation
          </span>
          <span className="h-2 w-12 rounded bg-[#F78019]"></span>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {session.presentations.map((presentation, i) => (
            <motion.div
              key={presentation.videoId + i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              className="flex flex-col items-center"
            >
              <div className="relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md">
                {playingIndex === i ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${presentation.videoId}?autoplay=1`}
                    title={`Session One Presentation Video ${i + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute left-0 top-0 h-full w-full"
                  ></iframe>
                ) : (
                  <div
                    className="relative h-full w-full"
                    onClick={() => setPlayingIndex(i)}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${presentation.videoId}/maxresdefault.jpg`}
                      alt={`Session One Presentation Video ${i + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform hover:scale-110">
                        <FaYoutube size={28} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center text-base text-gray-700 md:text-lg">
                {presentation.caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionOne;
