import { StyledActionButton, StyledButton } from "./styles";
import OpenIcon from "@/assets/icons/open.svg";
export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};
export const ActionButton = ({
  label,
  color,
  border,
  onClick,
}: {
  label: string;
  color: string;
  border: string;
  onClick: () => void;
}) => {
  return (
    <StyledActionButton color={color} border={border} onClick={onClick}>
      {label}
      <OpenIcon />
    </StyledActionButton>
  );
};
