import { Header } from "../Header";
import { Landing } from "../Landing";
import { StyledHome } from "./styles";

export const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Landing />
    </StyledHome>
  );
};
