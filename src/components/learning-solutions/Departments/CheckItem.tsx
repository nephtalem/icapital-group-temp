"use client";
import CheckIcon from "@/assets/icons/check.alt.svg";


export const CheckItem = ({ text }: { text: string; }) => {
  return (
    <div className="flex items-center gap-[1.2rem]">
      <CheckIcon className={"h-[1.6rem] w-[1.6rem]"} />
      <p className=".8rem">{text}</p>
    </div>
  );
};
