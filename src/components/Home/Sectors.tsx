import Image from "next/image";
import Link from "next/link";
import Card1Img from "@/assets/card1.png";
import Card2Img from "@/assets/card2.png";
import Card3Img from "@/assets/card3.png";
import Card4Img from "@/assets/card4.png";
import Card5Img from "@/assets/card5.png";
import Card6Img from "@/assets/card6.png";
import Tag from "@/ui/Tag";

const cards = [
  {
    image: Card1Img,
    title: "Training & Consulting Solutions",
    description:
      "We provide expert-led training programs and consulting services designed to empower professionals and businesses with the skills needed to navigate today's dynamic market.",
    link: "/learning-solutions",
  },
  {
    image: Card2Img,
    title: "Capital Market Solutions",
    description:
      "Offering investment advisory, financial planning, and capital market insights to help businesses and individuals make informed investment decisions.",
    link: "https://investify.et/",
  },
  {
    image: Card3Img,
    title: "Life Design Lab",
    description:
      "A unique program focused on personal and career growth, helping individuals design a fulfilling life through mentorship, coaching, and structured planning.",
    link: "/advisory-solutions",
  },
  {
    image: Card4Img,
    title: "Software Development Solutions",
    description:
      "Building innovative software solutions tailored to your business needs, from web and mobile applications to enterprise-grade platforms.",
    link: "https://frontiertech.org/",
  },
  {
    image: Card5Img,
    title: "East Africa Finance Summit",
    description:
      "A premier event that brings together industry leaders, policymakers, and experts to discuss financial trends, investment opportunities, and economic growth in East Africa.",
    link: "/knowledge-sharing",
  },
  {
    image: Card6Img,
    title: "International Programs",
    description:
      "Facilitating global exchange programs, professional development opportunities, and cross-border partnerships to foster innovation and collaboration.",
    link: "/cross-border-solutions",
  },
];

const Sectors = () => {
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
              <div className="absolute inset-0 flex cursor-pointer flex-col justify-center bg-white px-6 py-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-700">{card.description}</p>
                <div className="mt-6 flex justify-end">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                    →
                  </span>
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
