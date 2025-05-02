"use client";

import Image from "next/image";
import NetworkingIcon from "@/assets/eafs/why-to-attend/blockchain-04.png";
import InsightsIcon from "@/assets/eafs/why-to-attend/idea-01.png";
import CollaborationIcon from "@/assets/eafs/why-to-attend/agreement-02.png";

const WhyAttend = () => {
  const reasons = [
    {
      icon: NetworkingIcon,
      title: "Networking",
      description:
        "Connect with over 500 industry leaders, policymakers, and innovators.",
    },
    {
      icon: InsightsIcon,
      title: "Insights",
      description:
        "Gain knowledge on financial sector reforms, fintech advancements, and investment opportunities.",
    },
    {
      icon: CollaborationIcon,
      title: "Collaboration",
      description:
        "Engage in discussions aimed at fostering regional financial integration and partnerships.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          Why to Attend?
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center text-[#F78019]">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0A244E]">
                {reason.title}
              </h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
