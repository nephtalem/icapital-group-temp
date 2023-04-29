import lodash from "lodash";
import { StyledNav, StyledNavItem, StyledNavWrapper } from "./styles";

export const Nav = ({
  length,
  active,
  onClick,
}: {
  length: number;
  active: number;
  onClick: (index: number) => void;
}) => {
  return (
    <StyledNavWrapper>
      <StyledNav>
        {lodash.range(0, length).map((value) => (
          <StyledNavItem
            key={value}
            active={active == value}
            onClick={() => onClick(value)}
          >
            <span />
          </StyledNavItem>
        ))}
      </StyledNav>
    </StyledNavWrapper>
  );
};
