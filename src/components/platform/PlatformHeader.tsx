"use client";

import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Calendar2, Clock, DocumentText1 } from "iconsax-react";

export const PlatformHeader = ({
  upcoming,
  type,
}: {
  upcoming?: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
  type: "EAFS" | "EACMS" | "ECCDA";
}) => {
  return (
    <div className="absolute top-28 z-[100] grid grid-cols-1 items-center justify-items-center justify-self-center rounded-full border border-zinc-500 p-2 ">
      <div className="flex justify-between justify-self-stretch md:justify-self-end">
        {type === "ECCDA" ? (
          <>
            {upcoming?.attributes?.enabled ? (
              <Option
                label={`${upcoming.attributes.content?.menuTitle}`}
                to={`/knowledge-sharing/conference-on-human-capital-development-in-africa/upcoming`}
                icon={<Calendar2 size="24" color="#fff" />}
              />
            ) : (
              <></>
            )}
            <Option
              label={"Previous Conferences"}
              to={`/knowledge-sharing/conference-on-human-capital-development-in-africa/previous-conferences`}
              icon={<Clock size="24" color="#fff" />}
            />
            <Option
              label={"Conference Documents"}
              to={`/knowledge-sharing/conference-on-human-capital-development-in-africa/conference-documents`}
              icon={<DocumentText1 size="24" color="#fff" />}
            />
          </>
        ) : type === "EACMS" ? (
          <>
            {upcoming?.attributes?.enabled ? (
              <Option
                label={`${upcoming.attributes.content?.menuTitle}`}
                to={`/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/upcoming`}
                icon={<Calendar2 size="24" color="#fff" />}
              />
            ) : (
              <></>
            )}
            <Option
              label={"Previous Summits"}
              to={`/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/previous-summits`}
              icon={<Clock size="24" color="#fff" />}
            />
            <Option
              label={"Summit Documents"}
              to={`/knowledge-sharing/east-africa-cement-and-concrete-construction-summit/summit-documents`}
              icon={<DocumentText1 size="24" color="#fff" />}
            />
          </>
        ) : (
          <>
            {upcoming?.attributes?.enabled ? (
              <Option
                label={`${upcoming.attributes.content?.menuTitle}`}
                to={`/knowledge-sharing/east-africa-finance-summit/upcoming`}
                icon={
                  <Calendar2
                    size="24"
                    className={"hidden md:visible"}
                    color="#fff"
                  />
                }
              />
            ) : (
              <></>
            )}
            <Option
              label={"Previous Summits"}
              to={`/knowledge-sharing/east-africa-finance-summit/previous-summits`}
              icon={
                <Clock size="24" className={"hidden md:visible"} color="#fff" />
              }
            />
            <Option
              label={"Summit Documents"}
              to={`/knowledge-sharing/east-africa-finance-summit/summit-documents`}
              icon={
                <DocumentText1
                  size="24"
                  className={"hidden md:visible"}
                  color="#fff"
                />
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export const Option = ({
  label,
  to,
  icon,
}: {
  label: string;
  icon: ReactNode;
  to: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const active = to === pathname;
  return (
    <Link href={to}>
      <div
        className={twMerge(
          ` flex items-center gap-1 rounded-full px-2 py-1 text-center text-xs font-semibold  md:gap-2 md:px-4 md:py-2 md:text-base`,
          active
            ? "bg-accent text-white"
            : pathname.search("/upcoming") !== -1
              ? "text-white"
              : "text-black",
        )}
      >
        {icon}
        <p>{label}</p>
      </div>
    </Link>
  );
};
