"use client";
import { useState, useEffect } from "react";

export const WorkItem = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / 100;
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="grid w-full auto-rows-max content-center justify-start justify-items-start gap-[.2rem]">
      <span className="text-center text-[2rem] font-bold text-white before:content-['+'] md:text-[3rem]">
        {count}
      </span>
      <p className="text-center text-[1rem] font-medium text-white">{label}</p>
    </div>
  );
};
