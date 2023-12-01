"use client";

import { MainText } from "../MainText";
import { Partner } from "./Partner";

export const Partners = ({
  partner,
  partnerIntro,
  title,
}: {
  title: string;
  partnerIntro: string;
  partner: { image: string; to: string }[];
}) => {
  return (
    <div className="grid w-screen px-10 py-40 md:px-24">
      <div className="my-16 grid max-w-[900px] justify-items-center justify-self-center text-center">
        <MainText title={title} />
        <p className="mt-10 text-xl text-black">{partnerIntro}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-3">
        {partner!.map((partner, index) => (
          <Partner
            key={index}
            to={partner!.to!}
            image={`${process.env.NEXT_PUBLIC_DATA}${partner.image}`}
          />
        ))}
      </div>
    </div>
  );
};
