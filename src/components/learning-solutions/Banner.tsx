"use client";
import { Button } from "@/components/shared/buttons/Button";
import { LearningSolutionsEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <div className="my-[10rem] grid justify-items-center gap-[2.4rem]">
      <div className="relative grid h-[20rem] w-full">
        <Image
          className="object-contain"
          src={`${ls.attributes?.LSBanner?.image?.data?.attributes?.url}`}
          alt=""
          fill
        />
      </div>
      <Link href={`${ls.attributes?.LSBanner?.callToActionLink}`}>
        <Button
          label={`${ls.attributes?.LSBanner?.callToAction}`}
          onClick={function (): void {}}
        />
      </Link>
    </div>
  );
};
