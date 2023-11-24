"use client";

import Link from "next/link";
import {
  StyledBackground,
  StyledContent,
  StyledInfo,
  StyledStatus,
  StyledSummitDocument,
  StyledSummitDocuments,
} from "./styles";
import { ActionButton } from "@/components/shared/Button";
import Image from "next/image";
import { DocumentEntity } from "@/gql/graphql";

export const SummitDocuments = ({
  documents,
}: {
  documents: DocumentEntity[];
}) => {
  return (
    <StyledSummitDocuments>
      {documents.map((document, index) => (
        <SummitDocument key={index} document={document} />
      ))}
    </StyledSummitDocuments>
  );
};

const SummitDocument = ({ document }: { document: DocumentEntity }) => {
  const base: {
    [key: string]: string;
  } = {
    EAFS: "east-africa-finance-summit",
    EACMS: "east-africa-cement-and-concrete-construction-summit",
    ECCDA: "conference-on-human-capital-development-in-africa",
  };
  return (
    <Link
      href={`/knowledge-sharing/${base[document.attributes!.type!]}/documents/${
        document.attributes?.slug
      }`}
    >
      <StyledSummitDocument>
        <StyledBackground>
          <Image
            src={`${process.env.NEXT_PUBLIC_DATA}${document.attributes?.background?.data?.attributes?.url}`}
            alt={""}
            fill={true}
          />
          <StyledStatus>{document.attributes?.status}</StyledStatus>
          <h1>{document.attributes?.date}</h1>
        </StyledBackground>
        <StyledContent>
          <h2>{document.attributes?.name}</h2>
          <StyledInfo>
            <p>{document.attributes?.category?.length} Categories</p>
            <span />
            <p>
              {document
                .attributes!.category!.map((c) => c!.file!.length)
                .reduce((a, c) => a + c, 0)}{" "}
              Files
            </p>
          </StyledInfo>

          <ActionButton
            label={"Explore Files"}
            color={"#F07709"}
            border={"#9F4E03"}
            onClick={(): void => {}}
          />
        </StyledContent>
      </StyledSummitDocument>
    </Link>
  );
};
