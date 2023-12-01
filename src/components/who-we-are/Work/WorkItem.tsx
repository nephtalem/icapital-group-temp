"use client";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const WorkItem = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  return (
    <div className="grid w-full auto-rows-max content-center  justify-start justify-items-start gap-[.2rem]">
      <CountUp start={0} end={value}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start}>
            <span
              className="text-center text-[2rem] font-bold text-white before:content-['+'] md:text-[3rem]"
              ref={countUpRef}
            />
          </VisibilitySensor>
        )}
      </CountUp>
      <p className="text-center text-[1rem] font-medium text-white">{label}</p>
    </div>
  );
};
