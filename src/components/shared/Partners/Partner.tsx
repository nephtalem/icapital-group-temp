"use client";
import Image from "next/image";
import Link from "next/link";

export const Partner = ({ image, to }: { image: string; to: string; }) => {
  return (
    <Link href={to ?? "/"} target={"_blank"}>
      <div className="relative grid h-52 w-full">
        <Image
          className="object-contain object-left"
          src={image}
          alt={""}
          fill={true} />
      </div>
    </Link>
  );
};
