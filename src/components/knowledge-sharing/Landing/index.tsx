import Image from "next/image";
import {
  StyledContent,
  StyledLanding,
  StyledLogo,
  StyledQuote,
} from "./styles";
import { KnowledgeSharingEntity } from "@/gql/graphql";

export const Landing = ({
  knowledgeSharing,
}: {
  knowledgeSharing: KnowledgeSharingEntity;
}) => {
  return (
    <StyledLanding>
      <StyledContent>
        <h1>Knowledge</h1>
        <h2>sharing platform</h2>
        <p>{knowledgeSharing.attributes?.intro}</p>
        <StyledQuote>
          <span />
          <h3>“{knowledgeSharing.attributes?.quote}“</h3>
          <h5>{knowledgeSharing.attributes?.quoteAuthor}</h5>
        </StyledQuote>
      </StyledContent>
      <StyledLogo>
        <Image
          src={"/images/grey.logo.png"}
          quality={100}
          fill={true}
          alt={""}
          priority
        />
      </StyledLogo>
    </StyledLanding>
  );
};
