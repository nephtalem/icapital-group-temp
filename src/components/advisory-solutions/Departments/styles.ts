import styled from "@emotion/styled";

export const StyledDepartments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;
  margin: 7rem 5rem;
`;

export const StyledDepartment = styled.div`
  display: grid;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 3.2rem;

  h3 {
    color: #f58016;
    font-size: 3.2rem;
    font-weight: 700;
    margin-top: 4.8rem;
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
  grid-template-columns: 1fr 1fr;
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
`;
