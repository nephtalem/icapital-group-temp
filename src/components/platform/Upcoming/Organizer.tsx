"use client";
import Image from "next/image";
import Link from "next/link";

export const Organizer = ({
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
    <Link href={to ?? "/"} target={"_blank"}>
      <div
        className="relative grid"
        style={{
          width: (width / height) * 80,
          height: 80,
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
