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

export const StyledDrawerWrapper = styled.header`
  height: 100vh;
  width: 50rem;
  position: fixed;
  top: 0;
  right: -50rem;
  z-index: 100;
  
`;

export const StyledSocials = styled.header`
  display: flex;
  gap: 3.2rem;
`;

export const StyledSocial = styled.header`
  svg {
    height: 2rem;
  }
`;

export const StyledMenu = styled.header`
  display: flex;
  gap: 4rem;
  h3 {
    font-size: 2.8rem;
    font-weight: 600;
    color: white;
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
