import Image from "next/image";
import {
  StyledLogo,
  StyledOption,
  StyledOptions,
  StyledPlatformHeader,
} from "./styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { UpcomingEafsEntity } from "@/gql/graphql";

export const PlatformHeader = ({
  upcomingEafs,
}: {
  upcomingEafs?: UpcomingEafsEntity;
}) => {
  return (
    <StyledPlatformHeader>
      <StyledLogo>
        <Image src={"/images/eafs.logo.png"} alt={""} fill={true} />
      </StyledLogo>
      <StyledOptions>
        {upcomingEafs?.attributes?.enabled ? (
          <Option
            label={`${upcomingEafs.attributes.content?.menuTitle}`}
            to={"/knowledge-sharing/east-africa-finance-summit/upcoming"}
          />
        ) : (
          <></>
        )}

        <Option
          label={"Previous Summits"}
          to={"/knowledge-sharing/east-africa-finance-summit/previous-summits"}
        />
        <Option
          label={"Summit Documents"}
          to={"/knowledge-sharing/east-africa-finance-summit/summit-documents"}
        />
      </StyledOptions>
    </StyledPlatformHeader>
  );
};

const Option = ({ label, to }: { label: string; to: string }) => {
  const router = useRouter();
  return (
    <Link href={to}>
      <StyledOption active={to === router.pathname}>{label}</StyledOption>
    </Link>
  );
};
