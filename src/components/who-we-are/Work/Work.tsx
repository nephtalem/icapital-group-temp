import { WorkItem } from "./WorkItem";

export const Work = () => {
  return (
    <div className="my-[6rem] md:px-[10vw] grid h-[23rem] auto-rows-max content-center  gap-y-[4rem] bg-gradient-to-br from-[#F58116] to-[#F79842] py-[2rem] md:p-0">
      <h2 className="text-center text-[2rem] font-bold text-white md:text-[3rem]">
        We Have Worked With
      </h2>
      <div className="grid grid-cols-1 justify-items-start gap-y-[3rem] md:grid-cols-4   md:justify-items-center">
        <WorkItem value={6} label={"Sectors"} />
        <WorkItem value={20} label={"International Partners"} />
        <WorkItem value={75} label={"Organizations"} />
        <WorkItem value={15000} label={"Training Participants"} />
      </div>
    </div>
  );
};
