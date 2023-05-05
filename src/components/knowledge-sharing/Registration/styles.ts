import { StyledButton } from "@/components/shared/Button/styles";
import { StyledMainText } from "@/components/shared/MainText/styles";
import styled from "@emotion/styled";

export const StyledRegistration = styled.div`
  display: grid;
  justify-items: center;
  padding: 6rem;
  max-width: 74vw;
  justify-self: center;
  h2 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    color: #000000;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  ${StyledMainText} {
    grid-row-gap: 1rem;
    h1 {
      font-size: 2.4rem;
      line-height: 3rem;
    }
  }
`;

export const StyledLogo = styled.div`
  display: grid;
  position: relative;
  height: 20rem;
  width: 20rem;

  img {
    object-fit: contain;
  }
`;

export const StyledDescription = styled.div`
  display: grid;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3rem;
  margin-top: 4rem;
  color: #000000;
  text-align: justify;
`;

export const StyledForm = styled.form`
  display: grid;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  grid-auto-rows: max-content;
  padding: 4rem;
  width: 100%;
  justify-items: center;
  margin-top: 6rem;
  h3 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 4rem;
    color: #000000;
    margin-bottom: 4rem;
  }

  ${StyledButton} {
    margin-top: 6rem;
  }
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 3rem;
`;
export const StyledFormItem = styled.div`
  display: grid;
  width: 100%;
  grid-row-gap: 1rem;
  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    padding: 0 2rem;

    color: #000000;

    span {
      color: #f58016;
    }
  }

  input {
    background: #fafafa;
    border: 1px solid #eeeeee;
    border-radius: 1rem;

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    padding: 2rem;
    outline-color: #f58016;
    ::placeholder {
      color: #666666;
    }
  }
`;

export const StyledPayment = styled.div`
  display: grid;
  border-top: 8px solid #f58016;
  box-shadow: 0px 1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  position: relative;
  margin-top: 6rem;
  padding: 4rem 2rem;
  max-width: 94%;
  h4 {
    background-color: #f58016;
    color: white;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #ffffff;

    position: absolute;
    padding: 1rem 4rem;
    border-radius: 10rem;
    top: -2.4rem;
    left: 2rem;
  }

  select {
    background: #fafafa;
    border: 1px solid #eeeeee;
    border-radius: 1rem;
    padding: 2rem;
    outline-color: #f58016;
  }
`;

export const StyledReceipt = styled.div`
  position: relative;
  height: 20rem;
  width: 100%;
  display: grid;
  margin-top: 4rem;
  cursor: pointer;

  img {
    object-fit: contain;
  }
`;

export const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  gap: 1rem;
  p {
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2rem;
    text-decoration: line-through;
    color: #000000;
  }
  h5 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.5rem;

    color: #f58016;
  }
`;

export const StyledUpload = styled.div`
  display: grid;
  background: #fafafa;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  justify-items: center;
  grid-row-gap: 2rem;
  padding: 2rem;
  margin-top: 4rem;
  height: 20rem;
  grid-auto-rows: max-content;
  align-items: center;
  align-content: center;
  input {
    outline-color: #f58016;
  }
  cursor: pointer;
  svg {
    height: 2rem;
  }
  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;

    color: #666666;
  }
`;

export const StyledPoints = styled.div`
  display: grid;
  margin-top: 6rem;
  grid-auto-rows: max-content;
  grid-row-gap: 2.4rem;
`;

export const StyledPoint = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  grid-column-gap: 2.4rem;
  align-items: center;
  svg {
    width: 2rem;
  }
  p {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #000000;
  }
`;
