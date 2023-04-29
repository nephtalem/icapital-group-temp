import { Header } from "@/components/shared/Header";
import { StyledContent } from "./styles";
import { Footer } from "@/components/shared/Footer";

export const Content = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <StyledContent>
      <Header
        options={[
          {
            label: "Home",
            to: "/knowledge-sharing",
          },
          {
            label: "EAFS",
            to: "/knowledge-sharing/east-africa-finance-summit",
          },

          {
            label: "EACMS",
            to: "/knowledge-sharing/east-africa-cement-and-concrete-construction-summit",
          },
          {
            label: "CHCDA",
            to: "/knowledge-sharing/conference-on-human-capital-development-in-africa",
          },
        ]}
      />
      {children}
      <Footer />
    </StyledContent>
  );
};
