export const MainText = ({
  title,
  align,
}: {
  title: string;
  align?: string;
}) => {
  return (
    <div
      className={`grid justify-items-center gap-y-4 ${
        align ?? "justify-self-center"
      }`}
    >
      <h1 className="text-4xl font-bold text-text md:text-6xl">{title}</h1>
      <span className="h-1 w-2/5 bg-accent" />
    </div>
  );
};
