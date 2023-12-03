"use client";
import Link from "next/link";
import { Button } from "../buttons/Button";
import { Logo } from "./Logo";
import { Option } from "./Option";
import { usePathname } from "next/navigation";

export const Header = ({
  scrollable,
  options,
}: {
  scrollable?: boolean;

  options: {
    label: string;
    to: string;
    base: string;
  }[];
}) => {
  const pathname = usePathname();
  return (
    <header
      className={`${
        scrollable ? "sticky top-0 " : "relative"
      } z-[100] grid h-max grid-cols-[1fr,max-content] grid-rows-[max-content,max-content] content-center items-center gap-y-5 border-b border-b-border bg-white px-4 md:h-[6rem] md:grid-cols-[max-content,1fr,max-content] md:grid-rows-1 md:px-12`}
    >
      <Logo />
      <div className="col-start-1 col-end-[-1] row-start-2 flex gap-0 justify-self-center md:col-auto md:row-auto md:gap-10">
        {options.map((option, index) => (
          <Option
            key={index}
            label={option.label}
            to={option.to}
            base={option.base}
          />
        ))}
      </div>
      <Link href={`${pathname}/#contact`}>
        <Button label={"Contact Us"} onClick={(): void => {}} />
      </Link>
    </header>
  );
};
