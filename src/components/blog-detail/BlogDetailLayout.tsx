import { ReactNode } from "react";

export const BlogDetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-[2.5rem] items-start my-[5rem] grid grid-cols-[2fr,1fr] gap-[5rem]">
      {children}
    </div>
  );
};
