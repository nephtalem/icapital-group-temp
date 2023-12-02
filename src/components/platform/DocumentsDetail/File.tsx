"use client";
import DownloadIcon from "@/assets/icons/download.svg";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { ComponentFileFile } from "@/gql/graphql";
import Link from "next/link";
import { FileIcon, defaultStyles } from "react-file-icon";


export const File = ({ file }: { file: ComponentFileFile; }) => {
  return (
    <div className="mb-[1.2rem] grid grid-cols-[max-content,1fr,max-content] content-center items-center gap-x-[1.8rem] rounded-lg border-border bg-white px-[1.8rem] py-[2.2rem]">
      <div className="relative grid w-[3rem]">
        <FileIcon
          extension={file.content!.data!.attributes!.ext!}
          {...defaultStyles.pdf} />
      </div>
      <p className="mb-[1.8rem] mt-[.8rem] text-[1rem] font-medium text-black">
        {file.name}
      </p>
      <Link
        href={`${process.env.NEXT_PUBLIC_DATA}${file.content!.data!.attributes!
          .url!}`}
        target={"_blank"}
        download
      >
        <ActionButton
          label={"Download"}
          color={"bg-[#F07709]"}
          border={"border-[#9F4E03]"}
          icon={<DownloadIcon />}
          onClick={(): void => { }} />
      </Link>
    </div>
  );
};
