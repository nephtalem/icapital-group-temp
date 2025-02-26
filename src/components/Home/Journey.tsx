import Image from "next/image";
import JourneyImg from "@/assets/journey-img.jpeg";
import Step1 from "@/assets/step1.png";
import Step2 from "@/assets/step2.png";
import Step3 from "@/assets/step3.png";
import Step4 from "@/assets/step4.png";
import Tag from "@/ui/Tag";

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
    <section className="flex flex-col items-center px-6 py-16">
      {/* Header */}
      <Tag
        title="Our Journey"
        titleColor="text-[#F78019]"
        bgColor="bg-[#F7801926]"
      />
      <h2 className="mt-4 text-center text-3xl font-bold text-gray-900">
        Moving Through Years with Success
      </h2>

      {/* Content Wrapper (Image First on Desktop, Timeline First on Mobile) */}
      <div className="mt-12 flex w-full max-w-5xl flex-col gap-16 md:max-w-7xl md:flex-row-reverse  md:gap-32">
        {/* Timeline - Appears First on Mobile, Second on Desktop */}
        <div className="relative flex h-[450px] w-full flex-col justify-between pl-6 md:h-[600px] md:w-1/2 md:pl-10">
          <div className="absolute left-[16px] top-0 h-full border-l-2 border-orange-300 md:left-8"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-start">
              {/* Circle with Icon */}
              <div className="absolute -left-5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-orange-300 bg-white">
                <Image
                  src={milestone.image}
                  alt={milestone.year}
                  width={16}
                  height={16}
                />
              </div>

              {/* Text */}
              <div className={"ml-14 text-gray-700 "}>
                <h3 className="text-xl font-bold text-[#191919]">
                  {milestone.year}
                </h3>
                <p className="mt-3 text-sm max-w-[320px]">{milestone.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side Image - Appears Second on Mobile, First on Desktop */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <div className="relative h-[375px] w-full overflow-hidden rounded-tl-[100px] md:h-[650px] md:w-[100%]">
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
