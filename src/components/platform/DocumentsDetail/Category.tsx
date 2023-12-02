"use client";
import { ComponentCategoryCategory } from "@/gql/graphql";
import { File } from "./File";

export const Category = ({ category }: { category: ComponentCategoryCategory; }) => {
  return (
    <div className="mb-[2rem] grid">
      <h3 className="text-[1.2rem] font-bold text-black">{category.name}</h3>
      <p className="mb-[1.8rem] mt-[.8rem] text-[1rem] font-medium text-black">
        {category.file?.length} Files
      </p>
      {category.file?.map((file, index) => <File key={index} file={file!} />)}
    </div>
  );
};
