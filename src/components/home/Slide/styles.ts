import styled from "@emotion/styled";

export const StyledSlide = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const StyledCover = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.3;
  position: absolute;
`;

export const StyledContent = styled.div`
  justify-self: center;
  position: absolute;

  display: grid;
  justify-items: center;
  padding: 0 20rem;

  h2 {
    font-size: 4.8rem;
    color: white;
    font-weight: bold;
    margin-top: 6rem;
  }
  p {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    color: white;
    margin-top: 4rem;
  }

  a {
    font-size: 2rem;
    line-height: 3rem;
    color: white;
    font-weight: 500;
    height: 7.2rem;
    display: flex;
    align-items: center;
    border: 2px solid white;
    padding: 0 3rem;
    margin-top: 10rem;
    cursor: pointer;
  }
`;

export const StyledLogo = styled.div`
  display: grid;
  height: 16rem;
  width: 30rem;
  position: relative;
  margin-top: 10rem;

  img {
    object-fit: contain;
  }
`;
