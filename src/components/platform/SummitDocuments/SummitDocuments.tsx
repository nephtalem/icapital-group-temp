"use client";

import { DocumentEntity } from "@/gql/graphql";
import { SummitDocument } from "./SummitDocument";

export const SummitDocuments = ({
  documents,
}: {
  documents: DocumentEntity[];
}) => {
  return (
    <div className="grid grid-cols-1 gap-[3rem] mt-40 px-[1rem] py-[3.5rem] md:grid-cols-2 md:p-[3.5rem]">
      {documents.map((document, index) => (
        <SummitDocument key={index} document={document} />
      ))}
    </div>
  );
};
