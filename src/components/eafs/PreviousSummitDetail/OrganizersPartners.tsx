"use client";

import Image from "next/image";
import ICapitalLogo from "@/assets/eafs/organizer-&-partners/iCapital.png";
import ThinkAheadLogo from "@/assets/eafs/organizer-&-partners/ThinkAhead.png";
import JimmaUniversityLogo from "@/assets/eafs/organizer-&-partners/JimmaUniversity.png";
import AEILogo from "@/assets/eafs/organizer-&-partners/AEI.png";

const logos = [
  { src: ICapitalLogo, alt: "iCapital Africa Institute" },
  { src: ThinkAheadLogo, alt: "ACCA Think Ahead" },
  { src: JimmaUniversityLogo, alt: "Jimma University" },
  { src: AEILogo, alt: "Association of Ethiopian Insurers" },
];

const OrganizersPartners = () => (
  <section className="bg-[#FAFAFA] py-16 md:py-24">
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <h2 className="mb-12 text-center text-2xl font-bold text-[#253E5E] md:text-3xl">
        Organizers & Partners
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {logos.map((logo, i) => (
          <div
            key={logo.alt}
            className="flex h-24 w-48 items-center justify-center rounded bg-white p-4 shadow-sm transition-transform duration-200 hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              style={{ maxHeight: 64, maxWidth: 160 }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrganizersPartners;
