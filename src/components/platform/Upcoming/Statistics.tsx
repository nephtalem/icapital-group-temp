import { ComponentStatsticsStatstics, UpcomingEafsEntity } from "@/gql/graphql";
import Image from "next/image";
export const Statistics = ({
  upcoming,
  base,
}: {
  upcoming: UpcomingEafsEntity;
  base: string;
}) => {
  return (
    <div className={"flex my-20 flex-wrap items-center justify-center gap-10"}>
      {upcoming.attributes?.statstics?.map((statistic, i) => {
        return <StatisticItem key={i} statistic={statistic!} />;
      })}
    </div>
  );
};

const StatisticItem = ({
  statistic,
}: {
  statistic: ComponentStatsticsStatstics;
}) => {
  return (
    <div
      className={"grid justify-items-start px-10"}
      style={{
        borderLeft: `5px solid ${statistic.color}`,
      }}
    >
      <Image
        src={statistic.icon!.data!.attributes!.url!}
        alt={""}
        height={80}
        width={80}
        className={"object-contain object-left"}
      />
      <h3
        className={"text-4xl mt-4 font-bold"}
        style={{
          color: statistic.color!,
        }}
      >
        {statistic.amount}
      </h3>
      <p
        className={"text-2xl font-medium mt-2"}
        style={{
          color: statistic.color!,
        }}
      >
        {statistic.label}
      </p>
    </div>
  );
};
