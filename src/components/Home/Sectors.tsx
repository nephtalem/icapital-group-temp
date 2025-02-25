import Image from "next/image";
import Link from "next/link";
import Card1Img from "@/assets/card1.png";
import Card2Img from "@/assets/card2.png";
import Card3Img from "@/assets/card3.png";
import Card4Img from "@/assets/card4.png";
import Card5Img from "@/assets/card5.png";
import Card6Img from "@/assets/card6.png";

const cards = [
  {
    image: Card1Img,
    title: "Training & Consulting Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
    link: "/learning-solutions",
  },
  {
    image: Card2Img,
    title: "Capital Market Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
    link: "https://investify.et/",
  },
  {
    image: Card3Img,
    title: "Life Design Lab",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
    link: "/advisory-solutions",
  },
  {
    image: Card4Img,
    title: "Software Development Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
    link: "https://frontiertech.org/",
  },
  {
    image: Card5Img,
    title: "East Africa Finance Summit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
    link: "/knowledge-sharing",
  },
  {
    image: Card6Img,
    title: "International Programs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
    link: "/cross-border-solutions",
  },
];

const Sectors = () => {
  return (
    <section className="bg-[#F8F8F8] px-6 py-16 md:px-12">
      {/* Header Section */}
      <div className="mb-14 text-center">
        <p className="font-semibold uppercase tracking-wide text-orange-500">
          The Icapital Group
        </p>
        <h1 className="mt-2 text-xl font-bold text-gray-900 md:text-[40px]">
          Creating Impacts through Different Sectors
        </h1>
        <p className="mt-4 text-xs text-gray-600 md:text-base">
          Lorem ipsum dolor sit amet consectetur. Donec nulla egestas consequat
          risus.
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
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
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
