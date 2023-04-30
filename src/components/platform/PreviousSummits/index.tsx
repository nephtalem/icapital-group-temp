import { ActionButton } from "@/components/shared/Button";
import Image from "next/image";
import {
  StyledBackground,
  StyledContent,
  StyledPreviousSummit,
  StyledPreviousSummits,
  StyledStatus,
} from "./styles";
import Link from "next/link";

export const PreviousSummits = () => {
  return (
    <StyledPreviousSummits>
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
      <PreviousSummit />
    </StyledPreviousSummits>
  );
};

const PreviousSummit = () => {
  return (
    <Link
      href={
        "http://localhost:3000/knowledge-sharing/east-africa-finance-summit/123"
      }
    >
      <StyledPreviousSummit>
        <StyledBackground>
          <Image src={"/images/summit.png"} alt={""} fill={true} />
          <StyledStatus>Successfully Completed</StyledStatus>
          <h1>May 10, 2022</h1>
        </StyledBackground>
        <StyledContent>
          <h2>The 5th Edition: East Africa Finance Summit</h2>
          <p>
            &quot;Reshaping the Future of Finance Sector in the Age of
            Disruption&quot;
          </p>
          <ActionButton
            label={"Read More"}
            color={"#F07709"}
            border={"#9F4E03"}
            onClick={(): void => {}}
          />
        </StyledContent>
      </StyledPreviousSummit>
    </Link>
  );
};
