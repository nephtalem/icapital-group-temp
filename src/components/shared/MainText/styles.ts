import { breakingPoints } from "@/styles/breaking.points";
import styled from "@emotion/styled";

export const StyledMainText = styled.div`
  display: grid;
  justify-items: center;
  justify-self: center;
  grid-row-gap: 1.6rem;
  h1 {
    font-weight: 700;
    font-size: 6.4rem;
    line-height: 8rem;
    color: #1A2B42;
  }
  span {
    width: 40%;
    height: 4px;
    background: #f58016;
  }

  ${breakingPoints.mobile}{
     h1 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 5rem;
    color: #000000;
  }
  }
`;
