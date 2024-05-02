import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="relative grid h-12 w-32 cursor-pointer md:h-16 md:w-40">
        <Image
          className="object-contain"
          src={"/images/logo.png"}
          alt={""}
          fill={true}
        />
      </div>
    </Link>
  );
};
