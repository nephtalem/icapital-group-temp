import Link from "next/link";

export const FooterLink = ({
  main, links,
}: {
  main: {
    label: string;
    to: string;
  };
  links: {
    label: string;
    to: string;
  }[];
}) => {
  return (
    <div className="grid gap-8">
      <Link href={main.to}>
        <h3 className="mb-2 text-xl font-bold text-white hover:underline">
          {main.label}
        </h3>
      </Link>
      {links.map((link, index) => (
        <Link key={index} href={link.to}>
          <p className="text-base text-white hover:underline">{link.label}</p>
        </Link>
      ))}
    </div>
  );
};
