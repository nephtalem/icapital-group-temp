import Image from "next/image";
import JourneyImg from "@/assets/journey-img.jpeg";
import Step1 from "@/assets/step1.png";
import Step2 from "@/assets/step2.png";
import Step3 from "@/assets/step3.png";
import Step4 from "@/assets/step4.png";

const milestones = [
  {
    year: "2011",
    image: Step1,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus.",
  },
  {
    year: "2016",
    image: Step2,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus viverra velit.",
  },
  {
    year: "2022",
    image: Step3,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus viverra velit.",
  },
  {
    year: "2025 & Counting",
    image: Step4,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar eu tellus viverra velit.",
    highlight: true,
  },
];

const Journey = () => {
  return (
    <section className="flex flex-col items-center py-16 px-6">
      {/* Header */}
      <div className="bg-orange-200 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
        Our Journey
      </div>
      <h2 className="text-3xl font-bold text-center text-gray-900 mt-4">
        Moving Through Years with Success
      </h2>

      {/* Content Wrapper (Image First on Desktop, Timeline First on Mobile) */}
      <div className="flex flex-col md:flex-row-reverse mt-12 w-full max-w-5xl md:max-w-7xl items-center gap-16">
        {/* Timeline - Appears First on Mobile, Second on Desktop */}
        <div className="relative w-full md:w-1/2 mt-10 md:mt-0 pl-6 md:pl-10">
          <div className="border-l-2 border-orange-300 absolute left-[16px] md:left-8 top-0 h-full"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="relative mb-10 flex items-start">
              {/* Circle with Icon */}
              <div className="absolute -left-5 w-6 h-6 rounded-full border-4 border-orange-300 bg-white flex items-center justify-center">
                <Image
                  src={milestone.image}
                  alt={milestone.year}
                  width={16}
                  height={16}
                />
              </div>

              {/* Text */}
              <div
                className={`ml-8 ${
                  milestone.highlight
                    ? "font-bold text-orange-600"
                    : "text-gray-700"
                }`}
              >
                <h3 className="text-lg font-semibold">{milestone.year}</h3>
                <p className="text-sm mt-1">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side Image - Appears Second on Mobile, First on Desktop */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full md:w-[75%] h-[350px] md:h-[450px] rounded-tl-[100px] overflow-hidden relative">
            <Image
              src={JourneyImg}
              alt="Team Working"
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
