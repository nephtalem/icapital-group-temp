import { Header } from "@/components/shared/Header";
import { StyledContent } from "./styles";
import { Footer } from "@/components/shared/Footer";

export const Content = ({
  scrollable = true,
  upcomingEafs,
  children,
}: {
  scrollable?: boolean;
  upcomingEafs: boolean;
  children: JSX.Element[] | JSX.Element;
}) => {
  return (
    <StyledContent scrollable={scrollable}>
      <Header
        options={[
          {
            label: "Home",
            to: "/knowledge-sharing",
          },
          {
            label: "EAFS",
            to: `/knowledge-sharing/east-africa-finance-summit/${
              upcomingEafs ? "upcoming" : "previous-summits"
            }`,
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
