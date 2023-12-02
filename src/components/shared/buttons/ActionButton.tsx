import OpenIcon from "@/assets/icons/open.svg";
import { ReactNode } from "react";

export const ActionButton = ({
  label,
  icon,
  color,
  border,
  onClick,
}: {
  label: string;
  icon?: ReactNode;
  color: string;
  border: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${color} ${border} grid cursor-pointer grid-cols-[max-content,max-content] content-center items-center justify-center justify-items-center gap-5 rounded-lg border-b-4 px-8 py-4 text-xl text-white hover:border-b-0 
      [&>svg]:h-[1.2rem]  [&>svg]:fill-white
      `}
      onClick={onClick}
    >
      {label}
      {icon || <OpenIcon />}
    </button>
  );
};
