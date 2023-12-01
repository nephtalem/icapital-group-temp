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
      className="cursor-pointer rounded-lg border-b-4 border-b-accentBorder bg-accent px-10 py-4 text-xl font-semibold text-white duration-300 ease-in-out disabled:opacity-50"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
