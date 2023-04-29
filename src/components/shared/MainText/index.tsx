import { StyledMainText } from "./styles";

export const MainText = ({ title }: { title: string }) => {
  return (
    <StyledMainText>
      <h1>{title}</h1>
      <span />
    </StyledMainText>
  );
};
