import Image from "next/image";
import PortfolioImg1 from "@/assets/portfolio-img-1.png";
import PortfolioImg2 from "@/assets/portfolio-img-2.png";
import PortfolioImg3 from "@/assets/portfolio-img-3.png";
import Link from "next/link";

const portfolioItems = [
  { id: 1, title: "Portfolio 1", image: PortfolioImg1 },
  { id: 2, title: "Portfolio 2", image: PortfolioImg2 },
  { id: 3, title: "Portfolio 3", image: PortfolioImg3 },
];

const Portfolio = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <span className="bg-orange-100 text-orange-500 px-4 py-1 rounded-full text-sm">
        Portfolio
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
        What We Have Achieved So Far
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 text-left ">
                {item.title}
              </h3>
              <Link href="#" className="text-orange-500 mt-6 inline-block">
                View Project →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-8 bg-orange-500  text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
        <span className="mr-4"> See More</span>
        <span>→</span>
      </button>
    </section>
  );
};

export default Portfolio;
