"use client";

import { Button } from "@/components/shared/buttons/Button";
import { LearningSolutionsEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";

export const Banner = ({ ls }: { ls: LearningSolutionsEntity }) => {
  return (
    <div className="my-16 grid justify-items-center gap-6 px-4 md:px-12">
      <div className="relative h-[14rem] w-full overflow-hidden rounded-lg shadow-lg md:h-[22rem]">
        <Image
          src={ls.attributes?.LSBanner?.image?.data?.attributes?.url ?? ""}
          alt="Banner"
          className="object-cover"
          fill
        />
      </div>
      {ls.attributes?.LSBanner?.callToAction && (
        <Link href={ls.attributes?.LSBanner?.callToActionLink ?? "#"}>
          <Button
            label={ls.attributes?.LSBanner?.callToAction}
            onClick={function (): void {}}
          />
        </Link>
      )}
    </div>
  );
};
