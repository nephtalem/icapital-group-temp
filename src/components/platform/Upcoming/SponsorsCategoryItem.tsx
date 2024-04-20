"use client";
import { ReactNode } from "react";


export const SponsorsCategoryItem = ({
  children, title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="grid gap-y-[1rem]">
      <h3 className="text-2xl font-semibold text-center">{title}</h3>
      <div className="flex w-full justify-between">{children}</div>
    </div>
  );
};
