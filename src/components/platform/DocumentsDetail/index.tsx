"use client";

import Image from "next/image";
import {
  StyledCategory,
  StyledDocumentsDetail,
  StyledFile,
  StyledFileIcon,
  StyledTitle,
} from "./styles";
import { ActionButton } from "@/components/shared/Button";
import DownloadIcon from "@/assets/icons/download.svg";
import {
  ComponentCategoryCategory,
  ComponentFileFile,
  DocumentEntity,
} from "@/gql/graphql";
import { FileIcon, defaultStyles } from "react-file-icon";
import Link from "next/link";

export const DocumentsDetail = ({ document }: { document: DocumentEntity }) => {
  return (
    <StyledDocumentsDetail>
      <StyledTitle>
        <h1>{document.attributes?.name}</h1>
        <h3>Documents</h3>
        <span />
      </StyledTitle>
      {document.attributes?.category?.map((category, index) => (
        <Category key={index} category={category!} />
      ))}
    </StyledDocumentsDetail>
  );
};

const Category = ({ category }: { category: ComponentCategoryCategory }) => {
  return (
    <StyledCategory>
      <h3>{category.name}</h3>
      <p>{category.file?.length} Files</p>
      {category.file?.map((file, index) => (
        <File key={index} file={file!} />
      ))}
    </StyledCategory>
  );
};

const File = ({ file }: { file: ComponentFileFile }) => {
  return (
    <StyledFile>
      <StyledFileIcon>
        {/* <FileIcon
          extension={file.content!.data!.attributes!.ext!}
          {...defaultStyles.pdf}
        /> */}
      </StyledFileIcon>
      <p>{file.name}</p>
      <Link
        href={`${process.env.NEXT_PUBLIC_DATA}${file.content!.data!.attributes!
          .url!}`}
        target={"_blank"}
        download
      >
        <ActionButton
          label={"Download"}
          color={"#F07709"}
          border={"#9F4E03"}
          icon={<DownloadIcon />}
          onClick={(): void => {}}
        />
      </Link>
    </StyledFile>
  );
};
