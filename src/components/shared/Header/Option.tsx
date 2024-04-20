import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const Option = ({
  label, to, base,
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
        className={`grid rounded-lg px-4 py-1 text-base md:text-xl font-semibold md:px-6 ${active ? "border-accent text-accent" : "border-transparent text-black"} border `}
      >
        {label}
      </div>
    </Link>
  );
};
