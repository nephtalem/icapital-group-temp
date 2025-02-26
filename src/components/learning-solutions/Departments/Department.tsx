"use client";

import { useState } from "react";
import { CheckItem } from "./CheckItem";

export const Department = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
      <h3 className="text-lg font-bold text-accent">{title}</h3>
      <div className="mt-4 grid gap-2">
        {items.slice(0, showMore ? items.length : 5).map((item) => (
          <CheckItem key={item} text={item} />
        ))}
      </div>
      {items.length > 5 && (
        <button
          className="mt-4 w-full text-center text-sm font-medium text-accent hover:underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};
