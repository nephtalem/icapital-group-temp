"use client";
import { ReactNode } from "react";

export const SponsorsCategoryItem = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="grid gap-y-[1rem]">
      <h3 className="text-center text-xl font-semibold">{title}</h3>
      <div className="flex w-full gap-10 flex-wrap justify-center">{children}</div>
    </div>
  );
};
