import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="relative grid h-20 w-32 cursor-pointer md:w-40">
        <Image
          className="object-contain"
          src={"/images/logo.png"}
          alt={""}
          fill={true} />
      </div>
    </Link>
  );
};
