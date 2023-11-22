import { Footer } from "@/components/shared/Footer";
import { HeaderAlt } from "@/components/shared/Header";
import { StyledContent } from "./styles";

export const Content = ({
  scrollable = true,
  children,
}: {
  scrollable?: boolean;
  children: ReactNode
}) => {
  return (
    <StyledContent scrollable={scrollable}>
      <HeaderAlt />
      {children}
    </StyledContent>
  );
};
