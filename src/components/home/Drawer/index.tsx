import OpenIcon from "@/assets/icons/open.svg";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { StyledDrawer, StyledDrawerItem } from "./styles";
export const Drawer = () => {
  return (
    <StyledDrawer>
      <h1>i-Capital Institute</h1>
      <DrawerItem label={"Who we are"} to={"/about-us"} />
      <DrawerItem label={"Knowledge Sharing Platform"} to={"/knowledge-sharing"} />
      <DrawerItem label={"Advisory Solutions"} to={"/advisory-solutions"} />
      <DrawerItem label={"Learning Solutions"} to={"/learning-solutions"} />
      <DrawerItem label={"Cross Border Solutions"} to={"/cross-border-solutions"} />
      <DrawerItem label={"News & Blogs"} to={"/news-and-blogs"} />
    </StyledDrawer>
  );
};

const DrawerItem = ({ label, to }: { label: string; to: string }) => {
  const item = useRef(null);
  const span = useRef(null);

  return (
    <Link
      href={to}
      ref={item}
      onMouseEnter={() => {
        gsap.fromTo(span.current, { width: 0, left: 0 }, { width: "100%" });
      }}
      onMouseLeave={() => {
        gsap.to(span.current, { width: 0, left: "100%" });
      }}
    >
      <StyledDrawerItem>
        <p>{label}</p>
        <OpenIcon />
        <span ref={span} />
      </StyledDrawerItem>
    </Link>
  );
};
