import styled from "@emotion/styled";
import { breakingPoints } from "@/styles/breaking.points";

export const StyledSocials = styled.div`
  display: grid;
  grid-row-gap: 8rem;
  margin: 8rem 0;
  p {
    justify-self: center;
    color: #1a2b42;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 3rem;
  }
`;

export const StyledSocialsList = styled.div`
  display: flex;
  justify-self: center;
  gap: 4rem;
`;

export const StyledSocial = styled.div`
  svg {
    height: 4rem;
    path {
      fill: #243b7e;
    }
  }

  ${breakingPoints.mobile} {
    svg {
      height: 3rem;
    }
  }
`;
