"use client";

export const HtmlTitle = ({
  content, className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <div
      className={`htmlTitle text-2xl font-extrabold text-text md:text-4xl ${className ?? ""}`}
      dangerouslySetInnerHTML={{
        __html: content,
      }} />
  );
};
