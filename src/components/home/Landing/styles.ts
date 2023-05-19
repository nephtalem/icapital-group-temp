import { breakingPoints } from "@/styles/breaking.points";
import styled from "@emotion/styled";

export const StyledLanding = styled.div`
  display: grid;
  position: relative;
`;

export const StyledImage = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const StyledCover = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.3;
  position: absolute;
`;

export const StyledContent = styled.div`
  position: absolute;
  align-self: center;
  justify-self: center;

  h1 {
    width: 100%;
    font-weight: 400;
    font-size: 4rem;
    align-content: center;
    color: white;
  }

  ${breakingPoints.mobile} {
    max-width: 90vw;
    h1 {
      font-size: 3rem;
    }
  }
`;

export const StyledLogo = styled.div`
  display: grid;
  height: 40rem;
  width: 100%;
  position: relative;
  img {
    object-fit: contain;
  }

  ${breakingPoints.mobile} {
    height: 28rem;
  }
`;

export const StyledScrollDown = styled.div`
  position: absolute;
  bottom: 5rem;
  justify-self: center;
  cursor: pointer;
  animation-name: scrollDown;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  svg {
    height: 4rem;
  }
`;
