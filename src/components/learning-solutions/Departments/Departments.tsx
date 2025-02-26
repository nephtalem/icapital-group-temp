"use client";

import { LearningSolutionsEntity } from "@/gql/graphql";
import { Department } from "./Department";

export const Departments = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <div className="mx-auto my-12 grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-12 lg:grid-cols-3">
      {ls.attributes?.solution?.map((solution) => (
        <Department
          key={solution?.id}
          title={solution?.title ?? ""}
          items={
            solution?.SolutionPoint?.map((point) => point?.point ?? "") ?? []
          }
        />
      ))}
    </div>
  );
};
