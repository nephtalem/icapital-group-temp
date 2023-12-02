"use client";
import { AdvisorySolutionsEntity } from "@/gql/graphql";
import { Department } from "./Department";
export const Departments = ({ as }: { as: AdvisorySolutionsEntity }) => {
  return (
    <div className="mx-[2.5rem] my-[3.5rem] grid grid-cols-2 gap-[3rem]">
      {as.attributes?.solution?.map((solution) => (
        <Department
          key={solution?.id}
          image={`${process.env.NEXT_PUBLIC_DATA}${solution?.icon?.data?.attributes?.url}`}
          title={`${solution?.title}`}
          items={solution!.SolutionPoint!.map((point) => point?.point ?? "")}
        />
      ))}
    </div>
  );
};
