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
`;

export const StyledLogo = styled.div`
  display: grid;
  height: 38rem;
  width: 100%;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const StyledScrollDown = styled.div`
  position: absolute;
  bottom: 4rem;
  justify-self: center;
  cursor: pointer;
  svg {
    height: 4rem;
  }
`;
