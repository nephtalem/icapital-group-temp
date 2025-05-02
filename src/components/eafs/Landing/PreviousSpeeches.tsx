"use client";

import { useState } from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

interface SpeechProps {
  name: string;
  role: string;
  videoId: string;
}

const SpeechCard = ({ name, role, videoId }: SpeechProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="flex flex-col">
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
          <div className="relative cursor-pointer" onClick={handlePlayClick}>
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
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110">
                <FaYoutube size={28} />
              </div>
            </div>
          </div>
        )}
      </div>
      <h3 className="mb-1 text-xl font-bold text-[#0A244E]">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
};

const PreviousSpeeches = () => {
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
        <h2 className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          Speeches from Previous Guests
          <br />
          of Honor
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speeches.map((speech, index) => (
            <SpeechCard
              key={index}
              name={speech.name}
              role={speech.role}
              videoId={speech.videoId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousSpeeches;
