"use client";
import { Html } from "@/components/shared/Html/Html";
import { Button, OutlineButton } from "@/components/shared/buttons/Button";
import { UpcomingEafsEntity } from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { ReactPlayer } from "./Upcoming";

export const Banner = ({
  upcoming,
  base,
}: {
  upcoming: UpcomingEafsEntity;
  base: string;
}) => {
  return (
    <div className="grid w-screen grid-cols-1 items-start gap-x-10 gap-y-[3rem]  px-[1rem] py-20 md:grid-cols-2 md:px-32">
      <div className="grid auto-rows-max content-center items-center justify-items-start gap-6">
        <h1 className="text-center text-xl font-bold text-black md:text-left md:text-4xl">
          About the summit
        </h1>
        <Html
          className="text-center text-xl font-normal text-text md:text-left"
          content={`${upcoming.attributes?.content?.description}`}
        />
      </div>

      {upcoming.attributes?.guests?.find((g) => g?.honourable) && (
        <div className={"grid"}>
          <div className="relative grid aspect-[4/3] w-full">
            {
              <Image
                src={`${upcoming.attributes?.guests?.find((g) => g?.honourable)?.picture?.data?.attributes?.url}`}
                alt={""}
                fill={true}
                className="overflow-hidden rounded-3xl object-contain"
              />
            }
            <div
              className={
                "absolute bottom-[-24px] grid h-12 items-center justify-center justify-self-center rounded-full bg-accent px-4 text-xl font-semibold text-white"
              }
            >
              Guest of Honor
            </div>
          </div>
          <div className={"mt-12 grid justify-items-center gap-2"}>
            <h3 className={"text-xl font-semibold text-black"}>
              {upcoming.attributes?.guests?.find((g) => g?.honourable)?.name}
            </h3>
            <p className={"text-base text-black"}>
              {
                upcoming.attributes?.guests?.find((g) => g?.honourable)
                  ?.position
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
