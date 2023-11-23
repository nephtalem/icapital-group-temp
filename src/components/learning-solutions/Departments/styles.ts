import { Theme } from "@/styles/theme";
import styled from "styled-components";
export const StyledDepartments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8rem 4rem;
  margin: 7rem 5rem;
`;

export const StyledDepartment = styled.div`
  display: grid;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 3.2rem;
  grid-auto-rows: max-content;
  h3 {
    color: ${Theme.colors.accent};
    font-size: 2.4rem;
    font-weight: 700;
  }
  button {
    justify-self: center;
    background-color: transparent;
    color: ${Theme.colors.accent};
    margin-top: 4rem;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const StyledDepartmentImage = styled.div`
  display: grid;
  height: 14rem;
  width: 100%;
  position: relative;
  img {
    object-position: left;
    object-fit: contain;
  }
`;

export const StyledCheckList = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-top: 4.8rem;
`;

export const StyledCheckItem = styled.div`
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  align-items: center;
  gap: 2.4rem;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }
  p {
    font-size: 1.6rem;
  }
`;
