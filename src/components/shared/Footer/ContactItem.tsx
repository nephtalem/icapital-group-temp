import { ReactNode } from "react";

export const ContactItem = ({
  icon, label,
}: {
  label: string;
  icon: (style: string) => ReactNode;
}) => {
  return (
    <div className="flex items-center gap-5">
      {icon("h-4 w-4")}
      <h4 className="text-sm text-white">{label}</h4>
    </div>
  );
};
