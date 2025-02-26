import Image from "next/image";
import Icon1 from "@/assets/feature-icon-1.png";
import Icon2 from "@/assets/features-icon-2.png";
import Icon3 from "@/assets/features-icon-3.png";
import Icon4 from "@/assets/features-icon-4.png";
import Tag from "@/ui/Tag";

const Features = () => {
  const features = [
    {
      icon: <Image src={Icon1} alt="Feature 1 Icon" width={60} height={60} />,
      title: "We Imagine",
      description:
        "Shaping the future with visionary ideas that redefine possibilities.",
    },
    {
      icon: <Image src={Icon2} alt="Feature 2 Icon" width={60} height={60} />,
      title: "We Develop",
      description:
        "Building innovative solutions that drive sustainable progress.",
    },
    {
      icon: <Image src={Icon4} alt="Feature 3 Icon" width={60} height={60} />,
      title: "We Deliver",
      description:
        "Executing with excellence to create meaningful, long-term impact.",
    },
    {
      icon: <Image src={Icon3} alt="Feature 3 Icon" width={60} height={60} />,
      title: "We Impact",
      description:
        "Empowering organizations to lead, adapt, and thrive in a dynamic world.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-full px-10">
        <div className="text-center">
          <Tag
            title="Features"
            titleColor="text-[#F78019]"
            bgColor="bg-[#F7801926]"
          />
          <h2 className="mt-2 text-3xl font-bold leading-snug text-gray-900">
            What Makes us Unique
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl bg-white px-6 py-12 shadow-lg transition duration-300 hover:shadow-xl"
            >
              <div className="mb-4  flex">{feature.icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-[#061C3D]">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
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
