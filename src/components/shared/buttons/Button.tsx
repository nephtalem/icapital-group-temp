export const Button = ({
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
      className="cursor-pointer rounded-lg border-b-4 border-b-accentBorder bg-accent px-6 md:px-10 py-2 md:py-4 text-base md:text-xl font-semibold text-white duration-200 ease-in-out hover:border-b hover:border-b-accent disabled:opacity-50"
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
      className="cursor-pointer rounded-lg border border-b-4 border-accent border-b-accentBorder bg-transparent px-6 md:px-10 py-2 md:py-4 text-base md:text-xl font-semibold text-accent duration-200 ease-in-out hover:border-b hover:border-b-accent disabled:opacity-50"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
