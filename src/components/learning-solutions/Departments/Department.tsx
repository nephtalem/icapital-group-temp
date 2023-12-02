"use client";
import { useState } from "react";
import { CheckItem } from "./CheckItem";

export const Department = ({ title, items }: { title: string; items: string[]; }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="grid auto-rows-max rounded-[2rem] bg-white p-[1.6rem] shadow-md">
      <h3 className="text-[1.2rem] font-bold text-accent">{title}</h3>
      <div className="mt-[2.4rem] grid gap-[1rem]">
        {items.slice(0, showMore ? undefined : 5).map((item, index) => (
          <CheckItem key={item} text={item} />
        ))}
      </div>
      {items.length > 5 ? (
        <button
          className="mt-[2rem] cursor-pointer justify-self-center text-[.8rem] font-medium text-accent"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
