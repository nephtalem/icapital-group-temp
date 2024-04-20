import { twMerge } from "tailwind-merge";

export const Button = ({
  label,
  disabled,
  onClick,
  className,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      className={twMerge(
        "cursor-pointer rounded-lg bg-accent px-6 py-2 text-base font-semibold text-white duration-200 ease-in-out hover:opacity-90 disabled:opacity-50 md:px-10 md:py-4 md:text-xl",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const OutlineButton = ({
  label,
  disabled,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className="cursor-pointer rounded-lg border border-accent bg-transparent px-6 py-2 text-base font-semibold text-accent duration-200 ease-in-out hover:opacity-90 disabled:opacity-50 md:px-10 md:py-4 md:text-xl"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
