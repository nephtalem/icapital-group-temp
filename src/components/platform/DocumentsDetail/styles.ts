import styled from "@emotion/styled";

export const StyledDocumentsDetail = styled.div`
  display: grid;
  padding: 4.8rem 24rem;
`;

export const StyledTitle = styled.div`
  display: grid;
  justify-items: center;
  justify-self: center;
  margin-bottom: 10rem;
  h1 {
    font-weight: 800;
    font-size: 3.2rem;
    line-height: 4rem;
    color: #000000;
  }

  h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #000000;
    margin-top: 4rem;
  }
  span {
    width: 13rem;
    height: 0.4rem;
    background: #f58016;
    margin-top: 1.2rem;
  }
`;

export const StyledCategory = styled.div`
  display: grid;
  margin-bottom: 4rem;

  h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;
    color: #000000;
  }
  p {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #000000;
    margin-top: 1.6rem;
    margin-bottom: 3.6rem;
  }
`;

export const StyledFile = styled.div`
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  padding: 4.4rem 3.6rem;
  margin-bottom: 2.4rem;
  display: grid;
  grid-column-gap: 3.6rem;
  align-items: center;
  grid-template-columns: max-content 1fr max-content;
`;

export const StyledFileIcon = styled.div`
  display: grid;
  position: relative;
  height: 6rem;
  width: 6rem;
  img {
    object-fit: contain;
  }
`;
