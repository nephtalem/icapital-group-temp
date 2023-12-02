"use client";
import { LearningSolutionsEntity } from "@/gql/graphql";
import { Department } from "./Department";
export const Departments = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <div className="mx-[2.5rem] my-[3.5rem] grid grid-cols-3 gap-x-[4rem] gap-y-[2rem]">
      {ls.attributes?.solution?.map((solution) => (
        <Department
          key={solution?.id}
          title={`${solution?.title}`}
          items={solution!.SolutionPoint!.map((point) => point?.point ?? "")}
        />
      ))}
    </div>
  );
};
