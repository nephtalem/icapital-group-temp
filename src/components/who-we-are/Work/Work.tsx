import { WorkItem } from "./WorkItem";
import { WhoWeAreEntity } from "@/gql/graphql";
import { useEffect, useState } from "react";

export const Work = ({ who }: { who: WhoWeAreEntity }) => {
  return (
    <div className="my-[6rem] grid h-[23rem] auto-rows-max content-center gap-y-[4rem] bg-gradient-to-br from-[#F58116] to-[#F79842] py-[2rem] md:p-0 md:px-[10vw]">
      <h2 className="text-center text-[2rem] font-bold text-white md:text-[3rem]">
        {who.attributes?.clientCounterTitle}
      </h2>
      <div className="grid grid-cols-1 justify-items-start gap-y-[3rem] md:grid-cols-4 md:justify-items-center">
        {who.attributes?.ClientCounter?.map((counter) => (
          <WorkItem
            key={counter?.id}
            value={counter!.value!}
            label={counter?.name!}
          />
        ))}
      </div>
    </div>
  );
};
