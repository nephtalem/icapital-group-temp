import Image from "next/image";
import {
  StyledLogo,
  StyledOption,
  StyledOptions,
  StyledPlatformHeader,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  UpcomingChcdaEntity,
  UpcomingEacmsEntity,
  UpcomingEafsEntity,
} from "@/gql/graphql";

export const PlatformHeader = ({
  upcoming,
  type,
}: {
  upcoming?: UpcomingEafsEntity | UpcomingEacmsEntity | UpcomingChcdaEntity;
  type: "EAFS" | "EACMS" | "ECCDA";
}) => {
  return (
    <StyledPlatformHeader>
      <StyledLogo>
        <Image src={"/images/eafs.logo.png"} alt={""} fill={true} />
      </StyledLogo>
      <StyledOptions>
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
      </StyledOptions>
    </StyledPlatformHeader>
  );
};

export const Option = ({ label, to }: { label: string; to: string }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <StyledOption active={to === router.pathname}>{label}</StyledOption>
    </Link>
  );
};
