"use client";

import Image from "next/image";
import BankIcon from "@/assets/eafs/who-attends/bank.png";
import BriefcaseIcon from "@/assets/eafs/who-attends/briefcase.png";
import RocketIcon from "@/assets/eafs/who-attends/rocket.png";
import MortarboardIcon from "@/assets/eafs/who-attends/mortarboard.png";
import EarthIcon from "@/assets/eafs/who-attends/earth.png";
import BuildingIcon from "@/assets/eafs/who-attends/building.png";
import LaptopIcon from "@/assets/eafs/who-attends/laptop.png";
import CityIcon from "@/assets/eafs/who-attends/city.png";

interface AttendeeCardProps {
  icon: any;
  title: string;
  iconColor: string;
}

const AttendeeCard = ({ icon, title, iconColor }: AttendeeCardProps) => {
  return (
    <div
      className="flex flex-col items-start rounded-lg bg-white p-8 transition-all hover:shadow-lg"
      style={{
        boxShadow: "0px 3.11px 77.76px 0px rgba(0, 0, 0, 0.03)",
      }}
    >
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center text-${iconColor}`}
      >
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <h3 className="mb-3 text-left text-xl font-bold text-[#0A244E]">
        {title}
      </h3>
    </div>
  );
};

const WhoAttends = () => {
  const attendees = [
    {
      icon: BankIcon,
      title: "Banks and Insurers",
      iconColor: "cyan-500",
    },
    {
      icon: BriefcaseIcon,
      title: "Executives and Industry Leaders",
      iconColor: "purple-500",
    },
    {
      icon: RocketIcon,
      title: "Fintech and Startups",
      iconColor: "red-500",
    },
    {
      icon: MortarboardIcon,
      title: "Academia & Researchers",
      iconColor: "amber-500",
    },
    {
      icon: EarthIcon,
      title: "International Organizations",
      iconColor: "yellow-500",
    },
    {
      icon: BuildingIcon,
      title: "Government Agencies",
      iconColor: "blue-500",
    },
    {
      icon: LaptopIcon,
      title: "Tech & Innovation Hubs",
      iconColor: "pink-500",
    },
    {
      icon: CityIcon,
      title: "Corporates & SME Representatives",
      iconColor: "green-500",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-6 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          Who Attends?
        </h2>

        <p className="mb-12 text-center text-gray-700">
          EAFS brings together a diverse group of participants, including:
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attendees.map((attendee, index) => (
            <AttendeeCard
              key={index}
              icon={attendee.icon}
              title={attendee.title}
              iconColor={attendee.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAttends;
