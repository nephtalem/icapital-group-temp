"use client";

import Image from "next/image";
import ICapitalLogo from "@/assets/eafs/organizer-&-partners/iCapital.png";
import ThinkAheadLogo from "@/assets/eafs/organizer-&-partners/ThinkAhead.png";
import JimmaUniversityLogo from "@/assets/eafs/organizer-&-partners/JimmaUniversity.png";
import AEILogo from "@/assets/eafs/organizer-&-partners/AEI.png";

const OrganizersPartners = () => {
  const partners = [
    {
      name: "iCapital Institute",
      logo: ICapitalLogo,
      width: 200,
    },
    {
      name: "ACCA Think Ahead",
      logo: ThinkAheadLogo,
      width: 220,
    },
    {
      name: "Jimma University",
      logo: JimmaUniversityLogo,
      width: 200,
    },
    {
      name: "Association of Ethiopian Insurers",
      logo: AEILogo,
      width: 220,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-16 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          Organizers & Partners
        </h2>

        <div className="flex flex-wrap items-center justify-evenly gap-x-24 gap-y-16 px-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={100}
                className="h-auto max-h-28 w-auto object-contain transition-opacity hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersPartners;
