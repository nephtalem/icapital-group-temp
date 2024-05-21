import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const Option = ({
  label,
  to,
  base,
}: {
  label: string;
  to: string;
  base: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const active = base === to ? pathname == to : pathname.search(base) !== -1;
  return (
    <Link href={to}>
      <div
        className={twMerge(
          `grid border-b-2 px-2 py-2 text-base font-semibold  md:px-2 md:text-xl `,
          active
            ? "border-b-accent text-accent"
            : "border-transparent text-black",
          pathname.search("/upcoming") !== -1 && !active ? "text-white" : "",
        )}
      >
        {label}
      </div>
    </Link>
  );
};
