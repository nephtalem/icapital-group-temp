"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaMicrophone,
  FaBuilding,
  FaUsers,
  FaGlobeAfrica,
  FaUserTie,
} from "react-icons/fa";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatItem = ({
  icon,
  value,
  suffix = "",
  label,
  duration = 2,
}: StatItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="flex items-center space-x-4" ref={ref}>
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center text-2xl text-[#0A244E]">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-[#0A244E]">
          {inView ? (
            <CountUp
              start={0}
              end={value}
              duration={duration}
              separator=","
              suffix={suffix}
            />
          ) : (
            "0"
          )}
        </div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};

const NumbersStats = () => {
  const stats = [
    {
      icon: <FaMicrophone />,
      value: 8,
      label: "Summits",
    },
    {
      icon: <FaBuilding />,
      value: 20,
      suffix: "+",
      label: "Companies",
    },
    {
      icon: <FaUsers />,
      value: 500,
      suffix: "+",
      label: "Individuals",
    },
    {
      icon: <FaGlobeAfrica />,
      value: 8,
      suffix: "+",
      label: "Countries",
    },
    {
      icon: <FaUserTie />,
      value: 50,
      suffix: "+",
      label: "High Officials",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="mb-16 text-center text-3xl font-bold text-[#0A244E] md:text-4xl">
          EAFS in Numbers
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersStats;
