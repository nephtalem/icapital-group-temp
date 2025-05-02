"use client";

import Image from "next/image";
import FinanceIcon from "@/assets/eafs/Key-themes/Finance.png";
import FintechIcon from "@/assets/eafs/Key-themes/Fintech.png";
import InsuranceIcon from "@/assets/eafs/Key-themes/Insurance.png";
import RegionalIcon from "@/assets/eafs/Key-themes/Regional.png";

interface ThemeCardProps {
  icon: any;
  title: string;
  description: string;
  iconBgColor: string;
}

const ThemeCard = ({
  icon,
  title,
  description,
  iconBgColor,
}: ThemeCardProps) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-white p-8 shadow-sm">
      <div className="mb-5 flex items-center">
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-lg ${iconBgColor} mr-4`}
        >
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-bold text-[#0A244E]">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const KeyThemes = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          Key Themes
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ThemeCard
            icon={FinanceIcon}
            title="Financial Sector Reform & Capital Markets"
            description="Insights into Ethiopia's economic reforms, financial sector liberalization, and the establishment of a national capital market."
            iconBgColor="bg-blue-100"
          />

          <ThemeCard
            icon={FintechIcon}
            title="Fintech & Digital Transformation"
            description="The impact of fintech, mobile money, and digital platforms in expanding financial access and driving innovation across the region."
            iconBgColor="bg-green-100"
          />

          <ThemeCard
            icon={InsuranceIcon}
            title="Insurance & Risk Management"
            description="Advancing insurance with data-driven pricing, insurtech solutions, and the development of independent regulatory frameworks."
            iconBgColor="bg-orange-100"
          />

          <ThemeCard
            icon={RegionalIcon}
            title="Regional Integration & Investment"
            description="Strategies for harmonizing financial systems, enhancing cross-border investments, and fostering regional economic collaboration."
            iconBgColor="bg-purple-100"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyThemes;
