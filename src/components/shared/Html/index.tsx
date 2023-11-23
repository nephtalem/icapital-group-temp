"use client"
import { CSSProperties } from "react";
import { StyledHtml, StyledHtmlTitle } from "./styles";

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
    <StyledHtml
      style={style}
      className={`html ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export const HtmlTitle = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <StyledHtmlTitle
      className={`htmlTitle ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};
