import Link from "next/link";
import {
  StyledBackground,
  StyledContent,
  StyledInfo,
  StyledStatus,
  StyledSummitDocument,
  StyledSummitDocuments,
} from "./styles";
import { ActionButton } from "@/components/shared/Button";
import Image from "next/image";

export const SummitDocuments = () => {
  return (
    <StyledSummitDocuments>
      <SummitDocument />
      <SummitDocument />
      <SummitDocument />
      <SummitDocument />
      <SummitDocument />
      <SummitDocument />
      <SummitDocument />
      <SummitDocument />
    </StyledSummitDocuments>
  );
};

const SummitDocument = () => {
  return (
    <Link
      href={
        "/knowledge-sharing/east-africa-finance-summit/documents/123"
      }
    >
      <StyledSummitDocument>
        <StyledBackground>
          <Image src={"/images/summit.png"} alt={""} fill={true} />
          <StyledStatus>Successfully Completed</StyledStatus>
          <h1>May 10, 2022</h1>
        </StyledBackground>
        <StyledContent>
          <h2>The 5th Edition: East Africa Finance Summit</h2>
          <StyledInfo>
            <p>2 Categories</p>
            <span />
            <p>12 Files</p>
          </StyledInfo>

          <ActionButton
            label={"Explore Files"}
            color={"#F07709"}
            border={"#9F4E03"}
            onClick={(): void => {}}
          />
        </StyledContent>
      </StyledSummitDocument>
    </Link>
  );
};
