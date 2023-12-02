"use client";
import Image from "next/image";
import { CheckItem } from "./CheckItem";

export const Department = ({
  image, title, items,
}: {
  image: string;
  title: string;
  items: string[];
}) => {
  return (
    <div className="grid rounded-2xl bg-white p-[1.6rem] shadow-md">
      <div className="relative grid h-[7rem] w-full">
        <Image
          className="object-contain object-left"
          src={image}
          alt={""}
          fill={true} />
      </div>
      <h3 className="mt-[2.4rem] text-[2rem] font-bold text-accent">{title}</h3>
      <div className="mt-[2.4rem] grid grid-cols-2 gap-[1rem]">
        {items.map((item, index) => (
          <CheckItem key={item} text={item} />
        ))}
      </div>
    </div>
  );
};
