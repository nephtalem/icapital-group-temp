"use client";

import { DocumentEntity } from "@/gql/graphql";
import { Category } from "./Category";

export const DocumentsDetail = ({ document }: { document: DocumentEntity }) => {
  return (
    <div className="grid px-4 md:px-[12rem] mt-40 py-[2.4rem]">
      <div className="mb-[5rem] grid justify-items-center justify-self-center">
        <h1 className="text-[1.6rem] font-extrabold text-black">
          {document.attributes?.name}
        </h1>
        <h3 className="text-[1.2rem] font-bold text-black">Documents</h3>
        <span className="mt-[.6rem] h-[.2rem] w-[6rem] bg-accent" />
      </div>
      {document.attributes?.category?.map((category, index) => (
        <Category key={index} category={category!} />
      ))}
    </div>
  );
};
