"use client";
import { ActionButton } from "@/components/shared/buttons/ActionButton";
import Link from "next/link";


export const Action = ({
  title, action, bg, border, to,
}: {
  title: string;
  action: string;
  bg: string;
  border: string;
  to: string;
}) => {
  return (
    <div className="grid w-full justify-center justify-items-center gap-[1.2rem]">
      <h6 className="text-[1.2rem] font-semibold text-text">{title}</h6>
      <Link href={to}>
        <ActionButton
          label={action}
          onClick={(): void => { }}
          color={bg}
          border={border} />
      </Link>
    </div>
  );
};
