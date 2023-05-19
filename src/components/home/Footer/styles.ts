import { breakingPoints } from "@/styles/breaking.points";
import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  display: flex;
  width: 100vw;
  height: 12rem;
  background-color: black;
  position: relative;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 0 6rem;
  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
  div {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    gap: 0.8rem;
    align-items: center;
    align-content: center;
    a {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 0.4rem;

      svg {
        height: 1.4rem;
      }
    }
  }

  ${breakingPoints.mobile} {
    padding: 0 4vw;
  }
`;
