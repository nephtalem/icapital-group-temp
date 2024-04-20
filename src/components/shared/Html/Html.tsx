"use client";
import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

export const Html = ({
  content,
  style,
  className,
}: {
  content: string;
  className?: string;
  style?: CSSProperties | undefined;
}) => {
  return (
    <div
      style={style}
      className={twMerge("prose", className)}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
