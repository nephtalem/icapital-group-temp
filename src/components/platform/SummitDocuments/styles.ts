import styled from "@emotion/styled";

export const StyledSummitDocuments = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;
  padding: 7rem;
`;

export const StyledSummitDocument = styled.div`
  display: grid;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  padding-bottom: 3.2rem;
  cursor: pointer;
`;
export const StyledBackground = styled.div`
  height: 40rem;
  width: 100%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  img {
    object-fit: cover;
  }

  h1 {
    position: absolute;
    justify-self: center;
    align-self: center;

    font-weight: 700;
    font-size: 4rem;
    line-height: 5rem;

    color: #ffffff;
  }
`;

export const StyledStatus = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: grid;
  background: #00b823;
  border-radius: 2px 1rem;

  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 1rem;

  color: #ffffff;
`;

export const StyledContent = styled.div`
  display: grid;
  justify-items: center;

  h2 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.5rem;
    color: #000000;
    margin-top: 3.6rem;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  margin: 2.6rem 0;
  p {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #000000;
  }
  span {
    height: 0.4rem;
    width: 0.4rem;
    background-color: black;
    border-radius: 50%;
  }
`;
