import MenuIcon from "@/assets/icons/menu.svg";
import { Drawer } from "@/components/home/Drawer";
import gsap from "gsap";
import { useRef } from "react";
import { Logo } from "./Logo";

export const HeaderAlt = () => {
  const drawer = useRef(null);

  return (
    <>
      <header className="sticky top-0 z-[100] flex h-32 items-center justify-between border-b border-b-border bg-white px-[2.5rem]">
        <Logo />

        <div className="flex gap-10">
          <button
            onMouseOver={() => {
              gsap.to(drawer.current, { right: 0 });
            }}
            className="cursor-pointer"
          >
            <MenuIcon className={"w-16 fill-background"} />
          </button>
        </div>
      </header>
      <div
        className="fixed right-[-100vw] top-0 z-[100] h-screen w-10/12 md:w-[25rem]"
        ref={drawer}
        onMouseLeave={() => {
          gsap.to(drawer.current, { right: "-50rem" });
        }}
      >
        <Drawer />
        <div
          className="fixed left-0 right-0 h-screen w-2/12"
          onClick={() => {
            gsap.to(drawer.current, { right: "-50rem" });
          }}
        />
      </div>
    </>
  );
};
