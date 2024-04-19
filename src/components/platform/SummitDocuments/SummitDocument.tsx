"use client";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import { DocumentEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export const SummitDocument = ({ document }: { document: DocumentEntity; }) => {
  const base: {
    [key: string]: string;
  } = {
    EAFS: "east-africa-finance-summit",
    EACMS: "east-africa-cement-and-concrete-construction-summit",
    ECCDA: "conference-on-human-capital-development-in-africa",
  };
  return (
    <Link
      href={`/knowledge-sharing/${base[document.attributes!.type!]}/documents/${document.attributes?.slug}`}
    >
      <div className="grid cursor-pointer rounded-lg border-border bg-white pb-[1.6rem]">
        <div className="relative grid h-[20rem] w-full overflow-hidden rounded-lg">
          <Image
            className="object-cover"
            src={`${document.attributes?.background?.data?.attributes?.url}`}
            alt={""}
            fill={true} />
          <div className="absolute right-0 top-0 grid rounded-lg bg-green-500 p-[.5rem] text-white">
            {document.attributes?.status}
          </div>
          <h1 className="absolute self-center justify-self-center text-[2rem] font-bold text-white">
            {document.attributes?.date}
          </h1>
        </div>
        <div className="grid justify-items-center">
          <h2 className="mt-[1.8rem] text-[1.4rem] font-bold text-black">
            {document.attributes?.name}
          </h2>
          <div className="my-[1.3rem] flex items-center justify-center gap-[.8rem]">
            <p className="text-[1rem] font-medium text-black">
              {document.attributes?.category?.length} Categories
            </p>
            <span className="h-[.2rem] w-[.2rem] rounded-full bg-black" />
            <p className="text-[1rem] font-medium text-black">
              {document
                .attributes!.category!.map((c) => c!.file!.length)
                .reduce((a, c) => a + c, 0)}{" "}
              Files
            </p>
          </div>

          <ActionButton
            label={"Explore Files"}
            color={"bg-[#F07709]"}
            border={"border-[#9F4E03]"}
            onClick={(): void => { }} />
        </div>
      </div>
    </Link>
  );
};
