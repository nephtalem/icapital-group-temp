import { breakingPoints } from "@/styles/breaking.points";
import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  padding: 4rem;
`;

export const StyledDrawerWrapper = styled.div`
  height: 100vh;
  width: 50rem;
  position: fixed;
  top: 0;
  right: -50rem;
  z-index: 100;

  ${breakingPoints.mobile} {
    width: 80vw;
    .cover {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 20vw;
    }
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const StyledSocial = styled.div`
  svg {
    height: 2rem;
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  gap: 4rem;
  h3 {
    font-size: 2.8rem;
    font-weight: 600;
    color: white;
    ${breakingPoints.mobile} {
      display: none;
    }
  }
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    svg {
      width: 6rem;
    }
  }
`;
