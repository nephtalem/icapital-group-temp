import Image from "next/image";
import Link from "next/link";
import Card1Img from "@/assets/card1.png";
import Card2Img from "@/assets/card2.png";
import Card3Img from "@/assets/card3.png";
import Card4Img from "@/assets/card4.png";
import Card5Img from "@/assets/card5.png";
import Card6Img from "@/assets/card6.png";
import Tag from "@/ui/Tag";
import { FiExternalLink } from "react-icons/fi";
import FrontierTechLogo from "@/assets/logos/frontier-logo.png";
import IcapitalInstituteLogo from "@/assets/logos/icapital-institute-logo.png";
import InvestifyLogo from "@/assets/logos/investify-logo.png";
import LeadLifeDesignLabLogo from "@/assets/logos/LEAD-Logo.png";
import IcapitalInvestmentLogo from "@/assets/logos/iip-green-logo.png";
import EAFSLogo from "@/assets/logos/EAFS-Logo.png";

const cards = [
  {
    image: Card1Img,
    title: "Training & Consulting Solutions",
    description:
      "We provide expert-led training programs and consulting services designed to empower professionals and businesses with the skills needed to navigate today's dynamic market.",
    link: "/learning-solutions",
    website: "icapital.education",
    logo: IcapitalInstituteLogo,
    originalWebsiteBgColor: "linear-gradient(to right, #253E5E, #19A2F7)",
    isGradient: true,
  },
  {
    image: Card2Img,
    title: "Capital Market Solutions",
    description:
      "Offering investment advisory, financial planning, and capital market insights to help businesses and individuals make informed investment decisions.",
    link: "https://investify.et/",
    website: "investify.et",
    logo: InvestifyLogo,
    originalWebsiteBgColor: "#06302F",
  },
  {
    image: Card3Img,
    title: "Life Design Lab",
    description:
      "A unique program focused on personal and career growth, helping individuals design a fulfilling life through mentorship, coaching, and structured planning.",
    link: "https://lead-life-design-lab.vercel.app/",
    website: "leadlifedesignlab.com",
    logo: LeadLifeDesignLabLogo,
    originalWebsiteBgColor: "#1D82FF",
  },
  {
    image: Card4Img,
    title: "Software Development Solutions",
    description:
      "Building innovative software solutions tailored to your business needs, from web and mobile applications to enterprise-grade platforms.",
    link: "https://frontiertech.org/",
    website: "frontiertech.org",
    logo: FrontierTechLogo,
    originalWebsiteBgColor: "#00B152",
  },
  {
    image: Card5Img,
    title: "East Africa Finance Summit",
    description:
      "A premier event that brings together industry leaders, policymakers, and experts to discuss financial trends, investment opportunities, and economic growth in East Africa.",
    link: "/eafs",
    website: "eafs.africa",
    logo: EAFSLogo,
    originalWebsiteBgColor: "linear-gradient(to right, #253E5E, #F78019)",
    isGradient: true,
  },
  {
    image: Card6Img,
    title: "International Programs",
    description:
      "Facilitating global exchange programs, professional development opportunities, and cross-border partnerships to foster innovation and collaboration.",
    link: "https://i-capital-investment-partners.vercel.app/",
    website: "icapital.global",
    logo: IcapitalInvestmentLogo,
    originalWebsiteBgColor: "#274E13",
  },
];

const Sectors = () => {
  // Helper function to determine if a color is dark based on its hex value
  const isColorDark = (hexColor: string): boolean => {
    // If it's a gradient, we'll assume it's dark
    if (hexColor.includes("gradient")) {
      return true;
    }

    // Remove the hash if it exists
    const hex = hexColor.replace("#", "");

    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return true if dark, false if light
    return luminance < 0.5;
  };

  // Function to get color for small elements in a card
  const getElementColor = (card: any): string => {
    if (card.isGradient) {
      // Extract the second color from the gradient for use in small elements
      if (card.originalWebsiteBgColor.includes("#F78019")) {
        return "#F78019"; // For EAFS card
      }
      return "#19A2F7"; // For Training card
    }
    return card.originalWebsiteBgColor;
  };

  return (
    <section className="bg-[#F8F8F8] px-6 py-16 md:px-12">
      {/* Header Section */}
      <div className="mb-14 text-center">
        <Tag
          title="The iCapital Group"
          titleColor="text-[#F78019]"
          bgColor="bg-[#F7801926]"
        />
        <h1 className="my-4 text-xl font-bold text-gray-900 md:my-6 md:text-[40px]">
          Creating Impact Through Diverse Sectors
        </h1>
        <p className="text-xs text-gray-600 md:text-base">
          Empowering businesses, individuals, and communities with innovative
          solutions that drive growth, development, and success.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Link key={index} href={card.link} passHref>
            <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              {/* Image Section */}
              <div className="relative h-60 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              {/* Title & Arrow */}
              <div className="flex items-center justify-between p-6">
                <h3 className="block w-fit text-xl font-semibold text-gray-900">
                  {card.title.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {card.title.split(" ").slice(-1)}
                </h3>
                <span className="text-2xl text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Hover Effect */}
              <div
                className="absolute inset-0 flex cursor-pointer flex-col justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: card.originalWebsiteBgColor,
                }}
              >
                <div>
                  <h2
                    className="mb-4 text-3xl font-semibold"
                    style={{
                      color: isColorDark(card.originalWebsiteBgColor)
                        ? "white"
                        : "black",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p
                    className="leading-relaxed"
                    style={{
                      color: isColorDark(card.originalWebsiteBgColor)
                        ? "rgba(255, 255, 255, 0.8)"
                        : "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative h-8 w-8 overflow-hidden rounded bg-white p-1">
                      <Image
                        src={card.logo}
                        alt={`${card.title} Logo`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div className="flex h-7 items-center rounded bg-white px-3">
                      <span
                        className="text-sm font-medium"
                        style={{ color: getElementColor(card) }}
                      >
                        {card.website}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                    <span
                      className="text-xl font-medium"
                      style={{ color: getElementColor(card) }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
