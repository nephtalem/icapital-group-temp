import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  display: grid;
  height: 12rem;
  border-bottom: 1px solid #eee;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  padding: 0 5rem;
`;

export const StyledLogo = styled.div`
  display: grid;
  position: relative;
  width: 16rem;
  height: 8rem;
  cursor: pointer;
  img {
    object-fit: contain;
  }
`;

export const StyledOptions = styled.div`
  display: flex;
  justify-self: center;
  gap: 4rem;
`;

export const StyledOption = styled.div<{
  active: boolean;
}>`
  display: grid;

  font-size: 2rem;
  line-height: 3rem;
  font-weight: 600;
  padding: 0.4rem 2.4rem;
  border-radius: 0.8rem;
  color: ${({ active }) => (active ? "#f58016" : "black")};
  border: 2px solid ${({ active }) => (active ? "#f58016" : "transparent")};
`;
