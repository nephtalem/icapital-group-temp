import Image from "next/image";
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
  },
  {
    image: Card2Img,
    title: "Capital Market Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
  },
  {
    image: Card3Img,
    title: "Life Design Lab",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
  },
  {
    image: Card4Img,
    title: "Software Development Solutions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
  },
  {
    image: Card5Img,
    title: "East Africa Finance Summit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
  },
  {
    image: Card6Img,
    title: "International Programs",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed pulvinar tellus aliquet elementum amet. Urna potenti malesuada lectus.",
  },
];

const Sectors = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#F8F8F8]">
      {/* Header Section */}
      <div className="text-center mb-14">
        <p className="text-orange-500 uppercase font-semibold tracking-wide">
          The Icapital Group
        </p>
        <h1 className="text-xl md:text-[40px] font-bold text-gray-900 mt-2">
          Creating Impacts through Different Sectors
        </h1>
        <p className="text-gray-600 text-xs md:text-base mt-4">
          Lorem ipsum dolor sit amet consectetur. Donec nulla egestas consequat
          risus.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image Section */}
            <div className="w-full h-60 relative">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            {/* Title & Arrow */}
            <div className="flex justify-between items-center p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <span className="text-orange-500 text-2xl transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-white px-6 py-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-700 mt-4">{card.description}</p>
              <div className="mt-6 flex justify-end">
                <span className="text-white text-xl bg-orange-500 rounded-full w-12 h-12 flex justify-center items-center font-bold">
                  →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
