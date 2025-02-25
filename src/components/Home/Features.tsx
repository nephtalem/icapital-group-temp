import Image from "next/image";
import Icon1 from "@/assets/feature-icon-1.png";
import Icon2 from "@/assets/features-icon-2.png";
import Icon3 from "@/assets/features-icon-3.png";

const Features = () => {
  const features = [
    {
      icon: <Image src={Icon1} alt="Feature 1 Icon" width={60} height={60} />,
      title: "Feature 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec nulla egestas consequat risus.",
    },
    {
      icon: <Image src={Icon2} alt="Feature 2 Icon" width={60} height={60} />,
      title: "Feature 2",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec nulla egestas consequat risus.",
    },
    {
      icon: <Image src={Icon3} alt="Feature 3 Icon" width={60} height={60} />,
      title: "Feature 3",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec nulla egestas consequat risus.",
    },
    {
      icon: <Image src={Icon3} alt="Feature 3 Icon" width={60} height={60} />,
      title: "Feature 4",
      description:
        "Lorem ipsum dolor sit amet consectetur. Donec nulla egestas consequat risus.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-full px-10">
        <div className="text-center">
          <span className="text-orange-500 text-sm font-medium uppercase tracking-wide">
            Features
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 leading-snug">
            What Makes us Unique
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white px-6 py-12 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex  mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
