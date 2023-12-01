import OpenIcon from "@/assets/icons/open.svg";

export const ActionButton = ({
  label,
  icon,
  color,
  border,
  onClick,
}: {
  label: string;
  icon?: JSX.Element;
  color: string;
  border: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`${color} ${border} flex cursor-pointer content-center items-center justify-center justify-items-center gap-5 rounded-lg border-b-4 px-8 py-4 text-xl text-white `}
      onClick={onClick}
    >
      {label}
      {icon || <OpenIcon />}
    </button>
  );
};
