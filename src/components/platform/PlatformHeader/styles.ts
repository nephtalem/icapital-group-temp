import styled from "@emotion/styled";

export const StyledPlatformHeader = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  background: #ffffff;
  border-bottom: 10px solid #f58016;
  width: 100vw;
  height: 12rem;
  padding: 0 7rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StyledLogo = styled.div`
  position: relative;
  height: 8rem;
  width: 22rem;

  img {
    object-fit: contain;
  }
`;

export const StyledOptions = styled.div`
  display: flex;
  justify-self: right;
`;

export const StyledOption = styled.div<{
  active: boolean;
}>`
  display: grid;
  font-weight: 600;
  font-size: 2rem;
  line-height: 3rem;

  display: flex;
  align-items: center;
  text-align: center;
  padding: 1.2rem 7rem;
  border-radius: 3rem;
  color: ${({ active }) => (active ? "#f58016" : "black")};
  background-color: ${({ active }) =>
    active ? "rgba(245, 128, 22, 0.1)" : "white"};
`;
