"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export const Word = ({ title, words }: { title: string; words: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="mx-[2rem] grid justify-items-start gap-x-[.8rem] md:mx-[6rem]">
      <h3 className="text-[1.6rem] font-bold text-text md:text-[2rem]">
        {title}
      </h3>
      <div className="text-[1.2rem] font-medium text-text md:text-[1.6rem]">
        <TextTransition springConfig={presets.wobbly}>
          {words[index % words.length]}
        </TextTransition>
      </div>
    </div>
  );
};
