import { ReactNode } from "react";

export const BlogDetailLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:mx-[2.5rem] mx-6 items-start my-[5rem] grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-[5rem]">
      {children}
    </div>
  );
};
