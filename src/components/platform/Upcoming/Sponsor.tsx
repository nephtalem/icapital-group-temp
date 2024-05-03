"use client";
import Image from "next/image";
import Link from "next/link";

export const Sponsor = ({
  image,
  to,
  width,
  height,
  level,
}: {
  image: string;
  to: string;
  width: number;
  height: number;
  level?: string;
}) => {
  return (
    <Link href={to} target={"_blank"} className="grid py-3">
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
        {level && (
          <div className={"absolute top-[-10px] justify-self-center"}>
            <Image
            className="object-contain object-left"
            src={
              level?.toLowerCase() === "platinum"
                ? "/images/platinum.png"
                : level?.toLowerCase() === "gold"
                  ? "/images/gold.png"
                  : "/images/silver.png"
            }
            alt={""}
            height={20}
            width={60}
          />
          </div>
        )}
      </div>
    </Link>
  );
};
