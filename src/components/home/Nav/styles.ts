import styled from "@emotion/styled";

export const StyledNavWrapper = styled.div`
  position: fixed;
  display: grid;
  height: 100vh;
  width: 4rem;
  top: 0;
  right: 2rem;
  z-index: 100;
`;
export const StyledNav = styled.div`
  display: grid;
  border-radius: 10rem;
  border: 2px solid white;
  align-self: center;
  padding: 2.8rem 1rem;
  grid-row-gap: 3.2rem;
`;

export const StyledNavItem = styled.div<{ active: boolean }>`
  height: 1.6rem;
  width: 1.6rem;
  cursor: pointer;

  span {
    display: grid;
    border: 2px solid white;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? "transparent" : "white")};
    transition: all 0.3s ease-in-out;
  }
  :hover {
    span {
      transform: scale(${({ active }) => (active ? 1 : 0.7)});
    }
  }
`;
