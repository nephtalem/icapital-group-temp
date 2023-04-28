import { StyledLayout } from "./styles";

export const Layout = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return <StyledLayout>{children}</StyledLayout>;
};
