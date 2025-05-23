"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SpeechProps {
  name: string;
  role: string;
  videoId: string;
  index: number;
}

const SpeechCard = ({ name, role, videoId, index }: SpeechProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const playButtonVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      className="flex flex-col"
    >
      <div className="relative mb-4 overflow-hidden rounded-lg shadow-md">
        {showVideo ? (
          <iframe
            width="100%"
            height="194"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`${name} Speech`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video"
          ></iframe>
        ) : (
          <motion.div
            variants={imageVariants}
            className="relative cursor-pointer"
            onClick={handlePlayClick}
          >
            {!imageError ? (
              <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`${name} Speech`}
                width={500}
                height={281}
                className="aspect-video h-auto w-full object-cover"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="flex aspect-video items-center justify-center bg-gray-200">
                <FaYoutube size={48} className="text-gray-400" />
              </div>
            )}
            <motion.div
              variants={playButtonVariants}
              whileHover="hover"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110">
                <FaYoutube size={28} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <motion.h3
        variants={cardVariants}
        className="mb-1 text-xl font-bold text-[#0A244E]"
      >
        {name}
      </motion.h3>
      <motion.p variants={cardVariants} className="text-sm text-gray-600">
        {role}
      </motion.p>
    </motion.div>
  );
};

const PreviousSpeeches = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "0px 0px -100px 0px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const speeches = [
    {
      name: "H.E. Mr John Doe",
      role: "Speech from 4th Summit",
      videoId: "Q3hqGwo7kIg",
    },
    {
      name: "H.E. Mr John Doe",
      role: "Speech from 4th Summit",
      videoId: "DulVWEKzrZ8",
    },
    {
      name: "H.E. Mr John Doe",
      role: "Speech from 4th Summit",
      videoId: "nDvP7pAywK4",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl"
        >
          Speeches from Previous Guests
          <br />
          of Honor
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {speeches.map((speech, index) => (
            <SpeechCard
              key={index}
              name={speech.name}
              role={speech.role}
              videoId={speech.videoId}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PreviousSpeeches;
