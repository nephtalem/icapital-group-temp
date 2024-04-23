"use client";
import Image from "next/image";
import Link from "next/link";

export const Sponsor = ({
  image,
  to,
  width,
  height,
}: {
  image: string;
  to: string;
  width: number;
  height: number;
}) => {
  return (
    <Link href={to} target={"_blank"} className="grid">
      <div
        className="relative grid w-full"
        style={{
          width: (width / height) * 120,
          height: 120,
        }}
      >
        <Image
          className="object-contain object-left"
          src={image}
          alt={""}
          fill={true}
        />
      </div>
    </Link>
  );
};
