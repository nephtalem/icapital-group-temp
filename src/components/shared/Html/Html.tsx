"use client";
import { CSSProperties } from "react";

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
      className={`html ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
