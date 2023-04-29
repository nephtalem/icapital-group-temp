import Image from "next/image";
import {
  StyledContent,
  StyledLanding,
  StyledLogo,
  StyledQuote,
} from "./styles";

export const Landing = () => {
  return (
    <StyledLanding>
      <StyledContent>
        <h1>Knowledge</h1>
        <h2>sharing platform</h2>
        <p>
          Our Knowledge Sharing Platforms are designed to provide opportunities
          for local, regional and global key players of selected industries of
          various scopes to come together and discuss challenges, share
          experiences, network and match make for sustainable business
          relationships. The platforms are usually organized in the form of
          summits, conferences, forums and other forms at national, regional and
          continental levels.
        </p>
        <StyledQuote>
          <span />
          <h3>
            “If you have knowledge, let others light their candles in it.“
          </h3>
          <h5>Margaret Fuller</h5>
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
