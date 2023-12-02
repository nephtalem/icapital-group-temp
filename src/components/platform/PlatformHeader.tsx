"use client";

import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const PlatformHeader = ({
  upcoming,
  type,
}: {
  upcoming?: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
  type: "EAFS" | "EACMS" | "ECCDA";
}) => {
  return (
    <div className="sticky top-0 z-[100] grid h-[6rem] w-screen grid-cols-[max-content,1fr] items-center border-b border-b-border bg-white px-[3.5rem]">
      <div className="relative h-[4rem] w-[11rem]">
        <Image
          className="object-contain"
          src={"/images/eafs.logo.png"}
          alt={""}
          fill={true}
        />
      </div>
      <div className="flex justify-self-end">
        {type === "ECCDA" ? (
          <>
            {upcoming?.attributes?.enabled ? (
              <Option
                label={`${upcoming.attributes.content?.menuTitle}`}
                to={`/knowledge-sharing/conference-on-human-capital-development-in-africa/upcoming`}
              />
            ) : (
              <></>
            )}
            <Option
              label={"Previous Conferences"}
              to={`/knowledge-sharing/conference-on-human-capital-development-in-africa/previous-conferences`}
            />
            <Option
              label={"Conference Documents"}
              to={`/knowledge-sharing/conference-on-human-capital-development-in-africa/conference-documents`}
            />
          </>
        ) : type === "EACMS" ? (
          <>
            {upcoming?.attributes?.enabled ? (
              <Option
                label={`${upcoming.attributes.content?.menuTitle}`}
                to={`/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/upcoming`}
              />
            ) : (
              <></>
            )}
            <Option
              label={"Previous Summits"}
              to={`/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/previous-summits`}
            />
            <Option
              label={"Summit Documents"}
              to={`/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/summit-documents`}
            />
          </>
        ) : (
          <>
            {upcoming?.attributes?.enabled ? (
              <Option
                label={`${upcoming.attributes.content?.menuTitle}`}
                to={`/knowledge-sharing/east-africa-finance-summit/upcoming`}
              />
            ) : (
              <></>
            )}
            <Option
              label={"Previous Summits"}
              to={`/knowledge-sharing/east-africa-finance-summit/previous-summits`}
            />
            <Option
              label={"Summit Documents"}
              to={`/knowledge-sharing/east-africa-finance-summit/summit-documents`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export const Option = ({ label, to }: { label: string; to: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const active = to === pathname;
  return (
    <Link href={to}>
      <div
        className={`${
          active ? "bg-[rgba(245,128,22,0.1)] text-accent" : "text-black"
        } grid items-center rounded-[1.5rem] px-[.5rem] py-[.6rem] text-center text-[.7rem] font-semibold md:px-[3.5rem] md:text-[1rem]`}
      >
        {label}
      </div>
    </Link>
  );
};
